module.exports = {
  // purge: [
  //   './src/components/GetDiagnostic.js',
  //   './src/components/News.js',
  //   './src/components/NewDetails.js',
  //   // Add more files here to include in the purging process
  // ],
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/*.{js,ts,jsx,tsx,mdx}',
    './src/data/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

