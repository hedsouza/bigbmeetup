# bigbmeetup Website Development Plan

## Overview

This document outlines the complete development plan for the bigbmeetup website based on the branding strategy. The site will be a modern, single-page application with supporting dynamic pages, built with Next.js 15, Tailwind CSS, and deployed on Vercel.

---

## Technology Stack

### Core Technologies
- **Framework:** Next.js 15.x (App Router) - Latest stable version
- **Styling:** Tailwind CSS 3.4+ - Latest stable version
- **Language:** TypeScript (recommended) or JavaScript
- **Deployment:** Vercel
- **Package Manager:** npm or pnpm

### Component Library
**Recommended: shadcn/ui**
- Copy-paste components built on Radix UI + Tailwind CSS
- Fully customizable and accessible
- Perfect for Next.js projects
- No lock-in, you own the code
- Modern design system

**Alternative Options:**
- **DaisyUI** - Additional utility classes for Tailwind
- **Headless UI** - Unstyled, accessible components
- **Tailwind UI** - Premium components by Tailwind team

### Additional Libraries
- **Framer Motion** - For smooth animations and transitions
- **React Hook Form** - Form handling and validation
- **Zod** - Schema validation
- **lucide-react** - Icon library (works great with shadcn/ui)
- **next-themes** - Dark mode support (optional)

### CMS & Content Management
- **Sanity** (recommended) or **Contentful**
  - For managing stories, videos, press releases, partner information
  - Image optimization and asset management
  - Content preview capabilities

### Form Handling
- **Resend** (recommended) or **Formspree**
  - Email handling for contact forms
  - Newsletter subscriptions
  - Sponsor inquiry forms

### Video Integration
- **YouTube API** - For embedding videos and playlists
- **react-player** - React component for video playback

---

## Project Structure

```
bigbmeetup/
├── .cursorrules              # Development best practices
├── .env.local               # Environment variables
├── .gitignore
├── next.config.js
├── package.json
├── tailwind.config.js
├── tsconfig.json            # If using TypeScript
├── postcss.config.js
├── vercel.json              # Vercel configuration
│
├── app/                     # Next.js App Router
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page (single-page)
│   ├── globals.css         # Global styles + Tailwind
│   ├── favicon.ico
│   │
│   ├── story/              # Dynamic story pages
│   │   └── [slug]/
│   │       └── page.tsx
│   │
│   ├── video/              # Dynamic video pages
│   │   └── [slug]/
│   │       └── page.tsx
│   │
│   └── press/              # Press/media coverage
│       └── page.tsx
│
├── components/             # React components
│   ├── ui/                 # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── form.tsx
│   │   └── ...
│   │
│   ├── sections/          # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── FivePillars.tsx
│   │   ├── StoriesOfImpact.tsx
│   │   ├── Partners.tsx
│   │   ├── JoinMovement.tsx
│   │   └── Footer.tsx
│   │
│   ├── layout/            # Layout components
│   │   ├── Header.tsx
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   │
│   └── shared/            # Shared components
│       ├── Logo.tsx
│       ├── SponsorCard.tsx
│       ├── VideoEmbed.tsx
│       └── PillarCard.tsx
│
├── lib/                    # Utility functions
│   ├── utils.ts           # General utilities
│   ├── sanity.ts          # Sanity client (if using)
│   ├── resend.ts          # Resend client (if using)
│   └── constants.ts       # Brand colors, constants
│
├── types/                  # TypeScript types (if using TS)
│   ├── content.ts
│   ├── sponsor.ts
│   └── ...
│
├── public/                 # Static assets
│   ├── images/
│   ├── videos/
│   └── logo.svg
│
└── styles/                 # Additional styles (if needed)
    └── custom.css
```

---

## Iterative Development Approach

This plan is organized into **6 deployable iterations**. Each iteration produces a fully functional, deployable version of the website that can be tested and shown to stakeholders. After each iteration, deploy to Vercel for testing and feedback.

### Iteration Overview

| Iteration | Focus | Timeline | Key Deliverables | Status |
|-----------|-------|----------|-----------------|------------|
| **Iteration 1** | Foundation & MVP Landing Page | Week 1-2 | Setup, Header/Footer, Hero, About | ✅ **COMPLETE** |
| **Iteration 2** | Five Pillars Section | Week 3 | Interactive Five Pillars with CMS-ready structure | ✅ **COMPLETE** |
| **Iteration 3** | Stories & Partners Sections | Week 4 | Stories of Impact, Partners & Collaborators | ✅ **COMPLETE** |
| **Iteration 4** | Dynamic Social Media Content | Week 5-6 | YouTube & Instagram API integration, dynamic video/story pages | ✅ **COMPLETE** |
| **Iteration 5** | Forms & Interactive Features | Week 7 | Contact Forms, Join Movement section, Email Integration | ⏳ **NOT STARTED** |
| **Iteration 6** | CMS Integration | Week 8-9 | Sanity CMS setup, content management for stories/partners | ⏳ **NOT STARTED** |
| **Iteration 7** | Polish & Optimization | Week 10 | SEO, Accessibility, Performance | ⏳ **NOT STARTED** |

### Deployment Strategy

Each iteration follows this workflow:
1. **Development** - Complete all tasks in the iteration
2. **Local Testing** - Test all features locally
3. **Deployment Checklist** - Complete all checklist items
4. **Deploy to Vercel** - Push to git and deploy
5. **Stakeholder Review** - Share deployed URL for feedback
6. **Iteration Complete** - Move to next iteration

### Benefits of Iterative Approach

- ✅ **Early Feedback** - Stakeholders can see progress after each iteration
- ✅ **Risk Mitigation** - Issues are caught early before they compound
- ✅ **Continuous Deployment** - Working site available at all times
- ✅ **Flexible Timeline** - Can adjust scope based on feedback
- ✅ **Progressive Enhancement** - Each iteration builds on solid foundation

---

## Iteration 1: Foundation & MVP Landing Page
**Goal:** Deploy a basic but complete landing page with core branding and structure  
**Timeline:** Week 1-2  
**Status:** ✅ **COMPLETE** | Deployed to Vercel

### Setup & Configuration
#### 1.1 Initialize Next.js Project
```bash
npx create-next-app@latest bigbmeetup --typescript --tailwind --app --no-src-dir
cd bigbmeetup
```

#### 1.2 Install Core Dependencies
```bash
# Component library
npx shadcn-ui@latest init

# Icons
npm install lucide-react

# Basic utilities
npm install clsx tailwind-merge
```

#### 1.3 Configure Tailwind CSS
- Update `tailwind.config.js` with brand colors (see Brand Colors section)
- Set up custom fonts (Poppins, Nunito Sans, Open Sans) using `next/font`
- Configure custom spacing and breakpoints

#### 1.4 Set Up Brand Colors & Theme
Create `lib/constants.ts` with:
- Color palette (Qatar Maroon, pillar colors, neutrals)
- Font families
- Typography scale
- Spacing tokens

#### 1.5 Initialize Git & Vercel
- Initialize git repository
- Create `.gitignore`
- Set up Vercel project (connect repository)
- Configure basic environment variables

### Core Components
#### 1.6 Install Essential shadcn/ui Components
```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add separator
```

#### 1.7 Build Layout Components
- **Header/Navigation**
  - Sticky navigation bar
  - Logo placeholder
  - Basic navigation links (smooth scroll anchors)
  - Mobile menu toggle (basic)
  
- **Footer**
  - Contact information placeholder
  - Social media links (Instagram, YouTube, etc.)
  - Hashtags display (#BigBMovement #BringingCommunitiesTogether)
  - Copyright notice

#### 1.8 Create Shared Components
- Logo component (placeholder)
- Button variants (primary, secondary)
- Section container wrapper
- Utility: `cn()` function for className merging

### Home Page Sections
#### 1.9 Hero Section
- Tagline: "To Inspire, To Educate, To Inform & Bring Communities Together"
- Subtext: "A movement that celebrates people, purpose, and positive change in Qatar."
- Static background image or gradient (video added in later iteration)
- Two CTAs: "Join the Movement" and "Watch Our Story" (scroll to sections)
- Full-viewport height section
- Responsive design

#### 1.10 About the Movement Section
- Narrative of bigbmeetup's journey (static content)
- Stats display: "7+ Years | 13 Editions | 50+ Partners | 25,000+ Participants"
- Simple grid layout
- Responsive design

### Deployment Checklist
- [x] All code committed to git
- [x] Vercel project connected
- [x] Build passes successfully
- [x] Basic SEO metadata added
- [x] Site is accessible and responsive
- [x] No console errors
- [x] Deployed to Vercel (automatic deployments on push to main)

**Status:** ✅ **ITERATION 1 COMPLETE** - App is live on Vercel. See `docs/ITERATION_1_STATUS.md` for detailed completion report.

---

## Iteration 2: Five Pillars Section
**Goal:** Create a comprehensive, interactive Five Pillars section with rich content and CMS-ready structure  
**Timeline:** Week 3  
**Status:** ✅ **COMPLETE** | Deployed to Vercel  
**Builds on:** Iteration 1 ✅

### Additional Components
#### 2.1 Install Additional shadcn/ui Components
```bash
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add tabs
npx shadcn-ui@latest add accordion
npx shadcn-ui@latest add card
```

#### 2.2 Animation Setup
```bash
npm install framer-motion
```

### Five Pillars Section Development
#### 2.3 Design & Structure
- Create dedicated component: `components/sections/FivePillars.tsx`
- Plan interactive layout with multiple views:
  - Overview grid view
  - Individual pillar detail view
  - Cross-pillar connections

#### 2.4 Pillar Data Structure
- Create `lib/data/pillars.ts` with comprehensive pillar data:
  - **Sports & Wellness**
    - Full description
    - Key initiatives
    - Related events/editions
    - Featured stories/testimonials
    - Call-to-action links
  - **Celebrating Art & Culture**
    - Full description
    - Key initiatives
    - Related events/editions
    - Featured artists/works
    - Call-to-action links
  - **Estedama (Sustainability)**
    - Full description
    - Key initiatives
    - Related events/editions
    - Impact metrics
    - Call-to-action links
  - **This Ability**
    - Full description
    - Key initiatives
    - Related events/editions
    - Featured champions/advocates
    - Call-to-action links
  - **Animal Welfare**
    - Full description
    - Key initiatives
    - Related events/editions
    - Featured partners/organizations
    - Call-to-action links
- Keep data normalized to match future Sanity schemas; export types/interfaces shared with CMS definitions

#### 2.5 Interactive Components
- **Pillar Cards**
  - Color-coded by pillar (use brand colors)
  - Icon/visual representation
  - Pillar name and tagline
  - Brief description
  - Hover effects (expand/card lift/shadow)
  - Click to open detailed view

- **Pillar Detail Modal/Dialog**
  - Full pillar description
  - Key initiatives list
  - Related bigbmeetup editions
  - Featured content (images, videos)
  - Links to related stories/videos
  - Call-to-action buttons

- **Pillar Navigation**
  - Tab navigation between pillars
  - Smooth transitions
  - Visual indicators

#### 2.6 Visual Design
- Responsive grid layout:
  - Mobile: 1 column (stacked)
  - Tablet: 2 columns
  - Desktop: 5 columns (all visible) or 3 columns with navigation
- Pillar-specific color schemes:
  - Sports & Wellness: Coral Orange (#FF6F3C)
  - Art & Culture: Royal Purple (#7B4BA0)
  - Estedama: Emerald Green (#008060)
  - This Ability: Deep Blue (#005C99)
  - Animal Welfare: Warm Taupe (#BFA48E)
- Smooth animations and transitions
- Accessibility considerations (keyboard navigation, ARIA labels)

#### 2.7 CMS-Ready Structure
- Design data structure compatible with Sanity CMS
- Create TypeScript interfaces for pillar content
- Plan for future CMS fields:
  - Rich text content
  - Image galleries
  - Video embeds
  - Related content references
  - Metadata (tags, categories)

#### 2.8 Content Integration
- Link to related bigbmeetup editions from history
- Connect to Stories of Impact section (when available)
- Prepare for dynamic content linking

### Enhancement
#### 2.9 Enhanced Navigation
- Smooth scroll to Five Pillars section
- Active pillar highlighting
- Mobile menu updates

### Testing & Polish
#### 2.10 Interaction Testing
- Test all hover states
- Test modal/dialog functionality
- Test responsive breakpoints
- Test keyboard navigation
- Test accessibility features

### Deployment Checklist
- [x] Five Pillars section fully functional
- [x] All 5 pillars display correctly
- [x] Interactive elements work (hover, click, navigation)
- [x] Modal/dialog displays pillar details
- [x] Responsive design works on all devices
- [x] Animations perform smoothly
- [x] Accessibility features implemented
- [x] Color coding correct for each pillar
- [x] Content structure CMS-ready
- [x] Enhanced navigation with active section highlighting
- [x] Smooth scroll with header offset
- [x] Mobile menu with animations
- [x] Hero section updates (gradient background)
- [x] Visibility fixes for scroll rendering
- [x] No console errors
- [x] Code committed and deployed

**Status:** ✅ **ITERATION 2 COMPLETE** - App is live on Vercel with Five Pillars section.

---

## Iteration 3: Stories & Partners Sections
**Goal:** Add Stories of Impact and Partners & Collaborators sections  
**Timeline:** Week 4  
**Status:** ✅ **COMPLETE** | Deployed to Vercel  
**Builds on:** Iteration 2 ✅

### Additional Components
#### 3.1 Install Additional shadcn/ui Components
```bash
npx shadcn-ui@latest add carousel
npx shadcn-ui@latest add badge
```

### Home Page Sections
#### 3.2 Stories of Impact Section
- Create component: `components/sections/StoriesOfImpact.tsx`
- Embedded YouTube videos (hardcoded links initially, CMS-ready)
- Video carousel component with:
  - Autoplay option
  - Navigation arrows
  - Dot indicators
  - Responsive breakpoints
- Display 3-4 featured videos
- Video cards with:
  - Thumbnail image
  - Title
  - Description
  - Duration
  - Publication date
- "See All Stories" button (links to `/stories` placeholder)
- Lazy loading for videos
- Responsive grid/carousel layout
- Click to play in modal or navigate to video page

#### 3.3 Partners & Collaborators Section
- Create component: `components/sections/Partners.tsx`
- Grid of partner logos organized by sponsor tiers:
  - **Platinum Tier**
    - Large logo display
    - Featured placement
    - Optional testimonial quote
  - **Gold Tier**
    - Medium logo display
    - Prominent placement
  - **Silver Tier**
    - Standard logo display
  - **Community Partner**
    - Smaller logo display
    - Grouped together
- Partner card component with:
  - Logo image
  - Partner name
  - Link to partner website
  - Tier badge/indicator
- Hover effects:
  - Logo scale/opacity change
  - Show partner name overlay
  - Smooth transitions
- Links to partner websites (open in new tab)
- "Become a Partner" CTA button
- Smooth transitions and animations
- Responsive grid:
  - Mobile: 2 columns
  - Tablet: 3 columns
  - Desktop: 4-6 columns (depending on tier)

#### 3.4 Partner Data Structure
- Create `lib/data/partners.ts` with:
  - Partner name
  - Logo URL
  - Website URL
  - Tier (platinum, gold, silver, community)
  - Optional testimonial
  - Partnership description
  - CMS-ready structure

### Enhancement
#### 3.5 Section Integration
- Connect Five Pillars to Stories (when stories are available)
- Link Partners section to "Become a Partner" form (future iteration)
- Smooth scroll navigation between sections

### Deployment Checklist
- [x] Stories of Impact section renders correctly
- [x] Video carousel works properly
- [x] Videos embed correctly (using real YouTube video IDs)
- [x] Partners section displays with empty state
- [x] Partner structure ready for future partners
- [x] Hover effects work smoothly
- [x] Links open correctly (YouTube channel, Instagram)
- [x] Mobile responsive
- [x] Real video IDs integrated from YouTube channel
- [x] Instagram link updated to correct URL
- [x] No console errors
- [x] Code committed and deployed

**Status:** ✅ **ITERATION 3 COMPLETE** - App is live on Vercel with Stories and Partners sections.

---

## Iteration 4: Dynamic Social Media Content
**Goal:** Integrate YouTube and Instagram APIs to dynamically fetch and display content  
**Timeline:** Week 5-6  
**Status:** ✅ **COMPLETE** — YouTube Data API drives `/stories`, `/video/[slug]`, and the home carousel; the new Social Spotlight section surfaces live Instagram highlights with graceful fallbacks.  
**Builds on:** Iteration 3 ✅

#### Completion Summary
- ✅ YouTube Data API client (`lib/youtube.ts`) with server routes under `app/api/youtube` implemented.
- ✅ `/stories` listing and `/video/[slug]` detail pages render dynamic YouTube content with ISR caching.
- ✅ Home page carousel prefers live API data and falls back to curated fixtures when needed.
- ✅ Instagram Graph API integration via `lib/instagram.ts` with cached server fetches, API route at `app/api/instagram/posts/route.ts`, and front-end Social Spotlight grid.
- ✅ Graceful fallback posts ensure content continuity when API credentials are absent.
- ☑️ Confirm production environment variables (`YOUTUBE_API_KEY`, `NEXT_PUBLIC_SITE_URL`, `INSTAGRAM_ACCESS_TOKEN`, `NEXT_PUBLIC_INSTAGRAM_PROFILE_URL`) are configured in Vercel prior to deployment review.


### API Setup
#### 4.1 YouTube Data API Integration
- Get YouTube Data API v3 key from Google Cloud Console
- Channel: https://www.youtube.com/@bigbmeetup
- Fetch latest videos (episodes and shorts)
- Get video metadata: title, description, thumbnails, publish dates
- Implement API rate limiting and caching

```bash
# No additional dependencies needed - use fetch API or axios
npm install axios  # Optional: for easier HTTP requests
```

#### 4.2 Instagram Basic Display API (or Alternative)
- Option A: Instagram Basic Display API (requires app approval)
- Option B: Use Instagram Graph API if you have a Facebook Business account
- Option C: Use RSS feed or web scraping (simpler but less reliable)
- Option D: Display Instagram posts via embeds (simpler, no API needed)

**Note:** Instagram API options may require business verification. For initial implementation, we can use Instagram embeds or manual content updates.

#### 4.3 Build API Client Functions
- Create `lib/youtube.ts` with YouTube API functions:
  - Fetch channel videos (latest N videos)
  - Fetch video by ID
  - Fetch video details (title, description, duration, etc.)
  - Filter episodes vs shorts
- Create `lib/instagram.ts` with Instagram API functions (or embed handlers)
- Implement caching with Next.js revalidation
- Handle API errors gracefully

#### 4.4 Update Home Page Video Carousel
- Replace hardcoded videos with API-fetched videos
- Auto-update featured videos from YouTube channel
- Cache API responses (revalidate every hour)

### Dynamic Page Structure
#### 4.5 Dynamic Video Pages (`/video/[slug]`)
- Create route structure: `app/video/[slug]/page.tsx`
- Fetch video data from YouTube API
- Video page template with:
  - YouTube embed player
  - Video title and description (from YouTube)
  - Video metadata (publish date, duration)
  - Related videos section (from channel)
  - Social sharing buttons
- SEO metadata per video
- Generate static params for featured videos
- Fallback to YouTube watch page if video not found

#### 4.6 Stories Listing Page (`/stories`)
- Create route: `app/stories/page.tsx`
- Fetch all videos from YouTube channel
- Display in grid/list layout
- Filter by category (episodes vs shorts)
- Search functionality (filter by title)
- Pagination (load more or infinite scroll)
- Link back to home page carousel videos

### Image Optimization
#### 4.7 YouTube Thumbnail Optimization
- Use YouTube's thumbnail API for optimized images
- Implement Next.js Image component with YouTube thumbnail URLs
- Responsive image sizing
- Lazy loading
- Fallback thumbnails

### Navigation Updates
#### 4.8 Update Links Throughout Site
- Update "See All Stories" to link to `/stories` page
- Update Stories carousel cards to link to `/video/[slug]` pages
- Update Five Pillars modal CTAs to link to relevant videos (when videos tagged with pillars)

### Video Player Integration
#### 4.9 Install Video Dependencies
```bashx
npm install react-player
```

### SEO Implementation
#### 4.10 Dynamic SEO
- Meta tags for video pages (from YouTube API data)
- Open Graph tags with video thumbnails
- Twitter Card tags
- Structured data (JSON-LD) for videos
- Dynamic sitemap generation for videos

### Environment Variables
- Add YouTube API key to `.env.local`
- Configure Vercel environment variables:
  - `YOUTUBE_API_KEY` (server-side only)
- Optional Instagram API credentials (if using API approach)

### API Rate Limiting & Caching
#### 4.11 Implement Caching Strategy
- Cache YouTube API responses (1 hour revalidation)
- Use Next.js ISR for video pages
- Implement API rate limiting
- Handle quota exceeded errors gracefully

### Testing
#### 4.12 API Integration Testing
- Test YouTube API fetching
- Test video page rendering
- Test dynamic routes
- Test ISR revalidation
- Test error handling for API failures
- Test with rate limiting scenarios

### Deployment Checklist
- [ ] YouTube API key configured
- [ ] API client functions working
- [ ] Video pages render correctly
- [ ] Stories listing page works
- [ ] Home page carousel uses API data
- [ ] Video embeds work correctly
- [ ] SEO metadata correct and dynamic
- [ ] Links work correctly throughout site
- [ ] Image optimization works (YouTube thumbnails)
- [ ] Mobile responsive
- [ ] API rate limiting handled
- [ ] Caching configured correctly
- [ ] Environment variables configured in Vercel
- [ ] No build errors
- [ ] Code committed

**Deploy to Vercel:** Deploy and verify YouTube API integration works with dynamic content.

---

## Iteration 5: Forms & Interactive Features
**Goal:** Add contact forms, animations, and enhanced interactions  
**Timeline:** Week 8  
**Deployment Status:** ✅ Ready to deploy after completion  
**Builds on:** Iteration 4

### Form Setup
#### 3.1 Install Form Dependencies
```bash
npm install react-hook-form @hookform/resolvers zod
npm install resend
```

#### 3.2 Install Additional shadcn/ui Components
```bash
npx shadcn-ui@latest add form
npx shadcn-ui@latest add input
npx shadcn-ui@latest add textarea
npx shadcn-ui@latest add label
```

### Forms & Email Integration
#### 3.3 Join the Movement Section
- **Volunteer Inquiry Form**
  - Fields: Name, Email, Phone, Message, Interests (checkboxes)
  - Validation with Zod
  - Success/error states
  - Loading states

- **Sponsorship Inquiry Form**
  - Fields: Company Name, Contact Name, Email, Phone, Sponsorship Tier Interest, Message
  - Validation with Zod
  - Success/error states
  - Loading states

- **Newsletter Signup**
  - Simple email input
  - Inline validation
  - Success message

#### 3.4 Set Up Resend API
- Create API route: `app/api/contact/route.ts`
- Create API route: `app/api/sponsor/route.ts`
- Create API route: `app/api/newsletter/route.ts`
- Email templates
- Error handling
- Rate limiting
- Domain verification configured in Resend
- Suppression list + unsubscribe workflow documented

### Animations & Interactions
#### 3.5 Scroll Animations
- Framer Motion scroll triggers
- Section entrance animations (fade in, slide up)
- Stagger animations for lists (Five Pillars, Partners)
- Smooth scroll behavior

#### 3.6 Micro-interactions
- Button hover effects
- Card hover/click effects
- Loading spinners
- Form field focus states
- Smooth transitions throughout

#### 3.7 Privacy & Abuse Controls
- Implement bot protection (e.g., hCaptcha or turnstile) and server-side spam scoring
- Store only essential form data; document retention window and deletion process
- Log submissions for 30 days maximum with access restricted to authorized admins
- Include consent language (GDPR/PDPL) for marketing opt-ins
- Add monitoring hook for abuse alerts (rate limit breaches, repeated failures)

#### 3.8 Enhanced Hero Section
- Animated text entrance
- Parallax effect (optional)
- Video background preparation (if assets available)

### Environment Variables
- Set up `.env.local` for Resend API key
- Configure Vercel environment variables

### Deployment Checklist
- [ ] All forms submit successfully
- [ ] Email notifications work
- [ ] Animations perform smoothly
- [ ] No performance issues
- [ ] Mobile forms work correctly
- [ ] Error handling works
- [ ] Environment variables configured in Vercel
- [ ] Code committed

**Deploy to Vercel:** Deploy and test all forms and interactions.

---

---

## Iteration 6: CMS Integration (Sanity)
**Goal:** Set up Sanity CMS for managing content (stories, videos, partners, pillars)  
**Timeline:** Week 8-9  
**Status:** 🔄 **READY TO START**  
**Builds on:** Iteration 5 ✅

### CMS Setup (Sanity)
#### 6.1 Install Sanity Dependencies
```bash
npm install @sanity/client @sanity/image-url
npm install -g @sanity/cli
sanity init
```

#### 6.2 Create Content Schema
- **Story Schema**
  - Title, slug, description
  - Rich text content
  - Hero image
  - Image gallery
  - Related pillars (reference)
  - Related videos (reference)
  - Related events/editions
  - Publication date
  - SEO fields

- **Video Schema**
  - Title, slug, description
  - YouTube/Vimeo URL
  - Thumbnail image
  - Duration
  - Related pillars (reference)
  - Related stories (reference)
  - Publication date
  - SEO fields

- **Press Release Schema**
  - Title, slug, description
  - Rich text content
  - Publication source
  - Publication date
  - PDF attachment (optional)
  - Featured image
  - SEO fields

- **Partner/Sponsor Schema**
  - Name, logo, website
  - Tier (platinum, gold, silver, community)
  - Testimonial (optional)
  - Description
  - Partnership details

- **Pillar Schema** (for CMS management)
  - Pillar name
  - Description
  - Initiatives (array)
  - Related content references
  - Images/videos

#### 6.3 Sanity Studio Setup
- Configure Sanity Studio
- Set up preview URLs for stories/videos
- Configure image handling
- Set up asset management
- Configure preview tokens

### Content Fetching Setup
#### 6.4 Build Sanity Client
- Create `lib/sanity.ts` with Sanity client configuration
- Create `lib/queries.ts` with GROQ queries:
  - Fetch all stories
  - Fetch story by slug
  - Fetch all videos
  - Fetch video by slug
  - Fetch all press releases
  - Fetch all partners
  - Fetch pillar content

#### 6.5 Implement ISR (Incremental Static Regeneration)
- Configure revalidation for dynamic pages
- Set appropriate cache times:
  - Stories: 1 hour revalidation
  - Videos: 1 hour revalidation
  - Press: 6 hours revalidation

### Migrate Existing Pages to CMS
#### 6.6 Update Story Pages to Use CMS
- Migrate story pages to fetch from Sanity instead of static data
- Update story templates to use CMS fields
- Implement rich text rendering (portable text)

#### 6.7 Update Partner Pages to Use CMS
- Migrate partner data to Sanity
- Update Partners section to fetch from CMS
- Enable easy partner management through CMS

#### 6.8 Update Pillar Content to Use CMS
- Migrate pillar content to Sanity
- Update Five Pillars section to fetch from CMS
- Enable content team to edit pillar descriptions

### New CMS-Driven Pages
#### 6.9 Dynamic Story Pages (`/story/[slug]`)
- Create route structure: `app/story/[slug]/page.tsx`
- Fetch story data from Sanity
- Story template with:
  - Hero image (from Sanity)
  - Title and metadata
  - Rich text content (portable text)
  - Image gallery
  - Related stories section
  - Related pillars display
  - Call-to-action buttons
- SEO metadata per story (from CMS)
- Image optimization with Sanity CDN
- Generate static params for known stories

#### 6.10 Press Page (`/press`)
- Create route: `app/press/page.tsx`
- Fetch press releases from Sanity
- List layout with:
  - Filterable by year
  - Sortable by date
  - Press release cards
  - PDF download links (if available)
  - Publication dates and sources
- Pagination (if needed)

### Image Optimization
#### 6.11 Sanity Image Integration
- Use Sanity's image CDN
- Implement Next.js Image component with Sanity URLs
- Responsive image sizing
- Lazy loading
- Blur placeholder support

### Navigation Updates
#### 6.12 Update Links Throughout Site
- Update Five Pillars to link to CMS-managed content
- Add navigation to press page
- Update internal links to use CMS slugs

### SEO Implementation
#### 6.13 CMS-Driven SEO
- Meta tags for all pages (from CMS)
- Open Graph tags (from CMS)
- Twitter Card tags (from CMS)
- Structured data (JSON-LD) for articles/videos
- Dynamic sitemap generation

### Environment Variables
- Add Sanity project ID and dataset to `.env.local`
- Configure Vercel environment variables:
  - `NEXT_PUBLIC_SANITY_PROJECT_ID`
  - `NEXT_PUBLIC_SANITY_DATASET`
  - `SANITY_API_TOKEN` (for write operations, if needed)

### Content Migration
#### 6.14 Initial Content Setup
- Add initial stories to Sanity
- Add videos to Sanity (or sync with YouTube API)
- Add press releases to Sanity
- Add partner data to Sanity
- Add pillar content to Sanity
- Coordinate with content team for QA checklist and preview sign-off

### Testing
#### 6.15 CMS Integration Testing
- Test fetching content from Sanity
- Test image rendering
- Test dynamic routes
- Test ISR revalidation
- Test preview mode (if implemented)
- Test error handling for missing content

### Deployment Checklist
- [ ] Sanity Studio accessible and configured
- [ ] Content schema created and working
- [ ] All dynamic routes work correctly
- [ ] Stories display correctly with CMS content
- [ ] Videos work with CMS (or hybrid CMS + YouTube API)
- [ ] Press page renders correctly
- [ ] Images load properly from Sanity CDN
- [ ] ISR configured correctly
- [ ] SEO metadata correct and dynamic
- [ ] Links work correctly throughout site
- [ ] Image optimization works
- [ ] Mobile responsive
- [ ] Environment variables configured in Vercel
- [ ] No build errors
- [ ] Code committed

**Deploy to Vercel:** Deploy and verify CMS integration works correctly.

---

## Iteration 7: Polish, SEO & Performance Optimization
**Goal:** Final polish, accessibility, SEO, and performance optimization  
**Timeline:** Week 10  
**Status:** 🔄 **READY TO START**  
**Builds on:** Iteration 6 (CMS Integration)

### SEO Optimization
#### 7.1 Advanced SEO
- Complete meta tags for all pages
- Generate XML sitemap (`app/sitemap.ts`)
- Create `robots.txt`
- Implement canonical URLs
- Enhanced structured data (JSON-LD)

#### 7.2 Social Media Optimization
- Complete Open Graph tags
- Twitter Card optimization
- Social sharing previews

### Accessibility
#### 7.3 Accessibility Audit
- Add ARIA labels where needed
- Ensure keyboard navigation works
- Screen reader testing
- Color contrast audit (WCAG AA compliance)
- Focus indicators visible
- Alt text for all images

### Performance Optimization
#### 7.4 Performance Improvements
- Image optimization audit
- Font optimization
- Code splitting review
- Bundle size optimization
- Lazy loading implementation
- Remove unused dependencies

#### 7.5 Lighthouse Optimization
- Target: 90+ across all metrics
- Optimize Core Web Vitals
- Minimize CLS (Cumulative Layout Shift)
- Optimize LCP (Largest Contentful Paint)
- Improve TTI (Time to Interactive)

### Analytics & Monitoring
#### 7.6 Set Up Analytics
- Google Analytics 4 integration
- Vercel Analytics enabled
- Error tracking (Sentry - optional)
- Performance monitoring

### Final Testing
#### 7.7 Comprehensive Testing
- Cross-browser testing (Chrome, Firefox, Safari, Edge)
- Mobile device testing (iOS, Android)
- Form submission testing
- Link testing
- Performance testing
- Accessibility audit
- SEO audit

### Documentation
#### 7.8 Create Documentation
- README.md with setup instructions
- Content management guide (for CMS)
- Deployment guide
- Environment variables documentation

### Deployment Checklist
- [ ] All tests pass
- [ ] Lighthouse score > 90
- [ ] Accessibility audit passed
- [ ] SEO audit passed
- [ ] Analytics configured
- [ ] Documentation complete
- [ ] Production domain configured
- [ ] SSL certificate active
- [ ] Final code review
- [ ] Code committed

**Deploy to Vercel:** Final production deployment and launch! 🚀

---

## Post-Launch Iterations (Future Enhancements)

### Iteration 8: Enhanced Features (Optional)
- Search functionality
- Advanced filtering
- User accounts (if needed)
- Donation integration
- Multi-language support

### Iteration 9: Advanced CMS Features
- Content preview
- Content versioning
- Multi-user editing
- Workflow management

---

## Brand Colors Implementation

### Primary Colors
```javascript
// tailwind.config.js
colors: {
  primary: {
    maroon: '#8A1538',      // Qatar Maroon
    blue: '#003366',        // Deep Blue
    sand: '#EED6A0',        // Warm Sand
    green: '#008060',       // Emerald Green
  },
  // Pillar colors
  pillars: {
    sports: '#FF6F3C',      // Coral Orange
    art: '#7B4BA0',         // Royal Purple
    sustainability: '#008060', // Emerald Green
    ability: '#005C99',     // Deep Blue
    animal: '#BFA48E',      // Warm Taupe
  },
  neutral: {
    offWhite: '#F7F7F7',
    charcoal: '#2C2C2C',
  }
}
```

---

## Typography

### Font Setup
```javascript
// tailwind.config.js
fontFamily: {
  heading: ['Poppins', 'sans-serif'],
  subheading: ['Nunito Sans', 'sans-serif'],
  body: ['Open Sans', 'sans-serif'],
}
```

### Font Loading
- Use `next/font` for optimal font loading
- Preload critical fonts
- Use font-display: swap

---

## Component Library Recommendations

### shadcn/ui Components to Install
1. **button** - CTAs throughout the site
2. **card** - Pillar cards, partner cards, story cards
3. **form** - All form components
4. **input** - Form inputs
5. **textarea** - Contact forms
6. **carousel** - Video carousel, testimonials
7. **dialog** - Modals for pillars, videos
8. **tabs** - Organize content sections
9. **accordion** - FAQ or expandable content
10. **separator** - Section dividers

---

## Performance Targets

- **Lighthouse Score:** 90+ across all metrics
- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Time to Interactive:** < 3.5s
- **Cumulative Layout Shift:** < 0.1
- **Bundle Size:** < 250KB initial load

---

## Accessibility Standards

- **WCAG 2.1 Level AA** compliance
- Keyboard navigation support
- Screen reader compatibility
- Color contrast ratio: 4.5:1 minimum
- Focus indicators visible
- Alt text for all images
- Semantic HTML structure

---

## SEO Strategy

### On-Page SEO
- Optimized meta titles and descriptions
- Header hierarchy (H1, H2, H3)
- Alt text for images
- Internal linking structure
- Semantic HTML

### Technical SEO
- XML sitemap
- robots.txt
- Canonical URLs
- Structured data (JSON-LD)
- Open Graph tags
- Twitter Card tags

### Content SEO
- Keyword optimization
- Content quality
- Regular content updates
- Blog/news section for fresh content

---

## Security Considerations

- Environment variables for sensitive data
- Input validation and sanitization
- CSRF protection
- HTTPS enforcement
- Content Security Policy (CSP)
- Rate limiting on forms

---

## Monitoring & Analytics

### Recommended Tools
- **Vercel Analytics** - Built-in performance monitoring
- **Google Analytics 4** - User behavior tracking (anonymize IP, EU data retention)
- **Sentry** - Error tracking and monitoring
- **Hotjar** - User session recordings (optional; gated behind consent)

### Privacy & Compliance
- Implement a consent management platform (CMP) covering analytics, marketing, and session replay
- Maintain a data processing inventory for all third-party tools with lawful bases documented
- Configure data retention limits (e.g., GA4 14 months, Sentry 90 days) and review quarterly
- Provide user-facing privacy notice updates aligned with Qatar PDPL/GDPR requirements
- Offer opt-out toggles and honor Do Not Track where feasible

---

## Content Management Strategy

### Phase 1: Iterations 1-3
- Static seed content committed alongside code
- JSON/YAML fixtures for partner + pillar data (used by components and tests)
- Shared content model definitions prepared for CMS parity

### Phase 2: Iterations 4-5
- Sanity becomes the source of truth for stories, videos, partners, and press
- Engineering migrates fixtures into Sanity datasets and verifies parity
- Content team owns schema-approved publishing workflow and preview testing

### Phase 3: Post-Launch Enhancements
- Enable content preview, versioning, and multi-user roles in Sanity
- Document editorial processes (publishing SLAs, review steps, rollback guidance)
- Evaluate additional CMS automation (scheduled publishing, webhook-triggered rebuilds)

---

## Maintenance Plan

### Regular Updates
- Dependency updates (monthly)
- Security patches (as needed)
- Content updates (as needed)
- Performance monitoring (weekly)

### Backup Strategy
- Git repository backups
- CMS content backups
- Database backups (if applicable)

---

## Success Metrics

### Key Performance Indicators (KPIs)
- Website traffic growth
- Form submission rates
- Time on page
- Bounce rate
- Conversion rate (sponsor inquiries)
- Newsletter signups

---

## Next Steps After Launch

1. **Content Creation**
   - Migrate existing content to CMS
   - Create story pages for all 13 editions
   - Add video content

2. **Feature Enhancements**
   - Search functionality
   - Advanced filtering
   - User accounts (if needed)
   - Donation integration

3. **Marketing Integration**
   - Social media integration
   - Email marketing setup
   - Analytics dashboard

---

## Resources & Documentation

### Official Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Vercel Documentation](https://vercel.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

### Learning Resources
- Next.js Learn Course
- Tailwind CSS Tutorials
- React Hook Form Guide
- TypeScript Handbook

---

**Document Version:** 1.2  
**Last Updated:** November 2025  
**Status:** Iterations 1-4 complete; Iteration 5 up next
