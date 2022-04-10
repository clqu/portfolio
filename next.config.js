/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: () => [
    {
      source: '/talk',
      destination: 'https://discord.gg/PFnafbxd5u',
      permanent: true
    }
  ]
}

module.exports = nextConfig
