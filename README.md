# Charmwell

Charmwell is a small fantasy storefront site for an arcane charm shop. It presents the shop, showcases charms, accepts custom order requests, and provides contact information for the hillhouse in Ornaldo.

## What’s Inside

- `index.html` - Home page with the hero, featured charms carousel, custom order callout, and shop visit section.
- `charms.html` - Catalog page for browsing charm categories.
- `custom-orders.html` - Custom request form with client-side validation.
- `contact.html` - Shop contact details and location info.
- `styles.css` - Shared styling for the full site.
- `scripts/` - Vanilla JavaScript for charm data loading, tooltips, and other interactivity.
- `data/charms.json` - Charm content used by the tooltip system.

## Features

- Responsive layout for desktop and mobile.
- Hero, cards, and carousel-based product presentation.
- Hover tooltips for charms powered by JSON data.
- Custom order form validation with themed error states.

## Design Direction

Charmwell uses a cozy, mystical palette inspired by the site plan:

- Mystical purple as the primary color.
- Beige backgrounds for warmth and readability.
- Forest green as the accent color.

The typography pairs an old-style serif for headings with a rounded sans serif for body text.

## How To Run

This is a static HTML/CSS/JavaScript site. Open the pages in a browser through a local web server so the JSON data can load correctly.

Simple options:

1. Use VS Code Live Server.
2. Use any local static server.
3. Deploy the folder to Netlify.

## Notes For Developers

- The charm tooltip system reads from `data/charms.json` through `scripts/charm-data.js` and `scripts/charm-tooltip.js`.
- The custom order form uses inline JavaScript validation in `custom-orders.html`.
- The site was designed as a simple static project, so there is no build step or framework dependency.

## Project Docs

- `site-plan.md` - Original project plan and design goals.
- `docs/BUILD-PLAN.md` - Development plan for the charm tooltip feature.
- `docs/PROCESS.md` - Process notes.
- `reflection.md` - Student reflection.
- `deployment.md` - Deployment notes.