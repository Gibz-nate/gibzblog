import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "lh3.googleusercontent.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "webandcrafts.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "cdn.the-scientist.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "quotesbae.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "images.theconversation.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "images.unsplash.com",
        protocol: "https",
        port: "",
      },
      
    ]
  }
};

export default nextConfig;
