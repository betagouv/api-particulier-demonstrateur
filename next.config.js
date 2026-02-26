const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin();

module.exports = withNextIntl({
  reactStrictMode: true,
  transpilePackages: ['@codegouvfr/react-dsfr'],
  images: { unoptimized: true },
  turbopack: {},
  webpack: (config) => {
    config.module.rules.push({
      test: /\.woff2$/,
      type: 'asset/resource',
    });
    return config;
  },
});
