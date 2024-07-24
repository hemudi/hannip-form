import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        black: '#121212',
        error: '#FF2C20',
        kakao: '#FEE500',
        naver: '#03C75A',
        primary: {
          50: '#FEEFEF',
          100: '#FEDFDF',
          200: '#FDBEBE',
          300: '#FB9E9E',
          400: '#FA7D7D',
          500: '#F95D5D',
          600: '#D04B4B',
        },
        gray: {
          50: '#F6F6F6',
          100: '#EDEDED',
          200: '#DBDBDC',
          300: '#C9C9CA',
          400: '#B7B7B9',
          500: '#A5A5A7',
          600: '#888889',
          700: '#888889',
          800: '#888889',
          900: '#888889',
        },
      },
    },
  },
  plugins: [],
};
export default config;
