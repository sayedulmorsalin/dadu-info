/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  
  // Disable image optimization since this is a static export
  images: {
    unoptimized: true,
  },

  // Environment
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || "https://dadubd.com",
  },
};

export default nextConfig;

