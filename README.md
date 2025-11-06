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

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
# YouTube Data API v3 Key
# Get your API key from: https://console.cloud.google.com/apis/credentials
# Enable YouTube Data API v3 in your Google Cloud project
YOUTUBE_API_KEY=your_youtube_api_key_here

# Optional: Site URL for API calls (defaults to http://localhost:3000 in development)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

#### Setting Up YouTube API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **YouTube Data API v3**:
   - Navigate to "APIs & Services" > "Library"
   - Search for "YouTube Data API v3"
   - Click "Enable"
4. Create credentials:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "API Key"
   - Copy your API key
   - Add it to `.env.local` as `YOUTUBE_API_KEY`

**Note:** The API key should be kept secret and never committed to version control. The `.env.local` file is already in `.gitignore`.

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

