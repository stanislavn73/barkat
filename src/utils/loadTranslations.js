/**
 * Load all translations for a given locale at build time
 * This replaces the client-side API call to /api/translations
 */
function loadTranslations(locale) {
    // Normalize locale (uk-UA -> ua)
    const normalizedLocale = locale === 'uk-UA' ? 'ua' : locale

    try {
        const soft = require(`../../locales/${normalizedLocale}/soft.json`)
        const common = require(`../../locales/${normalizedLocale}/common.json`)
        const facades = require(`../../locales/${normalizedLocale}/facades.json`)
        const about = require(`../../locales/${normalizedLocale}/about.json`)
        const forms = require(`../../locales/${normalizedLocale}/forms.json`)
        const home = require(`../../locales/${normalizedLocale}/home.json`)
        const buySketchup = require(`../../locales/${normalizedLocale}/buy-sketchup.json`)
        const projects = require(`../../locales/${normalizedLocale}/projects.json`)
        const googleWorkspace = require(`../../locales/${normalizedLocale}/google-workspace.json`)
        const legal = require(`../../locales/${normalizedLocale}/legal.json`)

        return {
            soft,
            common,
            facades,
            about,
            forms,
            home,
            'buy-sketchup': buySketchup,
            projects,
            'google-workspace': googleWorkspace,
            legal,
        }
    } catch (error) {
        console.error(`Failed to load translations for locale: ${locale}`, error)
        // Fallback to English if locale not found
        if (normalizedLocale !== 'en') {
            return loadTranslations('en')
        }
        throw error
    }
}

/**
 * Load translations for all supported locales
 * Useful for static generation
 */
function loadAllTranslations() {
    return {
        en: loadTranslations('en'),
        ru: loadTranslations('ru'),
        ua: loadTranslations('ua'),
    }
}

module.exports = {
    loadTranslations,
    loadAllTranslations,
}
