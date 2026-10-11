# Developer Portfolio

A dark, modern, single-page portfolio built with plain HTML, CSS and JavaScript. No build step, no dependencies.

## Structure

```
portfolio/
├── index.html        page structure
├── css/style.css     all styling
├── js/data.js        YOUR CONTENT (edit this file)
├── js/main.js        renders the page from data.js
└── assets/resume.pdf put your résumé here
```

## Customize

1. Open `js/data.js` to change your name, links, about text, projects, skills and education.
2. For each project set `github` (repo link) and `demo` (live link, or `""` if none).
3. Copy your résumé PDF into `assets/` and name it `resume.pdf`.
4. Open `index.html` in a browser to preview.

## Run locally (optional)

```bash
python -m http.server 8000
# then open http://localhost:8000
```

## Deploy free on GitHub Pages

1. Create a repo (e.g. `your-username.github.io`) and push these files to the `main` branch.
2. Repo Settings > Pages > Source: `main` branch, `/ (root)`.
3. Your site goes live at `https://your-username.github.io`.

Netlify and Vercel also work: drag the folder into their dashboard.

## Contact form

The form opens the visitor's email app with the message filled in. To receive messages directly, point the form at a service such as Formspree or Web3Forms.
