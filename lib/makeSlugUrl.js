export function makeSlugUrl(str) {
  return str.replace(/\s+/g, "-").toLowerCase();
}
