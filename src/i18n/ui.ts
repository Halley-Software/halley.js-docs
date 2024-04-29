// from https://docs.astro.build/en/recipes/i18n/#translate-ui-strings

export const languages = {
  en: "English",
  es: "Español"
}

export const defaultLang = "en"

export const ui = {
  en: {
    "nav.docs": "Documentation",
    "nav.tutorial": "Tutorial",
    "nav.causes": "Causes"
  },

  es: {
    "nav.docs": "Documentación",
    "nav.tutorial": "Tutorial",
    "nav.causes": "Motivaciones"
  }
} as const