/** @type {import('next').NextConfig} */
const nextConfig = {
    
};

export default nextConfig;


module.exports = {
    async redirects() {
      return [
        {
          source: '/home',
          destination: '/',
          permanent: true,
        },
      ]
    },
  }