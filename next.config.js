/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  reactStrictMode: true,
  images: {
    domains: [
      "yt3.ggpht.com",
      "lh3.googleusercontent.com",
      "images.unsplash.com",
      "scontent-lax3-1.xx.fbcdn.net",
      "images.immediate.co.uk",
    ],
  },
};

module.exports = nextConfig;
