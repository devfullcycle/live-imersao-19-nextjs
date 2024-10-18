/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'localhost'
            }
        ]
    },
    experimental: {
        after: true
    }
};

export default nextConfig;
