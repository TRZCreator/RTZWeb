# Central Navigation Captions

Add captions to `captions.json` as an array of objects. Each object requires
`text` and may include an `image` path and accessible `imageAlt` text:

```json
[
  {
    "text": "A caption shown in the carousel.",
    "image": "images/example.jpg",
    "imageAlt": "Description of the image"
  },
  {
    "text": "A text-only caption."
  }
]
```

Place optional images in this folder (for example, in `images/`) and use paths
relative to this folder. Without an `image`, the carousel displays the text on
its transparent background. The previous and next arrows cycle through all
captions.
