import i18n from 'i18n-js';
import { MainProvider } from '../Contexts/MainContext';

import en from './locales/en.json';
import pt from './locales/pt.json';

i18n.defaultLocale = 'pt-BR';
i18n.locale = 'en-US';
i18n.fallbacks = true;
i18n.translations = { en, pt};

export default i18n;