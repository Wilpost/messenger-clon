/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    swcPlugins: [['next-superjson-plugin', {}]]
  },
  images: {
    domains: [
      'res.cloudinary.com',
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/u/**'
      }
    ]
  }
}

export default nextConfig
