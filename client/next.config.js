/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    ZEGO_APP_ID:"",
    ZEGO_SERVER_ID:"ZEGO_SERVER_ID"
  },
  images:{
    domains: ["localhost"],
  },
};

module.exports = nextConfig;
