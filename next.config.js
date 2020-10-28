const withFonts = require('next-fonts');
const withImages = require('next-images');
const withLess = require('@zeit/next-less');
const withPlugins = require('next-compose-plugins');

const nextConfig = {
  webpack: (config, options) => {

    config.module.rules.push({
      test: /\.(pdf)$/i,
      loader: 'file-loader',
      options: { publicPath: '/_next/static/', outputPath: 'static/' },
    })

    return config;
  },
};

module.exports = withPlugins([
  withFonts,
  withImages,
  withLess
], nextConfig);
