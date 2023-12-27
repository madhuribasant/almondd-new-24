import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        gt:['var(--font-gt)'],
        playfair: ['var(--font-pf)']
      },

      colors: {
        "redpink": "#EC7671",
        "darkpink": "#401714",
        "lightred": "#FF213A",
        "darkgreen": "#15392B",
        "lightpink": "#FFD4F1",
        "brown": "#380306",
        "yellow":"#f3c77c",
        "violet":"#2A0830",
        "goldyellow":"#FFBC89",
        "lightyellow":"#FFEA4A",
        "coralgreen":"#B7E2EF",
        "lightblack":"#1C1C1C"
      }
    },


  },
  plugins: [],
}
export default config
