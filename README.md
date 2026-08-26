# Dadu Khelaghor (দাদু খেলাঘর) — Official Web Portal & Digital Ecosystem

[![Next.js](https://img.shields.io/badge/Next.js-16.2.9-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.7-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Three.js](https://img.shields.io/badge/Three.js-0.184.0-black?style=for-the-badge&logo=three.js)](https://threejs.org/)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare_Pages-Deployment-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://pages.cloudflare.com/)
[![License](https://img.shields.io/badge/License-Proprietary-blue?style=for-the-badge)](LICENSE)

> The official web portal, Android App Links bridge, and digital showcase for **Dadu Khelaghor (দাদু খেলাঘর)** — Bangladesh's premier sports equipment shop specializing in original football boots, goalkeeper gloves, and athletic gear.

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Architecture & Tech Stack](#-architecture--tech-stack)
- [Project Structure](#-project-structure)
- [Route & URL Mapping](#-route--url-mapping)
- [3D Interactive Showcase](#-3d-interactive-showcase)
- [Android App Links & Smart Deep Linking](#-android-app-links--smart-deep-linking)
- [SEO & Structured Data (JSON-LD)](#-seo--structured-data-json-ld)
- [Getting Started & Local Development](#-getting-started--local-development)
- [Testing & Automated Verification](#-testing--automated-verification)
- [Cloudflare Pages Deployment](#-cloudflare-pages-deployment)
- [Maintainers & Contact](#-maintainers--contact)

---

## 🌟 Overview

**Dadu Khelaghor** ([dadubd.com](https://dadubd.com)) is a high-performance web platform configured for static HTML/CSS/JS export (`output: 'export'`) and global edge delivery via **Cloudflare Pages**. 

The platform serves multiple crucial roles:
1. **Official Brand & E-Commerce Portal**: Showcases football boots (Adidas F50, Nike Mercurial, Predator), goalkeeper gloves, and sports combo kits with direct Cash on Delivery across all 64 districts in Bangladesh.
2. **Android Deep Linking & Fallback Gateway**: Intercepts web URLs on Android devices to seamlessly launch the native Dadu Android app (`com.sayedulmarsalin.dadu`) or redirect users to Google Play Store with smart intent fallbacks.
3. **PWA & Mobile-First Experience**: Progressive Web App capabilities with offline-ready manifest, shortcut links, and responsive layouts.
4. **Interactive 3D WebGL Graphics**: Embedded interactive 3D boot model rendered in real-time using Three.js with full touch and mouse drag interactions.
5. **Help Center & Policy Compliance**: Dedicated knowledge base including order guides, payment walkthroughs (bKash, Nagad, Rocket), delivery details, return policies, and account deletion compliance for Google Play Store requirements.
6. **SEO & Content Authority**: Comprehensive SEO blog and product pages enriched with Schema.org JSON-LD microdata for high rankings in Bangladesh sports searches.

---

## ✨ Key Features

- **🎮 Interactive 3D Boot Viewer**: Real-time WebGL rendering of a 3D football boot (`3dboot.glb`) with customizable lighting, camera projection, user drag rotation, and dynamic viewport scaling.
- **📱 Android Digital Asset Links & Intent Routing**: Fully verified Digital Asset Links (`/.well-known/assetlinks.json`) and JavaScript-based Android Intent redirects with automatic fallback timers.
- **🌐 Full Static Site Generation (SSG)**: Zero-server dependency, lightning-fast static export compatible with Cloudflare Pages, Vercel, Netlify, or standard Nginx/Apache static servers.
- **💬 Direct Moderator Network**: Real-time WhatsApp ordering links mapped directly to verified store moderators for instant sizing assistance and stock verification.
- **🛡️ Google Play Compliant Account Deletion Flow**: Dedicated self-service guide and instructions at `/help/delete-account` meeting strict app store privacy standards.
- **🔍 Comprehensive SEO & Rich Snippets**:
  - `Organization` & `LocalBusiness` Schemas
  - `Product` & `Offer` Schemas with pricing in BDT
  - `FAQPage` Schemas for search result rich FAQ snippets
  - `BreadcrumbList` & `Article` Schemas for blog posts
  - Auto-generated XML Sitemap (`/sitemap.xml`) and `robots.txt`
- **⚡ Performance Optimized**:
  - Unoptimized static images for edge CDN caching
  - IntersectionObserver to pause 3D render loops when offscreen
  - Zero heavy UI frameworks — pure lightweight Vanilla CSS tokens

---

## 🛠️ Architecture & Tech Stack

| Layer | Technology | Description |
|---|---|---|
| **Framework** | [Next.js 16 (App Router)](https://nextjs.org/) | Static site generation with static params generation (`generateStaticParams`) |
| **Core Library** | [React 19](https://react.dev/) | Modern UI component rendering |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) | Strict type safety across the entire application |
| **3D Rendering** | [Three.js](https://threejs.org/) + `GLTFLoader` | WebGL 3D model rendering, lighting, camera control, and interaction |
| **Styling** | Vanilla CSS | Custom design token system (`globals.css`, `help.css`) |
| **Icons** | [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/) | Modern UI icons and social logos |
| **Testing** | [Playwright](https://playwright.dev/) | Headless browser testing & WebGL pixel validation scripts |
| **Hosting & Edge** | [Cloudflare Pages](https://pages.cloudflare.com/) | Static HTML edge deployment with global CDN distribution |

---

## 📂 Project Structure

```text
dadu-info/
├── app/                               # Next.js App Router root
│   ├── [...slug]/                     # Catch-all route for Android deep link redirects (/cart, /message, etc.)
│   │   └── page.tsx
│   ├── blog/                          # SEO Blog & Buying Guides
│   │   └── [slug]/
│   │       └── page.tsx               # Dynamic static blog post renderer with Article JSON-LD
│   ├── help/                          # Dadu Khelaghor Help Center
│   │   ├── contact-support/           # Customer support channels & contact info
│   │   ├── delete-account/            # Google Play compliant account deletion guide
│   │   ├── delivery-information/      # Delivery timelines & courier coverage (64 districts)
│   │   ├── how-to-place-order/        # Step-by-step order guide (App & WhatsApp)
│   │   ├── payment-methods/           # COD, bKash, Nagad, Rocket payment guide
│   │   ├── return-policy/             # 48-hour return & exchange guidelines
│   │   ├── help.css                   # Help Center specific styles
│   │   └── page.tsx                   # Help Center dashboard & index
│   ├── product/                       # Fallback product redirect gateway
│   │   ├── ProductStoreRedirect.tsx   # Client-side intent redirect helper
│   │   └── page.tsx
│   ├── products/                      # Static product catalog pages
│   │   └── [slug]/
│   │       └── page.tsx               # Product details page with Product JSON-LD schema
│   ├── AppRedirect.tsx                # Client-side Android intent redirect component
│   ├── BootBackground.tsx             # Interactive Three.js WebGL 3D boot background
│   ├── globals.css                    # Global CSS variables, reset, and layout styles
│   ├── layout.tsx                     # Root layout with LocalBusiness JSON-LD & meta tags
│   ├── not-found.tsx                  # Custom 404 page
│   ├── page.tsx                       # Home landing page with moderator grid & category showcases
│   ├── robots.ts                      # Dynamic robots.txt generator
│   └── sitemap.ts                     # Dynamic XML sitemap generator
├── assets/                            # Source static assets
│   ├── 3dboot.glb                     # Source 3D football boot GLTF binary model
│   └── icon.jpg                       # Brand primary icon
├── public/                            # Static public web assets
│   ├── .well-known/
│   │   └── assetlinks.json            # Android Digital Asset Links verification file
│   ├── images/                        # Banners, icons, OG images, favicons
│   ├── models/
│   │   └── 3dboot.glb                 # Public GLB model served to WebGL renderer
│   ├── _redirects                     # Cloudflare Pages routing & header rules
│   ├── favicon.ico
│   └── manifest.json                  # PWA Web App Manifest
├── scripts/                           # Quality assurance & verification scripts
│   ├── verify-3d-background.mjs       # Playwright script checking WebGL pixel render buffer
│   └── verify-boot-drag.mjs           # Playwright script testing 3D rotation & drag events
├── verification/                      # Visual snapshot artifacts from Playwright runs
├── eslint.config.mjs                  # ESLint configuration
├── next.config.mjs                    # Next.js static export configuration
├── package.json                       # Project scripts and dependencies
├── tsconfig.json                      # TypeScript configuration
└── README.md                          # Project documentation
```

---

## 🗺️ Route & URL Mapping

| URL Route | Page Description | Key Purpose |
|---|---|---|
| `/` | **Home Page** | Brand presentation, 3D Hero, moderator WhatsApp grid, store profile, FAQs |
| `/help` | **Help Center Index** | Central knowledge base hub |
| `/help/how-to-place-order` | **Order Placement Guide** | Walkthrough for ordering via Dadu App & WhatsApp |
| `/help/payment-methods` | **Payment Methods** | Information on bKash, Nagad, Rocket, and Cash on Delivery |
| `/help/delivery-information` | **Delivery Timelines** | Coverage across 64 districts in Bangladesh (1–3 days Rajshahi, 3–7 days nationwide) |
| `/help/return-policy` | **Return Policy** | 48-hour return and replacement guidelines |
| `/help/delete-account` | **Delete Account** | Step-by-step account deletion guide complying with Google Play policies |
| `/help/contact-support` | **Contact Support** | Official phone, email, and social support links |
| `/products/[slug]` | **Product Showcase** | Individual product pages (e.g. Adidas F50, Predator, Mercurial, Gloves) |
| `/blog/[slug]` | **SEO Buying Guides** | In-depth buying guides (Price guides, Best boots 2026, Top 10 shops BD) |
| `/[...slug]` | **Deep Link Fallback** | Intercepts `/cart`, `/message`, `/profile`, `/search`, `/earn-coins` and routes to native app |
| `/.well-known/assetlinks.json` | **Android Asset Links** | Verifies domain ownership for Android App Links without disambiguation dialog |
| `/sitemap.xml` | **XML Sitemap** | Auto-generated indexing map for search engines |
| `/robots.txt` | **Robots Directives** | Crawling permissions for Googlebot and other web crawlers |

---

## 🎨 3D Interactive Showcase

The home page features an interactive 3D WebGL background (`BootBackground.tsx`) using **Three.js** and **GLTFLoader**:

- **Model**: `public/models/3dboot.glb`
- **Lighting Setup**:
  - Key Directional Light (`0xffffff`, Intensity: 4.2)
  - Rim Light (`0x8fffd0`, Intensity: 2.4)
  - Hemisphere Ambient Fill Light (`0xbfffea` / `0x06182c`, Intensity: 2.2)
- **Controls**:
  - Pointer/Touch drag rotation along X and Y axes with boundary clamps.
  - Subtle floating and harmonic oscillation when idle.
- **Resource Optimization**:
  - **Intersection Observer**: Halts the `requestAnimationFrame` render loop when the hero is scrolled out of view.
  - **Adaptive Pixel Ratio**: Clamped to `1.5` on mobile and `1.8` on desktop to maintain high framerates and prevent GPU throttling.
  - **Full Cleanup**: Automatically disposes geometries, materials, textures, and cancels animation frames on component unmount.

---

## 📱 Android App Links & Smart Deep Linking

This project acts as the official universal linking domain (`https://dadubd.com`) for the **Dadu Android App** (`com.sayedulmarsalin.dadu`).

### 1. Digital Asset Links (`assetlinks.json`)
Located at `public/.well-known/assetlinks.json`, this configuration authorizes Android 6.0+ devices to automatically open matching URLs directly in the app without showing the browser disambiguation dialog:

```json
[
  {
    "relation": ["delegate_permission/common.handle_all_urls"],
    "target": {
      "namespace": "android_app",
      "package_name": "com.sayedulmarsalin.dadu",
      "sha256_cert_fingerprints": [
        "35:31:11:33:B5:D3:2F:BF:EA:C7:29:10:82:E6:96:6B:48:25:80:D6:98:81:7E:71:9A:D4:1D:F7:41:97:D3:FE"
      ]
    }
  }
]
```

### 2. Smart Intent Fallback (`AppRedirect.tsx`)
When a user on an Android browser visits an app-specific path (such as `/cart` or `/product`), the client executes an Android Intent URI:

```typescript
const intentUrl = `intent://${host}${path}${search}#Intent;scheme=https;package=com.sayedulmarsalin.dadu;S.browser_fallback_url=${encodeURIComponent(PLAY_STORE_URL)};end`;
```

- If the app is installed, Android immediately switches to the app.
- If the app is not installed, a fallback timer redirects the user to the **Google Play Store** after 2.5 seconds.
- If the user leaves the tab, the fallback timer is safely cancelled via `visibilitychange` and `pagehide` listeners.

---

## 🔍 SEO & Structured Data (JSON-LD)

The application embeds extensive structured data conforming to [Schema.org](https://schema.org) standards:

1. **LocalBusiness & SportsActivityLocation** (in `app/layout.tsx`):
   - Name, Bangla Name (`দাদু খেলাঘর`), Geolocation coordinates (Shaheb Bazar, Rajshahi), opening hours, price range, aggregate ratings, and social profiles.
2. **Product & Offer Schema** (in `app/products/[slug]/page.tsx`):
   - Product name, price in BDT, availability status, brand, review count, and aggregate ratings.
3. **FAQPage Schema** (in `app/page.tsx`):
   - Structured Q&A pairs for search engine direct answer rich snippets.
4. **Article & Breadcrumb Schema** (in `app/blog/[slug]/page.tsx`):
   - Author metadata, publish dates, and hierarchical breadcrumb trails.

---

## 💻 Getting Started & Local Development

### Prerequisites

- **Node.js**: `v20.x` or `v22.x` (Recommended)
- **Package Manager**: `npm` (comes with Node.js)

### 1. Clone the Repository

```bash
git clone https://github.com/sayedulmorsalin/dadu-info.git
cd dadu-info
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application with hot reloading.

### 4. Build Static Export Locally

To test the production build and static HTML/CSS/JS export:

```bash
npm run build
```

This compiles the Next.js App Router routes and generates a standalone **`out/`** directory containing pre-rendered static HTML, CSS, JavaScript chunks, images, and the 3D model asset.

---

## 🧪 Testing & Automated Verification

The repository includes custom Playwright automated verification scripts to validate WebGL rendering and 3D interactions:

```bash
# 1. Start the local server or preview build
npm run dev

# 2. Run 3D WebGL canvas pixel buffer verification (in another terminal)
node scripts/verify-3d-background.mjs

# 3. Run interactive mouse drag and rotation verification
node scripts/verify-boot-drag.mjs
```

These scripts verify:
- WebGL canvas initialization on both desktop and mobile viewports.
- Non-zero colored pixel buffers indicating that the 3D model rendered successfully.
- Touch/mouse drag rotation state changes.
- Automated screenshot generation saved to the `verification/` folder.

---

## 🚀 Cloudflare Pages Deployment

This site is optimized for zero-config static hosting on **Cloudflare Pages**.

### Step-by-Step Setup

1. Log into your [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. Navigate to **Workers & Pages** -> **Create application** -> **Pages** -> **Connect to Git**.
3. Select your GitHub repository: `sayedulmorsalin/dadu-info`.
4. Configure the build settings:

| Setting | Value |
|---|---|
| **Framework preset** | `Next.js (Static HTML Export)` |
| **Build command** | `npm run build` |
| **Build output directory** | `out` |
| **Root directory** | `/` (default) |

5. **Environment Variables** (Optional):
   - `NEXT_PUBLIC_SITE_URL` = `https://dadubd.com`

6. Click **Save and Deploy**. Cloudflare Pages will build the static site, export the `out` directory, and deploy it across its global edge network.

---

## 👨‍💻 Maintainers & Contact

- **Store**: Dadu Khelaghor (দাদু খেলাঘর)
- **Store Location**: Shaheb Bazar, Rajshahi, Bangladesh
- **Owner**: Ahsanul Haque Siam
- **Lead Developer & Maintainer**: **Md. Sayedul Marsalin**
  - 🌐 Portfolio: [sayedulmarsalin.vercel.app](https://sayedulmarsalin.vercel.app/)
  - ✉️ Email: [sayadulmorsalin123@gmail.com](mailto:sayadulmorsalin123@gmail.com)
  - 📱 App on Google Play: [Dadu App](https://play.google.com/store/apps/details?id=com.sayedulmarsalin.dadu)

---

<p align="center">
  <sub>&copy; 2026 Dadu Khelaghor. Built with ❤️ for athletes and football players across Bangladesh.</sub>
</p>
