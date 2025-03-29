// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@unocss/nuxt', '@nuxt/fonts'],
  app: {
    head: {
      title: "Dummify",
      htmlAttrs: {
        lang: 'ja',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
      ]
    }
  },
  css: [
    '~/assets/styles/global.css'
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
})