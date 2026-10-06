# RTZWeb

Standalone Recreation Zone navigation page and 3D art gallery project.

## Run locally

From this folder, start a local static web server:

```powershell
py -m http.server 8000
```

Open <http://localhost:8000/> in a browser. Select **Art Gallery** to open the
gallery viewer. The gallery and its assets, including looping background music,
are in `SatyakamsVGal/`.

Use a local web server rather than opening `index.html` as a `file://` URL;
the 3D viewer loads local models, textures, and configuration files.
