const vw = { sm: 768, md: 1024 };

/*
  breakpoints is detecting the min-width of the viewport
  ex: 601px is the breakpoint for SM
*/
const breakpoints = [
  '1px', // sm
  `${vw.sm + 1}px`, // md
  `${vw.md + 1}px`, // lg
];

[breakpoints.sm, breakpoints.md, breakpoints.lg] = breakpoints; // aliases

const theme = { breakpoints };

export default theme;
