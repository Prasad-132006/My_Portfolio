const PLACEHOLDER_URLS = new Set([
  '#',
  'https://github.com',
  'http://github.com',
  'https://demo.example.com',
  'http://demo.example.com',
  'https://leetcode.com',
  'http://leetcode.com',
]);

export function withHttps(url) {
  if (!url) return '';
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  return `https://${url}`;
}

export function isConfiguredUrl(url) {
  if (!url) return false;
  const normalized = withHttps(url).replace(/\/$/, '');
  if (PLACEHOLDER_URLS.has(url) || PLACEHOLDER_URLS.has(normalized)) return false;
  return true;
}

export function isPlaceholderText(value) {
  return typeof value === 'string' && (value.includes('[') || value.includes('PLACEHOLDER'));
}
