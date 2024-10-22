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
      },
      {
        protocol: "https",
        hostname: "http.cat",
        port: "",
        pathname: "/**"
      }
    ]
  }
};

export default withNextIntl(nextConfig);
