/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env:{
    ZEGO_APP_ID:ZEGO_APP_ID,
    ZEGO_SERVER_ID:ZEGO_SERVER_ID
  },
  images:{
    domains: ["localhost"],
  },
};

module.exports = nextConfig;
