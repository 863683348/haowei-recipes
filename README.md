# HǎoWèi 好味 · haoweirecipes.com

**AI-assisted Chinese home cooking for the global kitchen.**

HǎoWèi (好味, "good taste") is a content-first recipe website that helps home cooks outside China cook authentic Chinese family dishes — with bilingual ingredient terms, real substitutions for hard-to-find ingredients, visual doneness cues, and a rule-based AI assistant. No American-Chinese takeout, no generic recipe generation, just real home cooking made accessible.

> This is a **fully static, rule-based** site. No LLM API, no accounts, no payments, no user-generated content — fast, cheap, and SEO-friendly by design.

## Features (MVP)

| # | Feature | How it works |
|---|---|---|
| R-01 | **Bilingual term lookup** | Hover any Chinese ingredient (生抽, 料酒…) → English name + equivalent measure (1 tbsp ≈ 15 ml) + substitution hint |
| R-02 | **Ingredient substitution engine** | Bidirectional rules: Asian-market → local, and local → which dishes you can cook. Each match has a 1–5★ fidelity score |
| R-03 | **Doneness state visuals** | Every state-dependent step (small bubbles, golden brown…) shows a visual cue + time reference |
| R-04 | **One-click shopping list** | Per-recipe, bilingual, split into *local supermarket* vs *Asian grocery*, serving-size scaling, copy-to-clipboard |
| R-05 | **Rule-based AI assistant** | FAQ knowledge base + keyword matching with recipe context; honestly says "I'm not sure" when out of scope |
| R-06 | **Flavor adjuster** | Less salty / less oily / more spicy / vegetarian → quantified recipe changes, synced into the shopping list |

Every recipe ships in two versions: **family quick version** and **restaurant-authentic version**.

## Tech Stack

- **Next.js 15** (App Router) + **TypeScript**
- **React 19**, **Tailwind CSS 3**
- **sharp** for image optimization
- Deployed on **Vercel**

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
# → http://localhost:3000

# 3. Production build & start
npm run build
npm run start
```

Other scripts: `npm run typecheck` (tsc --noEmit), `npm run lint`.

## Project Structure

```
src/
├── app/                  # App Router pages
│   ├── page.tsx          # Home: scenario entrances + featured recipes
│   ├── recipes/          # Recipe listing + [slug] detail
│   ├── ai-assistant/     # Rule-based FAQ assistant
│   ├── shopping-list/    # Session-based shopping list (localStorage)
│   ├── terms/            # Ingredient glossary (SEO long-tail)
│   ├── substitutions/    # Substitution lookup tables (SEO long-tail)
│   └── about, faq, privacy, terms, contact, robots, sitemap
├── components/           # term popover, substitution panel, recipe card…
├── data/                 # Static content — the "knowledge base"
│   ├── recipes/          # Recipe data (bilingual, dual version)
│   ├── terms.ts          # ≥30 ingredient terms with equivalents
│   ├── substitutions.ts  # Top-20 substitutions with fidelity scores
│   ├── faqs.ts           # Rule-based FAQ knowledge base
│   ├── flavor-adjust.ts  # Flavor adjustment rules
│   └── ingredient-catalog.ts
├── hooks/                # use-shopping-list, use-theme, use-unit-preference
└── lib/types.ts          # Shared type definitions
docs/spec.md              # Locked product/tech contract (v1.0)
```

## Environment Variables

**None required.** The current codebase uses zero environment variables — everything is static content and client-side rules. See [.env.example](.env.example) for reserved, optional variables (site URL, future LLM key, affiliate IDs).

## Deployment

Deploy on Vercel (recommended):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/863683348/haowei-recipes)

The project is a standard Next.js app — no special config needed. Response headers (CSP, HSTS, etc.) are handled in `next.config.ts`.

## Constraints (locked in spec)

- ❌ No LLM API — AI assistant is rule/static based (until explicitly revisited)
- ❌ No user accounts · payments · UGC
- ❌ No American-Chinese (美式中餐) content — real family recipes only
- ✅ SEO: semantic HTML + Recipe JSON-LD + sitemap + robots + metadata templates
- ✅ English-first content, Chinese (pinyin + characters) as assistive annotation

## License

All rights reserved. Content and code are not licensed for reuse without permission.
