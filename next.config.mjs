/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return {
      beforeFiles: [
        { source: '/odds-calculator', destination: '/odds-calculator.html' },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
