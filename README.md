# Jack Ge — Portfolio

This portfolio is a static website built with HTML, CSS, and vanilla JavaScript.

## Edit the site

- `index.html` contains the homepage.
- `style.css` contains the shared homepage and case-study styles.
- `script.js` contains the small amount of interaction logic.
- `work/` contains the six independently accessible case studies.
- `assets/` contains the original project imagery.

No package installation, build step, or JavaScript framework is required. To preview
the site locally, serve the repository root with any static HTTP server, for example:

```sh
python -m http.server 8080
```

Then open `http://localhost:8080/`.

## Deployment

GitHub Pages deploys the repository root through
`.github/workflows/deploy.yml` when changes are pushed to `master` or `main`.
The custom domain is configured in `CNAME`.
