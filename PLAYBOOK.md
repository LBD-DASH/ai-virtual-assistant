# Playbook: adding pages

## Add one service page
1. Copy `src/content/services/research.md` to `src/content/services/<slug>.md`.
2. Fill every frontmatter field. The build fails if the schema is not met (title 20-70 chars, description 70-160, 3+ examples, 2+ youProvide, 2+ limits, 1+ faq).
3. Rules: no prices (use "Request a quote"), no stats, clients, testimonials or turnaround promises, no em dashes, no "guaranteed" or "passive income". Any factual claim needs a source link and a "last checked" date, or leave it out.
4. `npm run build`, then `grep -rl "—" dist` must print nothing.
5. Commit and push to `main`. GitHub Actions deploys. Curl the live URL for 200.
6. Add the path to `src/pages/sitemap.xml.ts` only if it is not a service (services are automatic).

## Add a standalone page
Copy `src/pages/about.astro`, edit title, description (70-160 chars) and `path`, add to the sitemap list and footer or nav.

## Partners
Only via `src/data/partners.json`. Leave `affiliateUrl` empty until a program approves. Never invent IDs.

## Priority list of next pages
1. Working contact method (needs Kevin's decision on form backend).
2. Data handling policy for client material (needs Kevin's decision).
3. "Who it is for" pages by business type (e.g. tradespeople, consultants), without invented claims.
4. Sourced guide: how to prepare a brief for a virtual assistant.
5. Sourced guide: what to check in AI-drafted work.
6. Sample, clearly labelled fictional example outputs per service.
7. Pricing page, only once Kevin approves prices.
