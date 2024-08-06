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
        h1: '2.375rem', // 38px
        h2: '1.875rem', // 30px
        h3: '1.5rem', // 24px
        h4: '1.25rem', // 20px
        body1: '1rem', // 16px
        body2: '0.875rem', // 14px
        footnote: '0.75rem', // 12px
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
      spacing: {
        15: '3.75rem', // 60px
        17: '4.375rem', // 70px
        42: '10.5rem', // 168px
        43: '10.938rem', // 175px
        47: '11.875rem', // 190px
        89: '22.375rem', // 358px
        97: '24.375rem', // 390px
      },
      backgroundImage: {
        script: 'url(/assets/images/background.png)',
      },
      boxShadow: {
        around: '0 0 25px 0 #0000001A',
        bubble: '0 4px 20px 0 #0000001A',
      },
      animation: {
        loading: 'loading-bounce 2s infinite',
        'bounce-slow': 'bounce 1.5s infinite',
        'toast-enter': 'toast-enter 0.3s ease-in-out forwards',
        'toast-exit': 'toast-exit 0.3s ease-in-out forwards',
      },
      keyframes: {
        'loading-bounce': {
          '0%, 100%': {
            transform: 'translateY(-10%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
        'toast-enter': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'toast-exit': {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(20px)' },
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};

export default config;
