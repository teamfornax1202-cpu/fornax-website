# My App

A modern React + TypeScript + Vite starter project.

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| [Vite](https://vitejs.dev/) | v6 | Build tool & dev server |
| [React](https://react.dev/) | v19 | UI framework |
| [TypeScript](https://www.typescriptlang.org/) | v5 | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | v4 | Utility-first styling |
| [React Router](https://reactrouter.com/) | v7 | Client-side routing |
| [ESLint](https://eslint.org/) | v9 | Linting |
| [Prettier](https://prettier.io/) | v3 | Code formatting |

## Project Structure

```
src/
├── assets/        # Static assets (images, fonts, etc.)
├── components/    # Reusable UI components
├── hooks/         # Custom React hooks
├── layouts/       # Page layout wrappers (RootLayout, etc.)
├── pages/         # Route-level page components
├── types/         # Shared TypeScript types/interfaces
├── utils/         # Helper functions
├── App.tsx        # Router setup
├── main.tsx       # Entry point
└── index.css      # Global styles (Tailwind import)
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint
npm run lint

# Fix lint errors
npm run lint:fix

# Format code
npm run format

# Check formatting
npm run format:check
```

## Adding a New Page

1. Create a file in `src/pages/MyPage.tsx`
2. Add a `<Route>` in `src/App.tsx`
3. Add a `<NavLink>` in `src/layouts/RootLayout.tsx`
