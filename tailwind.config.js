module.exports = {
  content: ["./**/*.html"],
  theme: {
    colors: {
      mcyan: '#3CB4AC',
      dcyan: '#147B74',
      black: '#000000',
      dgray: '#7A7A7A',
      white: '#ffffff',
      lgray: '#d1d5db',
      slate: '#f1f5f9',
      red: '#ef4444'
    },
    extend: {
      backgroundImage: {
        desktop: "url('Layouts/image/image-hero-mobile.jpg')",
        mobile: "url('Layouts/image/image-hero-mobile.jpg')",
        master: "url('logo-mastercraft.svg')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
