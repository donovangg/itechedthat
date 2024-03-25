/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        airdasher: "url('/assets/mr-dolphin.webp')",
        capcom: "url('/assets/capcom.webp')",
        fundamentals: "url('/assets/footsies.gif')",
        bread: "url('/assets/akiha.webp')",
        "3d": "url('/assets/3d.webp')",
        submit: "url(/assets/mentos.webp)",
      },
    },
  },
  plugins: [],
};
