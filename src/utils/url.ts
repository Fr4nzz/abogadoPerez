/**
 * Prepend the Astro base URL to a path.
 * Handles both development (base = '/') and production (base = '/abogadoPerez/').
 */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (path.startsWith('/')) return `${base}${path}`;
  return `${base}/${path}`;
}
