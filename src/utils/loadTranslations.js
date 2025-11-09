/**
 * Load specific translation namespaces for a given locale at build time
 * @param {string} locale - The locale to load translations for
 * @param {string[]} namespaces - Array of namespace names to load (e.g., ['common', 'forms'])
 * @returns {object} Object containing only the requested translation namespaces
 */
function loadTranslations(locale, namespaces = null) {
    // Normalize locale (uk-UA -> ua)
    const normalizedLocale = locale === 'uk-UA' ? 'ua' : locale

    // If no namespaces specified, load all (backward compatibility)
    const allNamespaces = [
        'soft',
        'common',
        'facades',
        'about',
        'forms',
        'home',
        'buy-sketchup',
        'projects',
        'google-workspace',
        'legal',
    ]

    const namespacesToLoad = namespaces || allNamespaces

    try {
        const translations = {}

        for (const namespace of namespacesToLoad) {
            try {
                // Convert namespace name to file name (e.g., 'buy-sketchup' -> 'buy-sketchup.json')
                const fileName = `${namespace}.json`
                translations[namespace] = require(`../../locales/${normalizedLocale}/${fileName}`)
            } catch (error) {
                console.warn(
                    `Warning: Could not load namespace '${namespace}' for locale '${normalizedLocale}'`
                )
            }
        }

        return translations
    } catch (error) {
        console.error(`Failed to load translations for locale: ${locale}`, error)
        // Fallback to English if locale not found
        if (normalizedLocale !== 'en') {
            return loadTranslations('en', namespaces)
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
