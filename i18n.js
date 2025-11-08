const config = {
    locales: ['ua', 'ru', 'en'],
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
