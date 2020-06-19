import i18n from 'i18n-js';

import en from './locales/en.json';
import pt from './locales/pt.json';

i18n.defaultLocale = 'pt-BR';
i18n.locale = 'pt-BR';
i18n.fallbacks = true;
i18n.translations = { en, pt};

export default i18n;