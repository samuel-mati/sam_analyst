/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  swcMinify: false,
  experimental: {
    forceSwcTransforms: false,
  }
}

export default nextConfig 