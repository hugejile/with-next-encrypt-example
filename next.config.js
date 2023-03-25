/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    withNextEncryptOption: 'des'
  }
}

module.exports = nextConfig
