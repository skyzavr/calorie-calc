import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import ru from './locales/ru.json';

// eslint-disable-next-line @typescript-eslint/no-floating-promises
i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: { en: { en }, ru: { ru } },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
