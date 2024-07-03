import i18n from './config/i18n'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', '@nuxtjs/i18n'],

  shadcn: {
    prefix: '',
    componentDir: './components/ui',
  },

  i18n,
})
