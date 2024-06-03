import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/app/**/*.{ts,tsx,js,jsx}",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        fonts: {
          inter: {
            value:
              'var(--font-inter), ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
          },
        },
      },
      keyframes: {
        slideDown: {
          from: {
            height: 0,
          },
          to: {
            height: "75px",
          },
        },
        slideUp: {
          from: {
            height: "75px",
          },
          to: {
            height: 0,
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",

  jsxFramework: "react",

  globalCss: {
    "html, body": {
      width: "100vw",
      height: "100vh",
      fontFamily: "inter",
    },
    body: {
      backgroundColor: "slate.50",
      color: "slate.700",
    },
  },
});
