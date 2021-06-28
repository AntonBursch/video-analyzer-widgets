export const SupportedLocaleLanguages = {
    en: 'en',
    'en-us': 'en',
    en_us: 'en',
    'en-au': 'en',
    en_au: 'en',
    'en-ca': 'en',
    en_ca: 'en',
    'en-nz': 'en',
    en_nz: 'en',
    'en-ph': 'en',
    en_ph: 'en',
    'en-uk': 'en',
    en_uk: 'en',
    de_de: 'de',
    'de-de': 'de',
    de: 'de',
    'zh-hans': 'zh',
    zh_hans: 'zh',
    'zh-cn': 'zh',
    zh_cn: 'zh',
    zh: 'zh',
    'fr-fr': 'fr',
    fr_fr: 'fr',
    fr: 'fr',
    'fr-ca': 'fr',
    fr_ca: 'fr',
    'tr-tr': 'tr',
    tr_tr: 'tr',
    tr: 'tr',
    'ja-jp': 'ja',
    ja_jp: 'ja',
    ja: 'ja',
    'hi-in': 'hi',
    hi_in: 'hi',
    hi: 'hi',
    ru: 'ru',
    ru_ru: 'ru',
    'ru-ru': 'ru',
    es: 'es',
    es_es: 'es',
    'es-es': 'es',
    it: 'it',
    it_it: 'it',
    'it-it': 'it',
    pt: 'pt',
    pt_br: 'pt',
    'pt-br': 'pt',
    ko: 'ko',
    ko_kr: 'ko',
    'ko-kr': 'ko',
    'nl-nl': 'nl',
    'nl': 'nl',
    'cs-cz': 'cs',
    'cs': 'cs',
    'pl-pl': 'pl',
    'pl': 'pl',
    'sv-se': 'sv',
    'sv': 'sv',
    'hu-hu': 'hu',
    'hu': 'hu'
};

export const DEFAULT_LOCALE_LANGUAGE = 'en';

export const SUPPORTED_LOCALES: string[] = [
    'cs',
    'de',
    'en'
    /* 'es',
    'fr',
    'hu',
    'id',
    'it',
    'ja',
    'ko',
    'nl',
    'pl',
    'pt-BR',
    'pt-PT',
    'ru',
    'sv',
    'tr',
    'zh-Hans',
    'zh-Hant' */
];

export type IComponentsType = 'common' | 'player' | 'zone-drawer';

export interface IDictionary {
    [key: string]: string;
};
