# A Typical Palate — atypicalpalate.com

Astro + TypeScript, static output, deployed on Vercel. Design tokens come from the
"A Typical Palate" design system (option C, dark only) and live in `src/styles/global.css`.

## Run locally

```
npm install
npm run dev      # http://localhost:4321
npm run build    # writes dist/
```

## Where things live

| Path | What |
|---|---|
| `src/pages/index.astro` | Landing page: hero, latest finds, Boston list, pillars |
| `src/components/` | Nav (sticky, opaque), Footer (socials + copyright), AwardBadge, Icon |
| `src/data/boston-awards.json` | Snapshot of Notion Places + Award History (Boston, Cambridge, Brookline). Re-export from Notion; never type awards by hand. |
| `src/data/posts.json` | Latest finds. Empty until the first posts are published. |
| `vercel.json` | Tells Vercel to build with Astro. |

## Rules

- Awards, ranks and stars come only from Notion Award History or an official source link.
- Photos: only Dru's own, or ones already in ATP Notion. No stock images.
- Never color alone: every chip and badge carries an icon and a word; links are underlined.
- Work on a `cowork/YYYY-MM-DD-slug` branch, open a PR, review the Vercel preview. Never push to `main`.
