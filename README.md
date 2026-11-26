# Pet Buddy 🐾

A responsive, static pet discovery and care website. Built with plain HTML, CSS and JavaScript, so it can be hosted free with GitHub Pages.

## Features
- Responsive layout for phones, tablets and desktops
- Pet cards with category filters and name search
- Favorite buttons saved in the browser with `localStorage`
- Pet-care tips section
- Contact form demo with front-end validation/message
- No build tools, frameworks or API keys required

## Run locally
1. Download and unzip this project.
2. Open the `pet-buddy-website` folder.
3. Double-click `index.html` to open it in your browser.

For a local development server, you can also use VS Code's Live Server extension.

## Publish on GitHub Pages
1. Sign in to GitHub and create a **new public repository** (for example, `pet-buddy`).
2. Upload all files from this folder to the repository's root. Make sure `index.html`, `style.css`, and `script.js` are at the top level—not inside another nested folder.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch **main** and folder **/(root)**, then click **Save**.
6. Wait a minute or two. GitHub will show your published website URL in the Pages section.

## Customize
- Edit pet profiles and images in `script.js` in the `pets` array.
- Change colors, spacing and typography in `style.css`.
- Edit page text and sections in `index.html`.

## Important demo notes
- Pet profiles are sample content, not verified real adoption listings.
- The contact form currently displays a demo confirmation only. It does not send or store messages. Connect a trusted form backend/service before using it publicly.
- Photos load from Unsplash, so an internet connection is needed to display them.
- Replace the example email address and sample listings before publishing as a real service.
