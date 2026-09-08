# RecipeHub 

RecipeHub is a recipe sharing platform where home cooks can publish, browse,
save, and buy recipes from the community. This is the Next.js frontend.

**Live site:** https://recipehub-iota.vercel.app

## Tech stack

- Next.js (App Router), React
- Tailwind CSS v4
- Framer Motion (animations)
- Axios (API calls)
- Google Identity Services (`@react-oauth/google`) for Google login
- react-hot-toast for notifications
- imgbb for recipe image hosting

## Features

- Public browsing with server-side pagination, category filter, and search
- Credential and Google authentication (JWT stored in an httpOnly cookie)
- Recipe CRUD with an image upload flow and a per-recipe purchase price
- Likes, favorites, and recipe reporting
- Stripe Checkout for buying a single recipe or a premium membership
- User dashboard: overview stats, my recipes, add/edit recipe, favorites,
  purchased recipes, profile
- Admin dashboard: manage users (block/unblock), manage recipes
  (edit/feature/delete), moderate reports, view transactions
- Dark/light theme toggle
- Custom 404 page

## Getting started

```bash
npm install
cp .env.local.example .env.local   # then fill in your real values
npm run dev
```

The app runs on [http://localhost:3000](http://localhost:3000). The backend
(`recipehub-server`) must be running separately for data to load — see that
repo's README.

### Environment variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_API_URL` | Base URL of the backend API, e.g. `http://localhost:5000/api` |
| `NEXT_PUBLIC_GOOGLE_CLIENT_ID` | OAuth client ID from Google Cloud Console |
| `NEXT_PUBLIC_IMGBB_API_KEY` | API key from [api.imgbb.com](https://api.imgbb.com/) for recipe image uploads |

## Project structure
src/
app/ Routes (App Router) — home, browse, recipe details,
login, register, about, payment-success,
dashboard/, admin/
components/ Shared UI (Navbar, Footer, RecipeCard, RecipeForm,
ReportModal, ProtectedRoute, AdminRoute,
DashboardSidebar, AdminSidebar, etc.)
components/home/ Home page sections (Featured, Popular, How It Works,
Categories)
context/ AuthContext, ThemeContext
lib/ Axios instance

## Deployment

Deployed on Vercel: https://recipehub-iota.vercel.app

Environment variables set in the Vercel dashboard:
- `NEXT_PUBLIC_API_URL` → https://recipehub-server-a8ff.onrender.com/api
- `NEXT_PUBLIC_GOOGLE_CLIENT_ID`
- `NEXT_PUBLIC_IMGBB_API_KEY`

Google Cloud Console's Authorized JavaScript origins includes this deployed
URL alongside `http://localhost:3000` for local development.
