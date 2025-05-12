const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  //darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--poppins-regular)", "sans-serif"],
      },
      fontWeight: {
        thin: "100",
        extralight: "200",
        medium: "500",
        bold: "700",
        extrabold: "800",
      },
      colors: {
        "background-blue": "#1B1F24",
        "light-grey": "#D9D9D9",
        "dark-grey": "#737373",
        "light-salmon": "#FFD4D0",
        "salmon-pink": "#FF6F61",
        "dark-salmon": "#99433A",
      },
      animation: {
        aurora: "aurora 60s linear infinite",
        border: "borderShift 3s linear infinite",
        spinY: "spinY 1s linear infinite",
        spinX: "spinX 1s linear infinite",
        marquee: "marquee 40s linear infinite",
        "marquee-reverse": "marquee-reverse 40s linear infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
        borderShift: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "40px 40px" },
        },
        spinY: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
        spinX: {
          "0%": { transform: "rotateX(0deg)" },
          "100%": { transform: "rotateX(360deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      screens: {
        "portrait-tall": {
          raw: "(max-aspect-ratio: 1/1) and (min-height: 751px)",
        },
      },
    },
  },
  variants: {
    extend: {
      animation: ["hover"],
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
