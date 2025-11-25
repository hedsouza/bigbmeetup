export function getBaseUrl(): string {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (siteUrl) {
    return siteUrl.replace(/\/$/, "");
  }

  const vercelUrl = process.env.VERCEL_URL?.trim();
  if (vercelUrl) {
    const normalizedVercelUrl = vercelUrl.replace(/\/$/, "");
    const hasProtocol = /^https?:\/\//i.test(normalizedVercelUrl);
    return hasProtocol ? normalizedVercelUrl : `https://${normalizedVercelUrl}`;
  }

  return process.env.NODE_ENV === "production"
    ? "https://bigbmeetup.vercel.app"
    : "http://localhost:3000";
}

