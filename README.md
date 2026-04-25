# Accredian-Enterprise

# Accredian Enterprise Landing Page

A responsive Next.js App Router landing page inspired by the Accredian Enterprise experience, rebuilt with reusable sections, online imagery, smooth anchor navigation, and a working lead capture form backed by local API routes.

## What is included

1. Landing page sections for `Home`, `Stats`, `Clients`, `Accredian Edge`, `CAT`, `How It Works`, `FAQs`, `Testimonials`, and a lead capture CTA.
2. Sticky navigation and footer with section-based scrolling.
3. Reusable section, card, button, reveal, and API helper components.
4. Lead capture form with validation and `POST /api/inquiries`.
5. Testimonial data loaded from `GET /api/testimonials`.

## Tech choices

1. Next.js App Router with functional React components and hooks.
2. Clean CSS in [app/globals.css](/g:/Next-js-project/app/globals.css).
3. Content-driven rendering from [data/landingPage.js](/g:/Next-js-project/data/landingPage.js).
4. Mock API integration through [app/api/inquiries/route.js](/g:/Next-js-project/app/api/inquiries/route.js) and [app/api/testimonials/route.js](/g:/Next-js-project/app/api/testimonials/route.js).

## Structure

1. `app/`
   Layout, page entry, global styles, and API routes.
2. `components/layout/`
   Navbar and footer shell.
3. `components/sections/`
   Landing page section modules.
4. `components/ui/`
   Shared primitives and wrappers.
5. `data/landingPage.js`
   Centralized section content, image URLs, and navigation metadata.
6. `lib/`
   Shared helpers for API calls, validation, and utility functions.

## AI usage

AI tools were used during development for:

1. Breaking the landing page into reusable sections and components.
2. Refining content structure and section hierarchy.
3. Exploring layout directions based on the reference site and screenshots.
4. Identifying suitable online image sources and improving the overall submission structure.

Manual improvements made after AI assistance:

1. Refactored repeated logic into shared utilities and inquiry validation helpers.
2. Reworked the page flow to better match the requested evaluation criteria.
3. Added stronger section variety instead of repeating the same card pattern everywhere.
4. Tuned the navbar, hero, stats, process, testimonials, and lead form layouts for clearer hierarchy and responsiveness.

## Notes for evaluation

1. Focus was placed on readability, section structure, reusability, and execution quality rather than copying a template directly.
2. The CTA section already serves as the optional lead capture form bonus.
3. Inquiry submissions are stored through the local Next.js API route for the current runtime session.
4. The project is ready to deploy on Vercel after installing dependencies.

## Run locally

```bash
npm install
npm run dev
```

## Suggested deploy

```bash
vercel
```
