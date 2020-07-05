import i18n from '../Languages/i18n';

export const getLocal = (locale) => {
    return locale.split('').splice(0,2).join('').toUpperCase();
}

export const capitalizeString = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const displayInAnotherLanguage = (i) => {
    return i18n.t(`ponto.option_${i + 1}`)
}