# W.H.B. Nethara | My Professional Journey

Professional Skills (IT1215) portfolio for W.H.B. Nethara (SA25610259). A black and ivory editorial site built with React, TypeScript, Vite and Tailwind CSS.

## Run it

```bash
npm install     # first time only
npm run dev     # development server, http://localhost:5173
npm run build   # production build into dist/
npm run preview # serve the production build, http://localhost:4173
```

The built `dist/` folder is fully static and uses relative paths, so it can be opened from any static host (GitHub Pages, Netlify, a university server).

## Pages

| Route | Content |
|---|---|
| `#/` | Hero, About, My Skills, My Learning Journey (8 chapters + Week 09), Praana 2026, Gallery and Reflection previews |
| `#/chapter/01` to `#/chapter/08` | Lecture overview, key learnings, class activities, what I learned, practical application, evidence |
| `#/project` | Praana 2026: purpose, team, planning, budget, promotion, venue, event day, photos and reflection |
| `#/gallery` | Filterable gallery with lightbox |
| `#/reflection` | Final reflection |

## Edit the content

All text lives in `src/data/`. No component code needs to change.

| File | Contains |
|---|---|
| `site.ts` | Name, student ID, module, navigation |
| `chapters.ts` | The eight chapters and the Week 09 record |
| `skills.ts` | The eight skill cards |
| `praana.ts` | Praana 2026 facts, team, timeline, photos and reflection |
| `reflection.ts` | Final reflection |
| `gallery.ts` | Gallery filters (photos are collected automatically) |

To add a photo to a chapter, put it in `public/assets/nethara/` and add an `img(...)` entry to that chapter's `evidence` list. Its `tags` decide which gallery filters show it.

## Sources

- **`reference/PS.pdf`** is the primary source for all chapter content and the 17 evidence photographs in `public/assets/nethara/`. Chapter numbers follow the PDF, and Week 09 is shown as not attended.
- **Hero portrait** (`public/assets/nethara/nethara-portrait.jpg`) was supplied separately by Nethara.
- **Phone number and email** on the CV photograph (`ch04-cv-review.jpg`) are masked, because the site is public.
- **Praana 2026** photos are in `public/assets/praana-2026/web/`. The full-size originals are kept in `reference/praana-2026-originals/`, outside the build.
- The two decorative stock images on the PDF cover are not used.

`reference/` is not part of the built site.
