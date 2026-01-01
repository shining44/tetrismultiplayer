# Koohsaran HVAC Website

This is a bilingual (Farsi/English) website for Koohsaran HVAC Company, built with Next.js 16, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4, shadcn/ui components
- **Fonts**: Vazirmatn (Google Fonts) for Farsi, system fonts for English
- **Deployment**: Static export to GitHub Pages (`/docs` folder)

## Project Structure

```
src/
├── app/
│   ├── [locale]/           # Dynamic locale routing (fa/en)
│   │   ├── layout.tsx      # RTL/LTR setup, metadata
│   │   └── page.tsx        # Main page rendering all sections
│   ├── globals.css         # Global styles, fonts, theme
│   └── layout.tsx          # Root layout
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Navigation with language switch
│   │   └── Footer.tsx      # Footer with contact info
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ProductsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── CertificationsSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/                 # shadcn/ui components
├── locales/
│   ├── fa.ts               # Farsi translations
│   ├── en.ts               # English translations
│   └── index.ts            # Translation utilities
├── lib/
│   ├── utils.ts            # Utility functions (cn helper)
│   └── data.ts             # Static data (projects, services, etc.)
└── types/
    └── i18n.ts             # Translation type definitions
```

## Key Patterns

### RTL Support
- HTML `dir` attribute set based on locale in `[locale]/layout.tsx`
- Use `isRTL = locale === "fa"` pattern in components
- Apply `flex-row-reverse` for RTL flex containers
- Use `lg:order-*` for grid reordering in RTL
- Position-specific classes: `isRTL ? "right-0" : "left-0"`

### Localization
- URL-based routing: `/fa/` and `/en/`
- Translation files in `/src/locales/`
- `getTranslation(locale)` function returns typed translations

### Design System
- Primary color: Blue (HSL 220 85% 50%)
- White base with subtle slate accents
- Cards with light borders and subtle shadows
- Modern rounded corners (0.625rem base)

## Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production (outputs to /docs)
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Build Configuration

The site exports as static HTML to `/docs` for GitHub Pages:

```typescript
// next.config.ts
{
  output: "export",
  distDir: "docs",
  trailingSlash: true,
  basePath: "/tetrismultiplayer",
  assetPrefix: "/tetrismultiplayer/"
}
```

## Font Configuration

Vazirmatn is loaded from Google Fonts via CSS import in `globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800&display=swap');

[dir="rtl"] {
  font-family: 'Vazirmatn', var(--font-sans), system-ui, sans-serif;
}
```

## GitHub Pages Deployment

**IMPORTANT**: The `/docs` folder contains the static export and must be rebuilt after any source code changes (CSS, components, translations, etc.).

### Deployment Workflow
1. Make source code changes (in `/src`)
2. Run `npm run deploy` to rebuild the static export
3. Commit both source changes AND the updated `/docs` folder
4. Push to GitHub - changes will appear on GitHub Pages

### Common Issue
If styles, fonts, or content changes don't appear on the live site, it's likely because the `/docs` folder wasn't rebuilt. Always run `npm run deploy` after making changes.

### Deployment Script
```bash
npm run deploy    # Runs: npm run build && touch docs/.nojekyll
```

The `.nojekyll` file is required to prevent GitHub Pages from processing the site with Jekyll.

## Adding New Sections

1. Create component in `/src/components/sections/`
2. Add translations to both `/src/locales/fa.ts` and `/src/locales/en.ts`
3. Update translation types in `/src/types/i18n.ts`
4. Import and render in `/src/app/[locale]/page.tsx`
5. Apply RTL patterns using `isRTL` checks
