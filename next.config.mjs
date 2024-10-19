import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "enka.network",
        port: "",
        pathname: "/ui/**"
      }
    ]
  }
};

export default withNextIntl(nextConfig);
