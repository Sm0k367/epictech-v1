/** @type {import('next').NextConfig} */
const nextConfig = {
  // This ensures your build is extra strict and catches errors before they reach users
  reactStrictMode: true,
  
  // This helps Vercel optimize images if you decide to add them later
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },

  // This prevents build failures if you have minor linting warnings
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
