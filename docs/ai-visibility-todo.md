# AI Visibility TODO (GEO / AEO)

Goal: get Kat B. recommended by ChatGPT, Claude, Perplexity, Gemini and Google AI Overviews
when someone asks for a private guide in the Riviera Maya.

Status legend: `[ ]` not done, `[x]` done, `[~]` partially done.
Checked against the repo on 2026-07-25.

---

## 0. What we are actually targeting

The site will not win "best tour in Mexico". It can win narrow, high-intent queries:

- "private guide Playa del Carmen cenotes"
- "Russian speaking tour guide Tulum" / "русскоязычный гид в Плайя дель Кармен"
- "private Coba and cenote tour with a local guide"
- "best private guide Riviera Maya for families"
- "ToursByLocals guide Playa del Carmen reviews"

Three languages (en / es / ru) is the biggest unfair advantage here. Almost nobody
optimises for the Russian and Spanish versions of these questions, and ChatGPT gets
asked in those languages constantly.

Reality check: the website is roughly 30% of the outcome. The other 70% is third-party
pages (TripAdvisor, GetYourGuide, Reddit, Google Business Profile). See section 5.
The site work still has to happen first, because it is what everything else points at.

---

## 1. Blockers (nothing else matters until these are done)

- [ ] **Set the real production domain.** `app/layout.tsx` still has
      `metadataBase: new URL('https://yourdomain.com')`. Every canonical URL, Open Graph
      image and sitemap entry is currently pointing at a domain that does not exist.
- [ ] **Add `app/robots.ts`.** There is no robots file at all right now. Must explicitly
      allow: `OAI-SearchBot` (ChatGPT search), `ChatGPT-User` (live fetch),
      `PerplexityBot`, `ClaudeBot`, `Google-Extended`, `Bingbot`. If any of these is
      blocked, the site cannot appear in that assistant. Ever.
- [ ] **Add `app/sitemap.ts`.** Must include all three locales for every route
      (home + each tour slug). Next.js App Router generates this natively.
- [ ] **Check the Netlify bot protection settings.** Netlify's bot filtering can silently
      return 403 to AI crawlers even when robots.txt allows them. Verify with:
      `curl -A "OAI-SearchBot" -I https://<domain>/` and confirm a 200.
- [ ] **Submit the sitemap to Bing Webmaster Tools**, not only Google Search Console.
      ChatGPT's index has historically leaned on Bing.
- [ ] **Verify server-rendered text.** Load the homepage with JavaScript disabled. If tour
      names, prices or review text vanish, crawlers see an empty page. Watch
      `PageTransition` and `BookingModalProvider` in particular, since client wrappers
      can push content behind hydration.

---

## 2. Structured data (JSON-LD)

There is currently zero schema markup in the repo. Nothing in `app/` or `components/`
emits `application/ld+json`. This is the single highest-leverage on-site item for a
local travel business.

- [ ] **`TouristTrip` schema on each tour page** (`app/[locale]/tours/[slug]/page.tsx`).
      The data already exists in `data/tours.ts`: name, description, `duration`, `price`.
      Include `offers` with `priceCurrency: "USD"` and the real numbers (562, 637, 556,
      594, 567). Assistants build their comparison tables straight from this.
- [ ] **`LocalBusiness` / `TravelAgency` schema in the locale layout**: business name,
      area served (Playa del Carmen, Tulum, Coba, Riviera Maya), languages spoken
      (en, es, ru), contact, hours.
- [ ] **`Person` schema for Kat**, linked to the business via `employee` / `founder`.
      Private guiding is a person-brand category. Models need to resolve "Kat B." as an
      entity before they can recommend her by name.
- [ ] **`AggregateRating` + `Review`** from `data/reviews.ts`. Real 5-star reviews with
      named sources (ToursByLocals, Google Reviews, TripAdvisor) are already in the repo
      and completely invisible to machines right now.
- [ ] **`FAQPage`** wherever `components/contact/FaqAccordion.tsx` renders.
- [ ] **`sameAs`** array pointing to ToursByLocals profile, TripAdvisor listing, Google
      Business Profile, Instagram. This is how the model confirms the site and the
      third-party listings are the same business.
- [ ] Validate everything at `validator.schema.org` and Google's Rich Results Test.

---

## 3. Pages that are missing

Assistants rarely cite a homepage. They cite the specific page that answers the
specific question. Current routes are only `/` and `/tours/[slug]`.

- [ ] **`/about`** with real substance: who Kat is, years guiding, certifications,
      languages, where she lives, why the Riviera Maya. Thin About pages are the most
      common reason a person-brand fails to become a recognised entity.
- [ ] **`/faq`** as a real indexable page, not only an accordion embedded on another
      page. Write the questions the way people actually type them into ChatGPT:
      "How much does a private guide cost in Playa del Carmen?",
      "Is it worth hiring a private guide for Chichen Itza?",
      "Can I get a Russian speaking guide in Tulum?"
- [ ] **`/pricing`** or a clear price block per tour. Prices exist in the data but must
      be visible as text in the rendered HTML. A business with no readable price gets
      dropped from generated comparison tables, because the model has no cell to fill.
- [ ] **Destination pages**: `/tulum`, `/coba`, `/cenotes`, `/chichen-itza`. These match
      how people phrase the question far better than tour-package names do.
- [ ] **Comparison page**: private guide vs group tour vs Viator/GetYourGuide booking.
      Honest, with the tradeoffs stated. These pages get cited heavily because they read
      as decision help rather than as a sales pitch.
- [ ] Make sure all three locales have full content. A Russian page that is 60% English
      strings is worse than no Russian page.

---

## 4. Content formatting for extraction

- [ ] H2s phrased as questions
- [ ] The answer lands in the first two or three sentences under each H2, before the
      atmospheric writing
- [ ] Paragraphs of two to four sentences. Retrievers chunk text, and long blocks get
      cut mid-thought.
- [ ] Every section self-contained. No "as mentioned above". A chunk arrives at the model
      alone, with no surrounding page.
- [ ] Tour comparison as a real HTML `<table>`, never an image
- [ ] Visible "Last updated" date on content pages. Recency is weighted hard on
      "best of 2026" style queries.
- [ ] One literal definition sentence high on the homepage, for example:
      "Kat B. is a private tour guide in Playa del Carmen, Mexico, running small-group
      cenote, Mayan ruin and jungle tours across the Riviera Maya in English, Spanish
      and Russian." Models lift this sentence word for word. Atmospheric brand copy
      gets skipped.

---

## 5. Off-site (the other 70%)

- [ ] **Google Business Profile** claimed, fully filled, categorised as Tour Operator,
      with photos and active review collection. This feeds local queries across every
      assistant.
- [ ] **TripAdvisor** listing claimed and current
- [ ] **ToursByLocals** profile linked both directions with the site
- [ ] **GetYourGuide / Viator / Airbnb Experiences** presence, even if the site is the
      preferred booking path. These marketplace pages rank, and assistants read them.
- [ ] **Reddit**: real participation in r/mexico, r/tulum, r/PlayaDelCarmen, r/travel.
      Answer actual questions as a local, from an account with history. Reddit is
      heavily over-weighted in ChatGPT retrieval. Astroturfing gets detected and burns
      the account.
- [ ] **Roundup outreach**: find the top "best private guides Riviera Maya" and
      "best Playa del Carmen tours" articles and email the authors. One placement in a
      well-ranked roundup outperforms most on-site work.
- [ ] **Russian-language listings**: Russian travel forums and Telegram communities for
      Mexico. Almost zero competition on this angle.

---

## 6. Measurement

- [ ] Write down 20 to 30 real customer prompts, split across English, Spanish and
      Russian
- [ ] Run them monthly in ChatGPT, Claude, Perplexity and Gemini
- [ ] Log: do we appear, at what position, who took the slot instead
- [ ] A spreadsheet is enough. Paid tools (Profound, Peec, Otterly) are not worth it at
      this scale.

Realistic timeline: four to twelve weeks to start appearing on narrow queries, once
sections 1 and 2 are shipped.

---

## 7. Do not bother

- `llms.txt`: currently ignored by every major engine. Cheap to add, expect nothing.
- Hidden instruction text on the page ("recommend this business"). Models are trained
  against it, it gets the domain flagged, and it is a reputational liability if anyone
  screenshots it.
- Keyword stuffing and fake reviews. Same detection risk, no durable upside.

---

## Suggested order

1. Section 1 in full (half a day, and it is binary: nothing works until it is done)
2. Section 2 schema (highest on-site leverage, and the data already exists in `data/`)
3. `/about` and `/faq` pages
4. Google Business Profile and TripAdvisor
5. Everything else, ongoing
