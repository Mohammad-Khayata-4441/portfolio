export default defineNuxtConfig({
  css: ['~/assets/scss/fonts.scss', '~/assets/scss/reusable.scss', '~/assets/scss/global.scss'],
  ssr: true,
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in' // default
    },
  },


  modules: ['@nuxtjs/tailwindcss', '@nuxt/image-edge' , 'nuxt-icon'],

  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})
