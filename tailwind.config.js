/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0a0d0c",
          900: "#0f1413",
          800: "#161c1b",
          700: "#1e2625",
          600: "#2a3331"
        },
        ivory: {
          50: "#fbf7e9",
          100: "#f4ecd0",
          200: "#ece1b8",
          300: "#dccf9d",
          400: "#c4b685"
        },
        sage: {
          500: "#5a6b66",
          700: "#3b4744"
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "ui-serif", "Georgia", "serif"],
        display: ['"Fraunces"', "ui-serif", "Georgia", "serif"],
        sans: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
        script: ['"Playfair Display"', "ui-serif", "Georgia", "serif"]
      },
      letterSpacing: {
        "ultra": "0.4em",
        "wider-2": "0.18em"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" }
        },
        spinSlow: {
          to: { transform: "rotate(360deg)" }
        },
        floatY: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        },
        breath: {
          "0%,100%": { transform: "scale(1)", opacity: ".75" },
          "50%": { transform: "scale(1.04)", opacity: "1" }
        }
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        spinSlow: "spinSlow 24s linear infinite",
        floatY: "floatY 6s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
        breath: "breath 8s ease-in-out infinite"
      },
      backgroundImage: {
        "noise":
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 0.95  0 0 0 0 0.92  0 0 0 0 0.78  0 0 0 0.45 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        "ivory-gradient":
          "radial-gradient(ellipse at top, rgba(244,236,208,0.18), transparent 60%)"
      }
    }
  },
  plugins: []
};
