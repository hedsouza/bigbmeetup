export function formatArticleDate(isoDate?: string) {
  if (!isoDate) {
    return null;
  }
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) {
    return isoDate;
  }
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    year: 'numeric',
    day: 'numeric',
  }).format(date);
}

