import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.cache = false; // Desactiva el caché de Webpack
    return config;
  },
};

module.exports = nextConfig;