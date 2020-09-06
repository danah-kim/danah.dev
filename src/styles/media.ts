const maxMediaQuery = (maxWidth: number) => `@media (max-width: ${maxWidth}px)`;

const minMediaQuery = (minWidth: number) => `@media (min-width: ${minWidth}px)`;

const mediaQuery = (maxWidth: number, minWidth: number) =>
  `@media (max-width: ${maxWidth}px) and (min-width: ${minWidth}px)`;

const media = {
  xxlarge: maxMediaQuery(1920),
  xlarge: maxMediaQuery(1440),
  large: maxMediaQuery(1200),
  medium: maxMediaQuery(1024),
  small: maxMediaQuery(768),
  xsmall: maxMediaQuery(375),
  customMax: maxMediaQuery,
  customMin: minMediaQuery,
  custom: mediaQuery,
};

export type Media = typeof media;
export default media;
