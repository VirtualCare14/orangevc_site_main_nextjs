# Orange Virtual Connect — Website Package

A static, self-contained 4-page website your team can host anywhere.

## Pages
1. **Home (`index.html`)** — company, services overview, engagement models, why OVC, CTA.
2. **Products (`products.html`)** — Sales CRM, Medora360, OrangePulse, Remind365, Warehouse Management Solution.
3. **Industries (`industries.html`)** — Healthcare, Manufacturing, SME, MSME, Technology, Startups.
4. **Blog & Case Studies (`blog.html`)** — 3 featured case studies (Palkotech Engineering, Cable Sales, PrayasCare) + insights posts.

## File structure
```
orangevc-website/
├── index.html
├── products.html
├── industries.html
├── blog.html
├── css/style.css
├── js/main.js
└── README.md
```

## How to host (pick any)

### Netlify / Vercel / Cloudflare Pages
- Drag the entire `orangevc-website/` folder into their dashboard.
- Done. No build step required.

### Traditional cPanel / Apache / Nginx
- Upload all files into your web root (e.g. `public_html/orangevc/`).
- Ensure `index.html` is the default landing file.

### GitHub Pages
- Push folder to a repo, enable Pages on the `main` branch.

## Customization quick-start
- **Colors / theme** → edit the CSS variables at the top of `css/style.css` (look for `--c-orange`).
- **Contact info** → search-and-replace `sales@orangevirtualconnect.com` and `+91 93105 57156` across the 4 HTML files.
- **Add a new product or industry** → copy an existing card block in the relevant page and update the content.

## Browser support
Works on all modern desktop and mobile browsers (Chrome, Safari, Firefox, Edge).
No build step. No backend. No dependencies beyond Google Fonts.
