const withFonts = require('next-fonts')

require('dotenv').config()

const plugins = [withFonts]

const nextConfig = () =>
    plugins.reduce((acc, next) => next(acc), {
        webpack: config => {
            config.module.rules.push({
                test: /\.(|mp4|pdf|webm)$/,
                type: 'asset',
                generator: {
                    filename: 'static/chunks/[path][name].[hash][ext]',
                },
            })

            return config
        },
        env: {
            CURCONV_API_KEY: process.env.CURCONV_API_KEY,
            LIQPAY_PRIVATE_KEY: process.env.LIQPAY_PRIVATE_KEY,
            LIQPAY_PUBLIC_KEY: process.env.LIQPAY_PUBLIC_KEY,
            HOST: process.env.HOST,
            SENDGRID_URL: process.env.SENDGRID_URL,
        },
        eslint: {
            // Warning: This allows production builds to successfully complete even if
            // your project has ESLint errors.
            ignoreDuringBuilds: true,
        },
        i18n: {
            locales: ['en', 'ru', 'uk-UA'],
            defaultLocale: 'en',
            localeDetection: true,
        },
    })

module.exports = nextConfig
