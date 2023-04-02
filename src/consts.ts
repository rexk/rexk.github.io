// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

interface StringObj { 
    [key: string]: string
}

export const SUPPORTED_LANGUAGES = [
    'en',
    'ko',
];

export const KNOWN_LANGUAGES: StringObj = {
    en: 'en-us',
    ko: 'ko-KR',
}

export const KNOWN_LOCALIZED_LANGS: StringObj = {
    en: 'English',
    ko: '한국어',
}
