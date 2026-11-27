# Pet Buddy

Pet Buddy is a responsive, front-end animal welfare and community platform built with HTML, CSS and vanilla JavaScript. It is designed as a college project and can be hosted on GitHub Pages.

## Features
- Responsive landing page and mobile navigation
- Pet adoption gallery with search, species/age filters and saved favourites
- Adoption-interest tracking (local demo)
- Animal rescue reporting with downloadable report
- Rescue dashboard with local report counts and editable status
- Lost and found pet notices with downloadable copies
- Pet care guidance and veterinary map search
- Pet-care reminders stored in the browser
- Volunteer interest registration
- Owner surrender / responsible rehoming request form
- NGO discovery and donation-safety guidance

## Run locally
Open `index.html` in a modern browser. No build tools or server are required. An internet connection is needed for Google Fonts, remote pet photos and external map/search links.

## Publish with GitHub Pages
1. Extract the ZIP.
2. Upload `index.html`, `styles.css`, `app.js` and `README.md` to the root of your GitHub repository.
3. In GitHub, open **Settings → Pages**.
4. Select **Deploy from a branch**, choose `main` and `/ (root)`, then save.

## Data and safety limitations
This is a static front-end demo. Forms, favourites, reminders, volunteer sign-ups, adoption enquiries and dashboard data are stored in the visitor's browser using localStorage; they are not sent to a server, NGO or other visitor. Downloaded reports and notices must be shared manually. Sample pet profiles are illustrative, not verified live adoption listings. Rescue status is manually editable and does not dispatch rescuers. NGO and veterinary links open external searches. No payments are processed.

For a production deployment, add a secure backend and database, authentication, verified NGO/shelter records, image upload storage, privacy controls, moderation, notification workflows and a trusted payment provider. Never use this demo as an emergency dispatch service.

## Technology
HTML5 · CSS3 · Vanilla JavaScript · Browser localStorage
