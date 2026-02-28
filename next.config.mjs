/** @type {import('next').NextConfig} */
const nextConfig = {
  // This helps Next.js understand where your images are coming from
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  
  // This enables React strict mode to catch potential bugs during development
  reactStrictMode: true,
};

export default nextConfig;
