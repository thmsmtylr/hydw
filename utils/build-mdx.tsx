export function buildMDX(mdx: string) {
  let modifiedMdx = mdx.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a class="transition-colors duration-150 hover:text-hydw-pink" href="$2" target="_blank" rel="noreferrer">$1</a>'
  );

  modifiedMdx = modifiedMdx.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");

  return modifiedMdx;
}
