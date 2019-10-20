import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from './strings_en';
import cnTranslation from './strings_cn';
import esTranslation from './strings_es';
import frTranslation from './strings_fr';
import ptTranslation from './strings_pt';
import ruTranslation from './strings_ru';

i18n
  .use(LanguageDetector);

var i18nOptions = {
  fallbackLng: 'en',
  resources: {
    "en": {
      translation: enTranslation
    },
    "cn": {
      translation: cnTranslation
    },
    "es": {
      translation: esTranslation
    },
    "fr": {
      translation: frTranslation
    },
    "pt": {
      translation: ptTranslation
    },
    "ru": {
      translation: ruTranslation
    }
  }
};

export {i18nOptions};
export default i18n;
