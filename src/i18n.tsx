import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import de from 'assets/locales/de/translation.json'
import en from 'assets/locales/en/translation.json'
import fr from 'assets/locales/fr/translation.json'
import ru from 'assets/locales/ru/translation.json'

const languages = {
  en: {
    translation: en,
  },
  ru: {
    translation: ru,
  },
  de: {
    translation: de,
  },
  fr: {
    translation: fr,
  },
}

i18n.use(LanguageDetector).use(initReactI18next).init({
  debug: true,
  fallbackLng: 'en',
  resources: languages,
})

export default i18n
