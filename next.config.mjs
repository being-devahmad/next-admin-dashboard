/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'encrypted-tbn0.gstatic.com',
            },
            {
                protocol: 'https',
                hostname: 'www.befunky.com',
            },
            {
                protocol: 'https',
                hostname: "static3.webx.pk"
            }
        ],
    },
};

export default nextConfig;
