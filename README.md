# Cakes by Lana — Website

A Next.js 14 (App Router) + Tailwind CSS + Framer Motion build of the Cakes by Lana proposal, with a premium, animated hero.

## Run it

```
npm install
npm run dev
```

Then open http://localhost:3000

## What's here

- `app/page.tsx` — home page (Hero, Collection, Quote, Quote request, About teaser)
- `app/gallery`, `app/about`, `app/blog` — the remaining site pages, styled consistently with home
- `components/` — Hero, ParticleField (the floating gold light points), Nav, Footer, Collection, Quote, QuoteRequest, AboutTeaser
- `lib/icons.tsx` — the line-art spot illustrations (cake, sprig, macaron) used as photography placeholders throughout, plus the larger hero cake illustration

## Notes

- All "photography placeholder" blocks are where Lana's real product photos will go — swapping them in is just replacing the placeholder `div` with a Next.js `<Image>`.
- The quote request form on the home page is visual only — no backend is wired up yet.
- Palette and type tokens live in `tailwind.config.ts` (colors: ivory, blush, rose, plum, plum-dark, sage, gold) so the whole site's look can be adjusted from one place.
# cakesbylana-proposal
# cakesbylana-proposal
