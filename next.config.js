const withFonts = require('next-fonts')
const withImages = require('next-images')
const withLess = require('@zeit/next-less')
const withPlugins = require('next-compose-plugins')

require('dotenv').config()

const nextConfig = {
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.(pdf)$/i,
            loader: 'file-loader',
            options: { publicPath: '/_next/static/', outputPath: 'static/' },
        })

        if (!options.isServer) {
            config.node = {
                fs: 'empty',
            }
        }

        return config
    },
    env: {
        CURCONV_API_KEY: process.env.CURCONV_API_KEY,
        LIQPAY_PRIVATE_KEY: process.env.LIQPAY_PRIVATE_KEY,
        LIQPAY_PUBLIC_KEY: process.env.LIQPAY_PUBLIC_KEY,
        HOST: process.env.HOST,
        SENDGRID_URL: process.env.SENDGRID_URL,
    },
}

module.exports = withPlugins([withFonts, withImages, withLess], nextConfig)
