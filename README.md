# Koohsaran HVAC - Modern Website

<div align="center">

**شرکت تهویه کوهساران**

A modern, bilingual (Farsi/English) website for Koohsaran HVAC Company built with Next.js 16, TypeScript, Tailwind CSS, and shadcn/ui.

[فارسی](#) | [English](#)

</div>

## Features

- **Bilingual Support**: Full Persian (Farsi) and English language support with easy switching
- **RTL Support**: Proper right-to-left layout for Persian language with Vazirmatn font
- **Modern Design**: Clean, professional design using shadcn/ui components
- **Responsive**: Fully responsive design for all device sizes
- **Fast**: Static site generation for optimal performance
- **SEO Optimized**: Meta tags and Open Graph support for both languages

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Vazirmatn (Persian), System fonts (English)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) - will redirect to `/fa` (Persian version by default)

### Build

```bash
npm run build
```

Static files will be generated in the `out/` directory.

## GitHub Pages Deployment

### Deploy to GitHub Pages

```bash
npm run deploy
```

This will:
1. Build the static site
2. Push to the `gh-pages` branch
3. Your site will be live at `https://<username>.github.io/<repo-name>/`

### First-time Setup

1. Run `npm run deploy`
2. Go to your repo **Settings** > **Pages**
3. Set source to **Deploy from a branch**
4. Select `gh-pages` branch, `/ (root)` folder
5. Save

### Custom Domain

To use a custom domain (e.g., `koohsaran.com`):

1. Add a `CNAME` file to `public/` with your domain:
   ```
   koohsaran.com
   ```

2. Update `next.config.ts` - remove basePath:
   ```ts
   const nextConfig: NextConfig = {
     output: "export",
     trailingSlash: true,
     images: { unoptimized: true },
   };
   ```

3. Configure your domain's DNS to point to GitHub Pages

## Project Structure

```
src/
├── app/
│   ├── [locale]/           # Locale-based routing (fa/en)
│   ├── globals.css         # Global styles
│   └── page.tsx            # Root redirect
├── components/
│   ├── layout/             # Header, Footer
│   ├── sections/           # Page sections
│   └── ui/                 # shadcn/ui components
├── lib/                    # Utilities and data
├── locales/                # Translations (fa, en)
└── types/                  # TypeScript types
```

## URLs

- Persian (default): `/fa/`
- English: `/en/`

## Company Information

**Koohsaran HVAC Company** (شرکت تهویه کوهساران)

- Founded: 1997 | Location: Tehran, Iran
- 700+ completed projects
- Partners: Blue Star, Thermax, Vicot, Engie, K-FLEX
- Certifications: ISO 9001, ISO 14001, LEED

## License

All rights reserved - Koohsaran HVAC Company
