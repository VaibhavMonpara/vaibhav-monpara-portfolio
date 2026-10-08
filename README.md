# vaibhav-monpara-portfolio

Personal site of Vaibhav Monpara, full stack engineer in New York.

Built with React, TypeScript, Vite and Tailwind CSS. No backend: the contact form opens the visitor's own email app with their message filled in.

## Run locally

```sh
npm install
npm run dev        # dev server with hot reload
npm run build      # production build into dist/
npm run preview    # serve the production build
```

## Updating content

All copy lives in [`src/data/profile.ts`](src/data/profile.ts): intro, about, roles, projects, skills and education. Components render from that file, so adding a new job or project means editing data only.

- Roles use `"YYYY-MM"` dates; set `end: null` for the current role. Durations and the career timeline in the hero are computed from these dates.
- Company and school logos go in `public/logos/`.
- Projects with `featured: true` appear in the top row; the rest appear in the list below.

## Structure

```
src/
  data/profile.ts           content
  lib/dates.ts              date formatting and durations
  components/
    SiteHeader.tsx          sticky header and section links
    Hero.tsx                name, intro and links
    CareerTimeline.tsx      proportional work/study timeline
    Section.tsx             shared two-column section layout
    About, Experience, Projects, Skills, Education, Contact, Footer
```

The design uses one typeface (Schibsted Grotesk, self-hosted) and a small palette defined as CSS variables in `src/index.css`.
