import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily:{
      Boruna:["var(--font-boruna)"],
      Futura:["var(--font-futura)"],
      Futuracond:["var(--font-futuracond)"],
      Mda:["var(--font-mda)"],
      Motley:["var(--font-motley)"],
      Quiet:["var(--font-quiet)"]
      
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'stars': "url('/image/stars.png')",
      },
      dropShadow: {
        glow: [
          "0 0px 10px rgba(255,255, 255, 0.35)",
          "0 0px 10px rgba(255, 255,255, 0.2)"
          
        ]
      },
      
    },
  },
  plugins: [],
};
export default config;
