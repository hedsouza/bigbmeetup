# bigbmeetup Website

A modern, single-page website for bigbmeetup - a movement that celebrates people, purpose, and positive change in Qatar.

## Project Overview

bigbmeetup is a community movement founded in April 2018 by Bosco Menezes in Qatar. The website showcases the movement's five pillars, stories of impact, partners, and provides ways for people to join the movement.

## Technology Stack

- **Framework:** Next.js 15.x (App Router)
- **Styling:** Tailwind CSS 3.4+
- **Language:** TypeScript
- **Deployment:** Vercel
- **Package Manager:** npm

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Project Structure

```
bigbmeetup/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── sections/        # Page sections
│   ├── layout/          # Layout components
│   └── shared/          # Shared components
├── lib/                  # Utilities
│   ├── utils.ts        # Utility functions
│   └── constants.ts    # Brand constants
├── types/               # TypeScript types
└── public/              # Static assets
```

## Brand Colors

The project uses a comprehensive color palette defined in `lib/constants.ts` and configured in `tailwind.config.ts`:

- **Primary Colors:** Qatar Maroon, Deep Blue, Warm Sand, Emerald Green
- **Pillar Colors:** Coral Orange, Royal Purple, Emerald Green, Deep Blue, Warm Taupe
- **Neutral Colors:** Off-white, Charcoal

## Development Status

**Iteration 0: Complete ✅**

- ✅ Next.js project initialized
- ✅ TypeScript configured
- ✅ Tailwind CSS configured with brand colors
- ✅ Font setup (Poppins, Nunito Sans, Open Sans)
- ✅ Project structure created
- ✅ Basic utilities and constants created
- ✅ Build system working

**Next Steps:** Iteration 1 - Foundation & MVP Landing Page

See `docs/DEVELOPMENT_PLAN.md` for detailed development plan.

## License

Private project - All rights reserved

