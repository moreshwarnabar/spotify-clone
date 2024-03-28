/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tlfrieiujijroeecbdot.supabase.co',
        port: '',
      },
    ],
  },
};

export default nextConfig;
