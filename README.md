# Assignment Solution

Premium academic writing platform frontend — a **unique branded rebuild** inspired by common assignment-help UX patterns (routes, calculator, order form, services), not a visual clone of any existing site.

**Brand:** Assignment Solution · *Clear writing. Confident grades.*

## Stack

- React 19
- Vite
- React Router
- Tailwind CSS v4
- Axios (mock API layer)
- Framer Motion
- Swiper
- React Hook Form
- Lucide React

## Folder structure

```text
src/
  assets/
  components/       # layout, home sections, UI, Seo, Logo
  context/          # Auth, Toast
  data/             # brand, home, services, blogs
  hooks/
  layouts/
  pages/            # all routes including policies/
  routes/
  services/         # axios + mockHandlers
  styles/
  utils/
```

## Setup

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal (typically `http://localhost:5173`).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite development server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build |

## Mock APIs

All backend calls are mocked in [`src/services/mockHandlers.js`](src/services/mockHandlers.js). Marked with `// MOCK — replace with real backend`.

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/get-fare` | POST | Price per page from academic level + deadline |
| `/api/contact-us` | POST | Contact form |
| `/api/order-now` | POST | Order form |
| `/api/login` | POST | Demo login (any email/password) |

Point `axios` `baseURL` at a real API and remove the mock interceptor in [`src/services/api.js`](src/services/api.js) when a backend is ready.

## Deployment

1. `npm run build`
2. Deploy the `dist/` folder to Netlify, Vercel, Cloudflare Pages, or any static host.
3. Configure SPA fallback so all routes serve `index.html`.

### Vercel

```bash
npm i -g vercel
vercel
```

### Netlify

Set build command `npm run build` and publish directory `dist`. Add a `_redirects` file with `/* /index.html 200` if needed.

## License

Demo project for educational / portfolio use. Replace contact numbers and policies before production.
