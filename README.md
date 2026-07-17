# Your Portfolio

A dark, animated, 3D portfolio built with Next.js, react-three-fiber, and Framer Motion.

## Run it on your computer

1. Install [Node.js](https://nodejs.org) (LTS version) if you don't have it.
2. Open a terminal in this folder and run:

```bash
npm install    # downloads the libraries (one time, ~1 min)
npm run dev    # starts the site
```

3. Open http://localhost:3000

## Make it yours (5 minutes)

- **All text, links, jobs, projects** → edit `data/content.js`. It's heavily commented; nothing else needs touching.
- **Resume** → drop your PDF into `public/` named `resume.pdf`.
- **Project screenshots** → export your Power BI dashboards as PNG (~1600px wide), drop them in `public/projects/`, and update the `image` paths in `content.js`.
- **Live Power BI embed (optional)** → in Power BI: File → Embed report → Publish to web, paste the URL into a project's `embedUrl`. Only for non-confidential data — publish-to-web is public.

## Deploy free on Vercel

1. Push this folder to a GitHub repository (GitHub Desktop is the easiest way).
2. Go to [vercel.com](https://vercel.com), sign in with GitHub, click **Add New → Project**, pick the repo, click **Deploy**. That's it — Vercel detects Next.js automatically.
3. Every time you push a change to GitHub, the live site updates itself.

### Custom domain (optional)

Buy a domain (Namecheap/Cloudflare, ~$10/yr) → in Vercel: Project → Settings → Domains → add it → copy the two DNS records Vercel shows into your registrar's DNS settings. Live in ~10 minutes, HTTPS automatic.
