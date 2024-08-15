module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-blue': '#ADD8E6',
        primary: '#38bdf8', // Cyan-500 color
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
