const config = {
    locales: ['en', 'ru', 'ua'],
    defaultLocale: 'en',
    pages: {
        '*': ['common', 'forms'],
        '/': ['home'],
        '/about_us': ['projects'],
        '/soft': ['soft', 'google-workspace'],
        '/buy-sketchup': ['buy-sketchup'],
        '/payment-success': ['forms'],
    },
}

module.exports = config
