lingua/
├── docs/ # Internal project documentation
│ └── architecture.md # Detailed structure, MUI, and Server/Client guidelines
│
├── src/
│ ├── app/ # Routing (Server Components by default)
│ │ ├── (dashboard)/ # Main protected section / app interface
│ │ ├── api/ # Webhooks and external endpoints (route.ts)
│ │ ├── layout.tsx # AppRouterCacheProvider and ThemeProvider setup
│ │ └── page.tsx # Home page
│ │
│ ├── theme/ # Everything related to MUI styling
│ │ ├── theme.ts # createTheme() configuration ('use client')
│ │ ├── palette.ts # Colors and dark/light theme settings
│ │ ├── typography.ts # Font configurations (next/font)
│ │ └── ThemeRegistry.tsx # Client wrapper with providers ('use client')
│ │
│ ├── shared/ # Everything with shared content
│ │ └──icons.tsx # svg icons as js object
│ │
│ ├── features/ # Business features
│ │ └── users/
│ │ ├── components/ # Feature components (TextField forms, tables)
│ │ ├── actions.ts # Server Actions ('use server')
│ │ └── queries.ts # Data fetching queries (import 'server-only')
│ │
│ ├── components/ # Reusable MUI wrappers
│ │ ├── ui/ # Custom buttons, modals, cards built on MUI
│ │ └── shared/ # Header (AppBar), Sidebar (Drawer), Footer
│ │
│ ├── server/ # Strictly server-side logic (DB, auth)
│ └── lib/ # Shared utilities and constants
│
├── README.md # Entry point: project setup and link to docs/
├── next.config.ts
└── package.json
