# Dadu Khelaghor — দাদু খেলাঘর

Official website for Dadu Khelaghor, Bangladesh's premier sports equipment shop. Built with Next.js and deployed on Cloudflare Pages via `@opennextjs/cloudflare`.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Runtime**: Cloudflare Workers (via `@opennextjs/cloudflare`)
- **Deployment**: Cloudflare Pages
- **3D**: Three.js (interactive boot viewer)

---

## Deploying to Cloudflare Pages

### Option 1 — Cloudflare Pages Dashboard (Recommended)

1. Push your code to GitHub.
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/) → **Create a project** → **Connect to Git**.
3. Select this repository.
4. Configure the build settings:

   | Setting | Value |
   |---|---|
   | **Framework preset** | None |
   | **Build command** | `npx opennextjs-cloudflare build` |
   | **Build output directory** | `.open-next/assets` |
   | **Node.js version** | `20` (set in Environment Variables: `NODE_VERSION = 20`) |

5. Under **Environment variables**, add:
   - `NODE_VERSION` = `20`
   - `NEXT_PUBLIC_SITE_URL` = `https://dadubd.com` (or your custom domain)

6. Click **Save and Deploy**.

> **Important**: Cloudflare Pages uses `npm ci` to install dependencies. Make sure `package-lock.json` is always committed and in sync with `package.json`.

### Option 2 — Wrangler CLI

```bash
# Install dependencies
npm ci

# Build for Cloudflare
npx opennextjs-cloudflare build

# Deploy to Cloudflare Workers
npx opennextjs-cloudflare deploy
```

Or using the npm scripts:

```bash
npm run deploy
```

### Preview Locally

```bash
npm run preview
```

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
app/
├── layout.tsx          # Root layout with SEO metadata & schema.org
├── page.tsx            # Homepage (hero, products, about, contact)
├── BootBackground.tsx  # Interactive Three.js 3D boot viewer
├── globals.css         # Global styles
├── products/[slug]/    # Individual product pages
├── blog/[slug]/        # Blog posts
├── help/               # Help center pages
├── sitemap.ts          # Auto-generated sitemap
└── robots.ts           # robots.txt
public/
├── models/3dboot.glb   # 3D boot model
└── images/             # Static images, favicons, OG image
```

---

## Cloudflare Configuration Files

| File | Purpose |
|---|---|
| `open-next.config.ts` | `@opennextjs/cloudflare` build config |
| `wrangler.jsonc` | Cloudflare Workers deployment config |
| `.gitignore` | Excludes `.open-next/` and `.wrangler/` build artifacts |
