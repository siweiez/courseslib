/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "localhost:1337",
      "localhost",
      "courseslib-backend.herokuapp.com",
    ],
  },
};

module.exports = nextConfig;
