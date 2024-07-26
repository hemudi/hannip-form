import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['Pretendard'],
      },
      fontSize: {
        h1: '2.375rem',
        h2: '1.875rem',
        h3: '1.5rem',
        h4: '1.25rem',
        body1: '1rem',
        body2: '0.875rem',
        footnote: '0.75rem',
      },
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
          700: '#6A6A6B',
          800: '#4D4D4E',
          900: '#2F2F30',
        },
      },
      width: {
        43: '10.938rem',
        89: '22.375rem',
        97: '24.375rem',
      },
      height: {
        47: '11.875rem',
      },
      spacing: {
        97: '24.375rem',
      },
    },
  },
  plugins: [],
};

export default config;
