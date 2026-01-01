# Koohsaran HVAC - Modern Website

<div align="center">

**شرکت تهویه کوهساران**

A modern, bilingual (Farsi/English) website for Koohsaran HVAC Company built with Next.js 16, TypeScript, Tailwind CSS, and shadcn/ui.

[فارسی](http://localhost:3000/fa) | [English](http://localhost:3000/en)

</div>

## Features

- **Bilingual Support**: Full Persian (Farsi) and English language support with easy switching
- **RTL Support**: Proper right-to-left layout for Persian language with Vazirmatn font
- **Modern Design**: Clean, professional design using shadcn/ui components
- **Responsive**: Fully responsive design for all device sizes
- **Fast**: Static site generation for optimal performance
- **SEO Optimized**: Meta tags and Open Graph support for both languages
- **Accessible**: Proper ARIA labels and keyboard navigation

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

Open [http://localhost:3000](http://localhost:3000) - will redirect to [http://localhost:3000/fa](http://localhost:3000/fa) (Persian version by default)

### Build

```bash
npm run build
```

### Production

```bash
npm run start
```

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

- Persian (default): `/fa`
- English: `/en`

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
