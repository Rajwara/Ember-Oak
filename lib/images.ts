/**
 * Builds the props for a responsive <img>. Images live in /public/assets/images
 * as `<name>.png` plus smaller copies named `<name>-500.png`, `<name>-800.png`, ...
 */
export type ResponsiveImage = { src: string; srcSet?: string; sizes?: string };

export function responsiveImage(
  name: string,
  { widths = [], fullWidth, sizes }: { widths?: number[]; fullWidth?: number; sizes?: string } = {},
): ResponsiveImage {
  const src = `/assets/images/${name}.png`;
  if (!widths.length || !fullWidth) return { src };
  const srcSet = [
    ...widths.map((w) => `/assets/images/${name}-${w}.png ${w}w`),
    `${src} ${fullWidth}w`,
  ].join(", ");
  return { src, srcSet, sizes };
}
