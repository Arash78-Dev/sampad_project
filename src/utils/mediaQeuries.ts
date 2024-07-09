const breakpoints = {
  sm: "(min-width: 640px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 1024px)",
  xl: "(min-width: 1280px)",
  "2xl": "(min-width: 1536px)",
};


export const is2xl = window.matchMedia(breakpoints["2xl"]).matches
export const isxl = window.matchMedia(breakpoints.xl).matches 
export const islg = window.matchMedia(breakpoints.lg).matches 
export const ismd = window.matchMedia(breakpoints.md).matches
export const issm = window.matchMedia(breakpoints.sm).matches