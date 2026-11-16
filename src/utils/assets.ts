/**
 * Resolve public/ assets safely across local dev, vite preview,
 * and GitHub Pages repository subpaths (e.g. /repo-name/).
 */
export function assetUrl(relativePath: string): string {
  const cleanRel = relativePath.replace(/^\/+/, '');
  const base = import.meta.env.BASE_URL || './';
  return base.endsWith('/') ? `${base}${cleanRel}` : `${base}/${cleanRel}`;
}
