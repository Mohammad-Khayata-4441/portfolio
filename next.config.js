const withNextIntl = require('next-intl/plugin')('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = withNextIntl({
    images: {
        remotePatterns: [
      
          {
            protocol: "http",
            hostname: "localhost",
          },
        ],
      },
})

module.exports = nextConfig
