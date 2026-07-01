# Dadu Khelaghor — দাদু খেলাঘর

Official website for Dadu Khelaghor, Bangladesh's premier sports equipment shop. Built with Next.js and configured for static HTML/CSS/JS export deployed directly to Cloudflare Pages.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Export Method**: Static Export (`output: 'export'`)
- **Deployment Platform**: Cloudflare Pages

---

## Deploying to Cloudflare Pages

This site is configured as a fully static application. Cloudflare Pages offers native static hosting for this without requiring any Workers or setup servers.

### Configure the Cloudflare Pages Dashboard

1. Go to the [Cloudflare Pages Dashboard](https://dash.cloudflare.com/) -> **Workers & Pages** -> **Create a application** -> **Pages** -> **Connect to Git**.
2. Select your GitHub repository (`sayedulmorsalin/dadu-info`).
3. Set the build configurations:

   | Setting | Value |
   |---|---|
   | **Framework preset** | `Next.js (Static HTML Export)` |
   | **Build command** | `npm run build` |
   | **Build output directory** | `out` |

4. Under **Environment variables** (Optional):
   - Add `NEXT_PUBLIC_SITE_URL` = `https://dadubd.com`
5. Click **Save and Deploy**.

Cloudflare will run `npm run build`, export your pages to the `out/` directory, and deploy them across their global CDN edge instantly.

---

## Local Development

### Installation

```bash
npm install
```

### Dev Server

```bash
npm run dev
```

### Build & Export Locally

To test the static build output locally:

```bash
npm run build
```
This generates an `out/` directory containing all your static HTML, CSS, JavaScript, images, and model assets.
