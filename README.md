# Kartheek Potnuru — Portfolio Website

A responsive React + Vite portfolio based on the supplied portfolio brief. It uses Tailwind CSS, Framer Motion, and Lucide React.

## Run locally

1. Install Node.js (LTS).
2. Extract this project and open the `kartheek-portfolio` folder in VS Code.
3. Open a terminal in that folder and run:

```bash
npm install
npm run dev
```

4. Open the local URL printed by Vite (usually `http://localhost:5173`).

To create a production build:

```bash
npm run build
npm run preview
```

## Customize your details

Edit **`src/config.js`**. Personal details, skills, projects, education, internship, and certificates are centralized there.

Before publishing:
- Replace `YOUR_EMAIL@example.com` with your active email address.
- Replace `YOUR_LINKEDIN_URL` with your LinkedIn profile URL.
- Add GitHub repository and live demo URLs to each project (`github` and `demo`).
- Review all project descriptions and technologies so they accurately match your completed work.
- Remove any skill or certificate you do not want to display.

The site deliberately does not include a pretend contact form submission. The contact section uses a real email link once you add your email.

## Deploy free with Vercel

1. Push this project to a GitHub repository.
2. Sign in to [Vercel](https://vercel.com/) with GitHub.
3. Select **Add New → Project** and import the repository.
4. Keep the framework preset as **Vite**. Build command: `npm run build`. Output directory: `dist`.
5. Select **Deploy**.

## Deploy free with Netlify

1. Push the project to GitHub.
2. Sign in to [Netlify](https://www.netlify.com/) and choose **Add new site → Import an existing project**.
3. Select the repository. Build command: `npm run build`; publish directory: `dist`.
4. Deploy the site.

## Project structure

```text
kartheek-portfolio/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── README.md
└── src/
    ├── config.js
    ├── main.jsx
    └── styles.css
```
