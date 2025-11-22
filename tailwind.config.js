/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light & User-Friendly Theme Palette
        background: "#FFFFFF", // White
        surface: "#F8FAFC",    // Light Gray (Slate 50)
        primary: "#DC2626",    // Premium Red (Red 600)
        secondary: "#1E293B",  // Navy Blue (Slate 800)
        text: {
          main: "#0F172A",     // Dark Slate (Slate 900)
          muted: "#64748B",    // Slate Gray (Slate 500)
        },
        // Keeping legacy colors for safety until fully refactored, but re-mapping where possible
        "siemens-bg": "#020617",
        "siemens-card-color": "#0F172A",
        "lg-bg-light": "#0F172A",
        "lg-bg": "#020617",
        "lg-text": "#FFFFFF",
        darkBlue: "#0F172A",
        pink: "#DC2626",
        maroon: "#8C0014",
        seagreen: "#1D4ED8",
        darkred: "#A50034",
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
