const captionList = document.querySelector('.caption-carousel');
const captionText = captionList.querySelector('.caption-text');
const captionImage = captionList.querySelector('.caption-image');
const previousCaptionButton = captionList.querySelector('.caption-arrow--previous');
const nextCaptionButton = captionList.querySelector('.caption-arrow--next');

let captions = [];
let currentCaptionIndex = 0;

function showCaption(index) {
  const caption = captions[index];

  if (!caption) {
    captionText.textContent = 'Captions will appear here.';
    captionImage.removeAttribute('src');
    captionImage.hidden = true;
    previousCaptionButton.disabled = true;
    nextCaptionButton.disabled = true;
    return;
  }

  currentCaptionIndex = index;
  captionText.textContent = caption.text;
  captionImage.hidden = !caption.image;

  if (caption.image) {
    captionImage.src = new URL(caption.image, new URL('./captions/', document.baseURI)).href;
    captionImage.alt = caption.imageAlt || '';
  } else {
    captionImage.removeAttribute('src');
    captionImage.alt = '';
  }

  const hasMultipleCaptions = captions.length > 1;
  previousCaptionButton.disabled = !hasMultipleCaptions;
  nextCaptionButton.disabled = !hasMultipleCaptions;
}

function moveCaption(direction) {
  if (captions.length === 0) {
    return;
  }

  const nextIndex = (currentCaptionIndex + direction + captions.length) % captions.length;
  showCaption(nextIndex);
}

previousCaptionButton.addEventListener('click', () => moveCaption(-1));
nextCaptionButton.addEventListener('click', () => moveCaption(1));

captionImage.addEventListener('error', () => {
  captionImage.hidden = true;
  captionImage.removeAttribute('src');
  console.error('Unable to load the current caption image.');
});

fetch('./captions/captions.json')
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Caption catalog request failed with status ${response.status}.`);
    }

    return response.json();
  })
  .then((data) => {
    if (
      !Array.isArray(data) ||
      data.some((caption) =>
        !caption ||
        typeof caption.text !== 'string' ||
        (caption.image !== undefined && typeof caption.image !== 'string') ||
        (caption.imageAlt !== undefined && typeof caption.imageAlt !== 'string')
      )
    ) {
      throw new Error('Caption catalog must be an array of text captions with optional image and imageAlt paths.');
    }

    captions = data;
    showCaption(0);
  })
  .catch((error) => {
    captionText.textContent = 'Captions could not be loaded.';
    console.error(error);
  });
