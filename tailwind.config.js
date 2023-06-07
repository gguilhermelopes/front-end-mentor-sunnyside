/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        softRed: "var(--soft-red)",
        yellow: "var(--yellow)",
        darkDesaturatedCyan: "var(--dark-desaturated-cyan-graphic-design-text)",
        darkBlue: "var(--dark-blue-photography-text)",
        darkModerateCyan: "var(--dark-moderate-cyan-footer)",
        veryDarkDesaturatedBlue: "var(--very-dark-desaturated-blue)",
        veryDarkGrayishBlue: "var(--very-dark-grayish-blue)",
        darkGrayishBlue: "var(--dark-grayish-blue)",
        grayishBlue: "var(--grayish-blue)",
        white: "var(--white)",
      },
      backgroundImage: {
        headerImg: "url('/images/desktop/image-header.jpg')",
        headerImgMobile: "url('/images/mobile/image-header.jpg')",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)"],
      },
    },
  },
  plugins: [],
};
