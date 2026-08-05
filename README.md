# Portfolio

A production-ready, static personal portfolio built with Next.js (App Router) + TypeScript. Apple-inspired premium visual language with subtle liquid-glass effects, three role modes (Product / Business / Development), and cinematic case study pages.

No backend. No database. No CMS. All content lives in typed data files.

---

## Getting started

```bash
yarn install
yarn dev
```

Open http://localhost:3000

### Build

```bash
yarn build
yarn start
```

### Static export (Cloudflare Pages / any static host)

Edit `next.config.js` and add:

```js
module.exports = {
  output: 'export',
  images: { unoptimized: true },
  // ...rest of config
};
```

Then:

```bash
yarn build
```

The fully static site is emitted to `./out`.

---

## Deploying

All three targets are supported out of the box:

| Host              | Build command | Output dir          | Notes                                  |
| ----------------- | ------------- | ------------------- | -------------------------------------- |
| Vercel            | `next build`  | (managed)           | Zero config; native Next.js support.   |
| Netlify           | `next build`  | (managed)           | Use the official Next.js runtime.      |
| Cloudflare Pages  | `next build`  | `out`               | Enable `output: 'export'` (see above). |

---

## Editing content

Everything editable lives under `/data`. Each file is typed against `/lib/types.ts` — your editor will guide you.

| File                    | Purpose                                                                 |
| ----------------------- | ----------------------------------------------------------------------- |
| `data/site.ts`          | Site name, domain, URL, keywords, OG image path.                        |
| `data/profile.ts`       | Personal info: name, location, email, bio, availability.                |
| `data/modes.ts`         | The three role modes and per-mode hero copy, CTAs and résumé links.     |
| `data/projects.ts`      | Projects (id, slug, title, images, tech, results, role-specific copy).  |
| `data/case-studies.ts`  | Long-form case studies keyed by `projectId`.                            |
| `data/experience.ts`    | Work history.                                                           |
| `data/skills.ts`        | Grouped skill categories (modes reference them by category id).         |
| `data/education.ts`     | Education entries.                                                      |
| `data/navigation.ts`    | Primary nav items.                                                      |
| `data/social.ts`        | Social links (icons: github, linkedin, twitter, mail, website).         |

All placeholder copy is clearly marked with `PLACEHOLDER` comments.

### Adding a new project

1. Append an entry to `data/projects.ts` with a unique `id` and `slug`.
2. Provide `roleSummaries` for **all three modes** (`product`, `business`, `development`).
3. Add a matching `CaseStudy` in `data/case-studies.ts` (optional, but recommended for featured work).
4. Reference the project `id` inside each role mode’s `featuredProjectIds` (in `data/modes.ts`) to control ordering per lens.
5. Drop images at `public/projects/<slug>/cover.svg` (or `.png` / `.jpg`).

### Replacing images

Project images live under `public/projects/<slug>/`. Recommended dimensions:

| Purpose        | Ratio  | Size (min)     | Format                |
| -------------- | ------ | -------------- | --------------------- |
| Project cover  | 16:10  | 1600 × 1000    | `.jpg` / `.webp` / `.svg` |
| Case-study hero| 16:9   | 1920 × 1080    | `.jpg` / `.webp`      |
| OG image       | 1.91:1 | 1200 × 630     | `.png` / `.jpg`       |

Placeholder SVGs are shipped so the site renders without any binary assets. Delete or overwrite them to add your own.

### Résumé

Place PDFs at:

- `public/resume/your-name-product.pdf`
- `public/resume/your-name-consulting.pdf`
- `public/resume/your-name-engineering.pdf`

Then update `resumeUrl` on each mode in `data/modes.ts`.

---

## Role modes

Three modes share the same projects but change hero copy, featured ordering, highlighted skills, résumé link and CTAs. Deep links:

- `/?mode=product`
- `/?mode=business`
- `/?mode=development`

Each mode is defined in `data/modes.ts`. The mode selector updates the query string without reloading.

---

## Design system

- Typography: Inter (UI) + Instrument Serif (display), loaded via `next/font/google`.
- Colors: HSL tokens driven by CSS variables in `app/globals.css`. Dark mode is the default.
- Motion: CSS transitions only. Respects `prefers-reduced-motion`.
- Glass: `.glass` / `.glass-thin` utility classes using `backdrop-filter`.

No large animation libraries are pulled in for the presentation layer.

---

## SEO

- `app/layout.tsx` sets Open Graph + Twitter Card metadata.
- `app/sitemap.ts` auto-generates the sitemap from `data/projects.ts`.
- `app/robots.ts` allows all crawlers.
- Structured data (`Person` + per-project `Article`) is injected via `<script type="application/ld+json">`.

---

## Accessibility

- Semantic HTML throughout.
- Skip-to-content link.
- Keyboard-visible focus rings on every interactive element (`.focus-ring`).
- Contrast targeted for WCAG AA in both themes.
- Reduced-motion honoured globally.

---

## Ownership & portability

- No proprietary hosting SDKs.
- Secrets are never used on the client.
- Push to any GitHub repository and deploy to the host of your choice.
