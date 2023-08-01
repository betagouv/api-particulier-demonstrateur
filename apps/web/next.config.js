module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['ui', '@codegouvfr/react-dsfr'],
  experimental: {
    appDir: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.woff2$/,
      type: 'asset/resource',
    });
    return config;
  },
  eslint: {
    dirs: ['.'],
  },
};
