import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'; // Импортируем детектор языка

// Импортируем файлы переводов
import translationEN from './locales/en/translation.json';
import translationRU from './locales/ru/translation.json';
import translationKK from './locales/kk/translation.json';

// Конфигурация переводов (ресурсы)
const resources = {
  en: {
    translation: translationEN
  },
  ru: {
    translation: translationRU
  },
    kk: {
    translation: translationKK
  }
};

i18n
  .use(LanguageDetector) // Используем детектор языка
  .use(initReactI18next) // Передаем экземпляр i18n в react-i18next
  .init({
    resources, // Ресурсы переводов
    // lng: 'ru', // Убираем lng, чтобы детектор языка мог определить его
    fallbackLng: 'ru', // Язык, который будет использоваться, если для текущего языка нет перевода

    detection: {
      order: ['queryString', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage', 'cookie'], // Порядок, в котором детектор будет искать язык
    },

    interpolation: {
      escapeValue: false // React уже защищает от XSS
    }
  });

export default i18n;