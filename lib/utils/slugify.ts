/**
 * Convert text to URL-safe slug
 */
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')        // Replace spaces with -
    .replace(/[^\w\-]+/g, '')    // Remove all non-word chars except -
    .replace(/\-\-+/g, '-')      // Replace multiple - with single -
    .replace(/^-+/, '')          // Trim - from start
    .replace(/-+$/, '')          // Trim - from end
}

/**
 * Generate a company slug from name and optional city
 */
export function generateCompanySlug(name: string, city?: string): string {
  const parts = [name]
  if (city) {
    parts.push(city)
  }
  return slugify(parts.join(' '))
}
