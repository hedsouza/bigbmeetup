# YouTube Video ID Helper

## How to Get Video IDs from Your Channel

1. **Visit your YouTube channel**: https://www.youtube.com/@bigbmeetup
2. **Click on any video** to watch it
3. **Look at the URL** - it will look like: `https://www.youtube.com/watch?v=VIDEO_ID_HERE`
4. **Copy the part after `v=`** - that's your video ID (11 characters)

## Example:
- URL: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- Video ID: `dQw4w9WgXcQ`

## To Update the Videos in the Project:

1. Open `lib/data/videos.ts`
2. Find the `FEATURED_VIDEOS` array
3. Replace `EXAMPLE_ID_1`, `EXAMPLE_ID_2`, etc. with actual video IDs
4. Update the titles, descriptions, and published dates to match your videos
5. Set `category` to `"episode"` for longer videos or `"short"` for YouTube Shorts

## Using YouTube Data API (Optional - for Iteration 4):

For automatic fetching, you can use the YouTube Data API v3:
- Endpoint: `https://www.googleapis.com/youtube/v3/search`
- Requires API key (free quota available)
- Can fetch latest videos from channel automatically

