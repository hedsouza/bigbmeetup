# Media Section Design Plan

## Overview
A new "Media" section to showcase press coverage, articles, and website mentions of bigbmeetup. This section will highlight the movement's visibility and impact in the media.

---

## Current Assets

### Article Images
- **Location:** `public/images/articles/`
- **Count:** 36 article images
- **Formats:** JPG and PNG
- **Naming:** Numeric (e.g., `5.jpg`, `12.jpg`, `104.jpg`)

### Website Mentions
- Need to collect URLs and metadata for websites that mention bigbmeetup
- Examples might include:
  - News articles
  - Blog posts
  - Event listings
  - Partner websites
  - Social media posts

---

## Section Structure & Layout

### Option 1: Two-Tab Layout (Recommended)
```
┌─────────────────────────────────────────┐
│         Media & Press Coverage          │
│  ────────────────────────────────────   │
│                                         │
│  [Articles] [Website Mentions]         │ ← Tabs
│                                         │
│  ┌──────┐ ┌──────┐ ┌──────┐            │
│  │      │ │      │ │      │            │ ← Grid of items
│  │      │ │      │ │      │            │
│  └──────┘ └──────┘ └──────┘            │
│                                         │
│  ┌──────┐ ┌──────┐ ┌──────┐            │
│  │      │ │      │ │      │            │
│  └──────┘ └──────┘ └──────┘            │
└─────────────────────────────────────────┘
```

### Option 2: Filtered Grid Layout
```
┌─────────────────────────────────────────┐
│         Media & Press Coverage          │
│  ────────────────────────────────────   │
│                                         │
│  [All] [Articles] [Mentions]           │ ← Filter buttons
│                                         │
│  ┌──────┐ ┌──────┐ ┌──────┐            │
│  │      │ │      │ │      │            │ ← Filtered grid
│  │      │ │      │ │      │            │
│  └──────┘ └──────┘ └──────┘            │
└─────────────────────────────────────────┘
```

### Option 3: Masonry/Grid with Categories
```
┌─────────────────────────────────────────┐
│         Media & Press Coverage          │
│  ────────────────────────────────────   │
│                                         │
│  ┌──────────┐  ┌──────────┐           │
│  │ Articles │  │ Mentions │           │ ← Category headers
│  │          │  │          │           │
│  │ ┌──┐┌──┐ │  │ ┌──┐┌──┐ │           │
│  │ │  ││  │ │  │ │  ││  │ │           │
│  │ └──┘└──┘ │  │ └──┘└──┘ │           │
│  └──────────┘  └──────────┘           │
└─────────────────────────────────────────┘
```

**Recommendation: Option 1 (Two-Tab Layout)** - Clean, organized, easy to navigate

---

## Component Design

### Media Item Card (Article)
```
┌─────────────────────────┐
│                         │
│    [Article Image]      │ ← Thumbnail
│                         │
├─────────────────────────┤
│ Article Title           │ ← Title (truncated)
│ Publication Name        │ ← Source
│ Date: Jan 2024          │ ← Date
│ [Read More →]           │ ← Link button
└─────────────────────────┘
```

### Media Item Card (Website Mention)
```
┌─────────────────────────┐
│                         │
│    [Website Logo]       │ ← Favicon/Logo
│    or Screenshot        │
│                         │
├─────────────────────────┤
│ Website Name            │ ← Source
│ Mention Title/Excerpt   │ ← Title/Preview
│ Date: Jan 2024          │ ← Date
│ [Visit Site →]          │ ← External link
└─────────────────────────┘
```

### Modal/Detail View (Article)
```
┌──────────────────────────────────────┐
│  [X]                                  │
│                                       │
│  ┌────────────────────────────────┐  │
│  │                                │  │
│  │    [Full Article Image]        │  │
│  │                                │  │
│  └────────────────────────────────┘  │
│                                       │
│  Article Title                        │
│  Publication Name | Date             │
│  ──────────────────────────────────  │
│                                       │
│  Article excerpt or full text...      │
│                                       │
│  [Read Full Article →]               │
└──────────────────────────────────────┘
```

---

## Data Structure Proposal

### Article Type
```typescript
interface Article {
  id: string;
  title: string;
  publication: string; // e.g., "Gulf Times", "Qatar Tribune"
  publicationDate: string; // ISO date
  imageUrl: string; // Path to image in /images/articles/
  excerpt?: string; // Optional article excerpt
  fullArticleUrl?: string; // Link to full article if available
  category?: "news" | "feature" | "event" | "interview";
  tags?: string[]; // e.g., ["sports", "wellness", "community"]
}
```

### Website Mention Type
```typescript
interface WebsiteMention {
  id: string;
  title: string;
  websiteName: string; // e.g., "Qatar Living", "Time Out Doha"
  websiteUrl: string; // Full URL to the mention
  mentionDate: string; // ISO date
  excerpt?: string; // Preview text
  logoUrl?: string; // Website favicon/logo
  screenshotUrl?: string; // Optional screenshot
  category?: "news" | "event" | "blog" | "social";
  tags?: string[];
}
```

---

## Visual Design Concepts

### Concept A: Clean Grid with Hover Effects
- **Grid Layout:** 3 columns (desktop), 2 (tablet), 1 (mobile)
- **Hover Effect:** Card lifts slightly, shows overlay with "View" button
- **Colors:** Use brand colors (maroon accents)
- **Typography:** Heading font for titles, body font for details

### Concept B: Magazine-Style Layout
- **Featured Article:** Large hero card at top
- **Grid Below:** Smaller cards in masonry layout
- **Visual Hierarchy:** Most recent or important articles get larger display

### Concept C: Timeline View (Alternative)
- **Chronological Display:** Articles arranged by date
- **Timeline Line:** Visual timeline connecting items
- **Filter by Year:** Year selector at top

**Recommendation: Concept A** - Clean, modern, consistent with existing sections

---

## Features & Interactions

### Basic Features
1. **Grid Display:** Responsive grid of media items
2. **Tab Navigation:** Switch between Articles and Website Mentions
3. **Modal View:** Click card to see full details
4. **External Links:** Open articles/mentions in new tab
5. **Date Sorting:** Most recent first (default)

### Advanced Features (Future)
1. **Search:** Search by title, publication, or tags
2. **Filter:** Filter by category, year, or tags
3. **Pagination:** Load more items (if many articles)
4. **Share:** Share individual articles/mentions
5. **Print View:** Print-friendly article view

---

## Placement on Homepage

### Option 1: After Partners Section
```
Hero → About → Five Pillars → Stories → Partners → **Media** → Join
```
**Pros:** Natural flow, shows credibility after partnerships  
**Cons:** Might be lower on page

### Option 2: After Stories Section
```
Hero → About → Five Pillars → Stories → **Media** → Partners → Join
```
**Pros:** Media complements stories well  
**Cons:** Separates Partners from other content

### Option 3: Before Partners
```
Hero → About → Five Pillars → Stories → **Media** → Partners → Join
```
**Recommendation:** Same as Option 2, but consider user journey

**Final Recommendation: After Partners** - Shows media coverage as social proof after partnerships

---

## Responsive Breakpoints

### Mobile (< 640px)
- 1 column grid
- Stacked tabs (if using tabs)
- Full-width cards
- Simplified modal

### Tablet (640px - 1024px)
- 2 column grid
- Side-by-side tabs
- Medium-sized cards
- Standard modal

### Desktop (> 1024px)
- 3-4 column grid
- Horizontal tabs
- Larger cards with more detail
- Full-featured modal

---

## Content Organization Strategy

### Phase 1: Manual Curation
1. **Audit Articles:**
   - Review all 36 article images
   - Identify publication sources
   - Extract dates (if visible)
   - Create metadata file

2. **Collect Website Mentions:**
   - List all known mentions
   - Gather URLs
   - Take screenshots (optional)
   - Extract key information

### Phase 2: Data Entry
1. Create `lib/data/articles.ts` with article data
2. Create `lib/data/mentions.ts` with mention data
3. Link images to articles
4. Add publication logos/favicons

### Phase 3: CMS Integration (Future)
- Migrate to Sanity CMS
- Enable content team to add new articles
- Auto-fetch website mentions (if possible)

---

## Design Mockup Description

### Section Header
```
┌─────────────────────────────────────────┐
│                                         │
│      Media & Press Coverage             │ ← Large heading (maroon)
│      ────────────────                   │ ← Underline accent
│                                         │
│  Discover how bigbmeetup has been       │
│  featured in the media and press        │ ← Subtitle
│                                         │
└─────────────────────────────────────────┘
```

### Tab Navigation
```
┌─────────────────────────────────────────┐
│  [Articles] [Website Mentions]          │ ← Tabs (maroon active state)
└─────────────────────────────────────────┘
```

### Grid Layout
```
┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐
│      │ │      │ │      │ │      │
│      │ │      │ │      │ │      │
│ Card │ │ Card │ │ Card │ │ Card │
│      │ │      │ │      │ │      │
└──────┘ └──────┘ └──────┘ └──────┘
```

---

## Questions to Consider

1. **Article Metadata:**
   - Do you have publication names for all articles?
   - Do you have dates for all articles?
   - Do you have links to full articles?

2. **Website Mentions:**
   - What websites have mentioned bigbmeetup?
   - Do you have screenshots or just URLs?
   - Should we fetch favicons automatically?

3. **Content Priority:**
   - Which articles/mentions are most important?
   - Should some be featured/pinned?
   - Any articles that should be hidden?

4. **Future Growth:**
   - How often will new articles be added?
   - Will this need CMS integration soon?
   - Should we plan for search/filter from the start?

---

## Next Steps (Plan of Attack)

### Step 1: Content Audit & Collection
- [ ] Review all 36 article images
- [ ] Identify publication sources
- [ ] Extract dates and titles
- [ ] List all website mentions
- [ ] Gather URLs and metadata

### Step 2: Data Structure Design
- [ ] Finalize TypeScript interfaces
- [ ] Create data files structure
- [ ] Plan image organization

### Step 3: Design Approval
- [ ] Review design concepts
- [ ] Choose layout option
- [ ] Approve visual design
- [ ] Confirm placement on homepage

### Step 4: Implementation Planning
- [ ] Break down into tasks
- [ ] Estimate timeline
- [ ] Identify dependencies
- [ ] Plan testing approach

---

## Recommendations Summary

1. **Layout:** Two-tab layout (Articles | Website Mentions)
2. **Design:** Clean grid with hover effects (Concept A)
3. **Placement:** After Partners section on homepage
4. **Data:** Manual curation first, CMS later
5. **Features:** Start simple, add search/filter later

---

**Ready for your feedback and decisions!**


