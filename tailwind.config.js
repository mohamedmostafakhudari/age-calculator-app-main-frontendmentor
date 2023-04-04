/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primarybg: "hsl(0, 0%, 100%)",
        secondarybg: "hsl(0, 0%, 94%)",
        primarytext: "hsl(259, 100%, 65%)",
        secondarytext: "hsl(0, 0%, 8%)",
        label: "hsl(0, 1%, 44%)",
        placeholder: "hsl(0, 1%, 44%)",
        border: "hsl(0, 0%, 86%)",
        error: "hsl(0, 100%, 67%)",
      },
      fontFamily: {
        body: ["'Poppins'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
