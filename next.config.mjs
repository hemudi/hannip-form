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
  images: {
    remotePatterns: [
      {
        hostname: 'k.kakaocdn.net',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/proxy/login/:state/:code',
        destination: 'https://hannip-form-server.shop/users/auth/:state/callback?code=:code',
      },
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*`,
      },
    ];
  },
};

export default nextConfig;
