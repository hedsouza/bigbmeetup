import { VideoContent } from "@/types/video";

/**
 * Featured videos from the bigbmeetup YouTube channel
 * YouTube channel: https://www.youtube.com/@bigbmeetup
 * 
 * TO GET VIDEO IDs:
 * 1. Visit https://www.youtube.com/@bigbmeetup
 * 2. Click on any video
 * 3. Copy the video ID from the URL (the part after "watch?v=")
 *    Example: https://www.youtube.com/watch?v=VIDEO_ID_HERE
 * 
 * TO IDENTIFY EPISODES VS SHORTS:
 * - Episodes: Regular videos, typically longer content
 * - Shorts: Vertical videos, marked as "Shorts" on YouTube
 * 
 * This will be replaced with API fetching in Iteration 4
 */

export const FEATURED_VIDEOS: VideoContent[] = [
  {
    id: "featured-1",
    title: "The 66th episode of the weekly virtua",
    description: "Driving Sustainability in Qatar with Volvo. A panel discussion on Estedama (arabic for sustainability)",
    youtubeId: "2GQ_XuW_2Q4", // TODO: Replace with actual YouTube video ID from channel
    publishedAt: "2021-12-12", // TODO: Update with actual publish date
    category: "episode", // Change to "short" if this is a YouTube Short
  },
  {
    id: "featured-2",
    title: "Celebrating World Mental Health Day.",
    description: "Guest speakers for today, Mrs. Kanika Jindal, Company Psychologist, Mr. Mohamed Al Hayder, Certified Life Coach & Mr. Vishnu Prasad, Yoga Instructor.",
    youtubeId: "kzFhkDT6nXU", // TODO: Replace with actual YouTube video ID from channel
    publishedAt: "2020-10-11", // TODO: Update with actual publish date
    category: "episode", // Change to "short" if this is a YouTube Short
  },
  {
    id: "featured-3",
    title: "Celebrating Wellness with Tina, Abrar and Nasser",
    description: "The Wellness Mentality - We all need wellness in our lives, now more then ever!",
    youtubeId: "yL30zepu8mw", // TODO: Replace with actual YouTube video ID from channel
    publishedAt: "2021-05-03", // TODO: Update with actual publish date
    category: "episode", // Change to "short" if this is a YouTube Short
  },
  {
    id: "featured-4",
    title: "Celebrating Football",
    description: "Quick highlights from our recent community events.",
    youtubeId: "4orzQpQUaKo", // TODO: Replace with actual YouTube video ID from channel
    publishedAt: "2020-07-10", // TODO: Update with actual publish date
    category: "episode", // Change to "episode" if this is a regular video
  },
];

// Helper function to generate YouTube thumbnail URL from video ID
export function getYouTubeThumbnail(videoId: string): string {
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
}

// Helper function to generate YouTube embed URL
export function getYouTubeEmbedUrl(videoId: string): string {
  return `https://www.youtube.com/embed/${videoId}`;
}

// Helper function to generate YouTube watch URL
export function getYouTubeWatchUrl(videoId: string): string {
  return `https://www.youtube.com/watch?v=${videoId}`;
}

// YouTube channel URL
export const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/bigbmeetup";

