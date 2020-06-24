export const getLocal = (locale) => {
    return locale.split('').splice(0,2).join('').toUpperCase();
}