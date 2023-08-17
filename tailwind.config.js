/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"PT Sans"', "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      backgroundImage: {
        hideout: "url('src/assets/hideout.svg')",
      },
      colors: {
        primary: "#9A54B3",
        seconday: "#DE58A0",
        tertiary: "#FF9969",
        quaternary: "#FFC95D",
      },
      keyframes: {
        animatedgradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        colortransition: {
          from: {
            color: "#06b6d4",
          },
          to: {
            color: "#2563eb",
          },
        },
      },
      animation: {
        gradient: "animatedgradient 6s ease infinite alternate",
        textcolor: "colortransition 10s ease infinite alternate",
      },
    },
  },
  plugins: [require("daisyui")],
};
