import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from '../assets/languages/en.json';
import vi from '../assets/languages/vi.json';

export const LanguageSource = {
  en: {
    translation: en,
  },
  vi: {
    translation: vi,
  },
};

i18next.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  resources: LanguageSource,
});

export default i18next;
