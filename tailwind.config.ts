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
        wiggle: "wiggle 1s ease-in-out infinite",
        "pulse-fast": "pulse 4s ease-in-out infinite",
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
        wiggle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(5px)" },
        },
      },
      screens: {
        "portrait-tall": {
          raw: "(max-aspect-ratio: 1/1) and (min-height: 751px)",
        },
      },
      backgroundColor: {
        "contact-base": "#141A1F",
      },
      backgroundImage: {
        "skills-gradient": `
        linear-gradient(
          135deg,
          rgba(255, 165, 0, 0.08) 0%,     /* warm orange base */
          rgba(50, 70, 130, 0.20) 18%,    /* slightly more saturated blue */
          rgba(80, 80, 90, 0.06) 30%,     /* gray/blue fade */
          rgba(0, 0, 0, 0.02) 38%,        /* light dark fade */
          transparent 45%,               /* fading out */
          transparent 100%               /* fully transparent in top-left */
        )
  `,
        "contact-gradient": `
          linear-gradient(
            315deg,
            rgba(255, 192, 203, 0.12) 0%,     /* pink haze */
            rgba(144, 238, 144, 0.10) 18%,    /* green haze étalée */
            rgba(255, 182, 193, 0.08) 30%,    /* light pink */
            rgba(255, 255, 255, 0.03) 45%,    /* gentle light */
            transparent 75%,
            transparent 100%
          )
        `,
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
