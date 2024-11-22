import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: '2rem',
      center: true,
    },
    extend: {
      backgroundImage: {
        hero: "linear-gradient(151.17deg, rgba(38, 194, 185, 0.9) 8.69%, rgba(40, 139, 231, 0.9) 126.06%), url('/images/background.png')",
      },
      colors: {
        // background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        pop: ['var(--font-poppin)'],
      },
    },
  },
  plugins: [],
} satisfies Config;
