/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // adjust if needed
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: `rgba(0, 0, 0, 0.4) 0px 2px 4px,
                 rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
                 rgba(0, 0, 0, 0.2) 0px -3px 0px inset`,
      },
      screens: {
        'max-2xl': { raw: '(min-width: 1200px) and (max-width: 1399px)' },
         // custom screen
         'min-l':{max:'1199px'}
      },
    },
  },
  plugins: [],
}

