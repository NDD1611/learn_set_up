/** @type {import('@lingui/conf').LinguiConfig} */
import { formatter } from '@lingui/format-json'
module.exports = {
    locales: ["vi", "en"],
    catalogs: [
        {
            path: "<rootDir>/src/locales/{locale}/messages",
            include: ["src"],
        },
    ],
    format: formatter({ style: 'minimal' }),
    pseudoLocale: "pseudo",
    sourceLocale: 'en'
};