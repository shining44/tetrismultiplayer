# Koohsaran HVAC - Modern Website

<div align="center">

**شرکت تهویه کوهساران**

A modern, bilingual (Farsi/English) website for Koohsaran HVAC Company built with Next.js 16, TypeScript, Tailwind CSS, and shadcn/ui.

[![Deploy to GitHub Pages](https://github.com/shining44/tetrismultiplayer/actions/workflows/deploy.yml/badge.svg)](https://github.com/shining44/tetrismultiplayer/actions/workflows/deploy.yml)

[فارسی](#) | [English](#)

</div>

## Features

- **Bilingual Support**: Full Persian (Farsi) and English language support with easy switching
- **RTL Support**: Proper right-to-left layout for Persian language with Vazirmatn font
- **Modern Design**: Clean, professional design using shadcn/ui components
- **Responsive**: Fully responsive design for all device sizes
- **Fast**: Static site generation for optimal performance
- **SEO Optimized**: Meta tags and Open Graph support for both languages
- **Accessible**: Proper ARIA labels and keyboard navigation
- **GitHub Pages Ready**: Automatic deployment with GitHub Actions

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Vazirmatn (Persian), System fonts (English)
- **Deployment**: GitHub Pages with GitHub Actions

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

This project is configured for automatic deployment to GitHub Pages.

### Automatic Deployment

1. Push your changes to the `main` or `master` branch
2. GitHub Actions will automatically build and deploy to GitHub Pages
3. Your site will be available at `https://<username>.github.io/<repo-name>/`

### Manual Setup

If you're setting this up for the first time:

1. Go to your repository **Settings** > **Pages**
2. Under "Build and deployment", select **GitHub Actions** as the source
3. Push to `main` or `master` branch to trigger deployment

### Using a Custom Domain

To use a custom domain (e.g., `koohsaran.com`):

1. Add a `CNAME` file to the `public/` folder with your domain:
   ```
   koohsaran.com
   ```

2. Update `next.config.ts` to remove the basePath:
   ```ts
   const nextConfig: NextConfig = {
     output: "export",
     trailingSlash: true,
     images: {
       unoptimized: true,
     },
     // Remove or comment out basePath and assetPrefix for custom domain
     // basePath: "",
     // assetPrefix: "",
   };
   ```

3. Configure your domain's DNS to point to GitHub Pages

## Project Structure

```
src/
├── app/
│   ├── [locale]/           # Locale-based routing (fa/en)
│   │   ├── layout.tsx      # Locale layout with RTL support
│   │   └── page.tsx        # Home page
│   ├── globals.css         # Global styles & CSS variables
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Root redirect to default locale
├── components/
│   ├── layout/             # Header, Footer components
│   ├── sections/           # Page sections (Hero, About, etc.)
│   └── ui/                 # shadcn/ui components
├── lib/
│   ├── data.ts             # Static data (projects, partners, etc.)
│   └── utils.ts            # Utility functions
├── locales/
│   ├── fa.ts               # Persian translations
│   ├── en.ts               # English translations
│   └── index.ts            # Locale exports
└── types/
    └── i18n.ts             # TypeScript types for i18n

.github/
└── workflows/
    └── deploy.yml          # GitHub Actions workflow for deployment
```

## Sections

1. **Hero**: Company introduction with key statistics
2. **About**: Company history, mission, vision, and values
3. **Products & Services**: HVAC equipment and services catalog
4. **Projects**: Showcase of 700+ completed projects with category filtering
5. **Certifications**: ISO, LEED certifications and international partners
6. **Contact**: Contact form and company information

## Company Information

**Koohsaran HVAC Company** (شرکت تهویه کوهساران)

- **Founded**: 1997 (1375 in Persian calendar)
- **Location**: Tehran, Iran
- **Specialization**: HVAC systems, mechanical installations
- **Projects**: 700+ completed projects
- **Capital**: 80 Billion Rials
- **Certifications**: ISO 9001, ISO 14001, LEED

### International Partners

- **Blue Star** (India) - Largest HVAC manufacturer in India
- **Thermax** (India) - Absorption chillers specialist
- **Vicot** (China) - Comprehensive HVAC solutions
- **Engie** (Germany) - Magnetic Turbocor chillers
- **K-FLEX** (Italy) - Elastomeric insulation

## URLs

- Persian (default): `/fa/`
- English: `/en/`

## Customization

### Adding New Languages

1. Create a new translation file in `src/locales/` (e.g., `ar.ts`)
2. Add the locale to the `locales` array in `src/locales/index.ts`
3. Update the types in `src/types/i18n.ts`

### Modifying Theme Colors

Edit the CSS variables in `src/app/globals.css`:

```css
:root {
  --primary: 217 91% 45%; /* Main brand color */
  /* ... other colors */
}
```

## License

All rights reserved - Koohsaran HVAC Company

---

<div align="center">

Made with ❤️ for **Koohsaran HVAC**

</div>
