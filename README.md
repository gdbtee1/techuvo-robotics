# Techuvo Robotics

Production-style React/Vite frontend for Techuvo Robotics.

## Stack

- React + Vite
- Tailwind CSS (Vite plugin) plus project-specific CSS tokens/components
- Framer Motion
- React Router
- Lucide React
- Recharts

## Run locally

```bash
npm install
npm run dev
```

## Hero video

Drop the supplied footage into `public/` as:

- `techuvo-robots.mp4`
- optionally `techuvo-robots.webm`

The hero already includes a bright fallback/poster and automatically omits motion video for visitors who prefer reduced motion.

## Production build

```bash
npm run build
npm run preview
```

## Notes

- The Live Demo is a client-side simulation and is explicitly labeled as simulation/demo data.
- The partnership form currently confirms submission client-side. Connect the submit handler to your preferred email/API endpoint when ready.
- Replace the founder placeholder with professional photography when available.
- Add your professional email/social URLs in the Company page when ready.
