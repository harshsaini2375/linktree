/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'avatars.githubusercontent.com',
      
            },
            {
              protocol: 'https',
              hostname: 'i.pinimg.com',
      
            },
            {
              protocol: 'https',
              hostname: 'th.bing.com',
      
            },
          ],
      },
};

export default nextConfig;
