/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  async rewrites() {
    return [
      {
        source: '/auth/kakao/login',
        destination: `${process.env.NEXT_PUBLIC_API_URL}/auth/kakao/login`,
      },
    ];
  },
};

export default nextConfig;
