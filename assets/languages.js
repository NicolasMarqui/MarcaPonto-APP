import i18n from '../src/Languages/i18n';

console.log('from settigs ' + i18n.currentLocale())

const LanguageList = [
    {
        "id": 1,
        "name": i18n.t('languages.pt'),
        "code": "BR",
        "toVerify": 'PT',
    },
    {
        "id": 2,
        "name": i18n.t('languages.en'),
        "code": "US",
        "toVerify": 'EN'
    },
    {
        "id": 3,
        "name": i18n.t('languages.fr'),
        "code": "FR",
        "toVerify": 'FR'
    },
    {
        "id": 4,
        "name": i18n.t('languages.ger'),
        "code": "DE",
        "toVerify": 'DE'
    },
    {
        "id": 5,
        "name": i18n.t('languages.esp'),
        "code": "MX",
        "toVerify": 'ES' 
    }
]

export default LanguageList;