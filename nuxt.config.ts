// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@unocss/nuxt', '@nuxt/fonts'],
  app: {
    head: {
      title: "Dummify",
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'description', content: '🪟 Placeholder Generator Service' },
        { name: 'google-site-verification', content: 'Vh7jScbMBYTY7d2oBDu8v8e_g8_Z-V6_H-9ZwwP19kQ' }
      ],
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