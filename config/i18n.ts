import type { NuxtConfig } from 'nuxt/config'

const i18n: NuxtConfig['i18n'] = {
  locales: [
    {
      code: 'zh-tw',
      name: '繁體中文',
      files: ['zh-tw.json'],
    },
    {
      code: 'en',
      name: 'English',
      files: ['en.json'],
    },
  ],
  langDir: 'locales',
  strategy: 'prefix_except_default',
  defaultLocale: 'zh-tw',
}

export default i18n
