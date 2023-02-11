export default defineNuxtConfig({
  css: ['~/assets/scss/fonts.scss', '~/assets/scss/reusable.scss', '~/assets/scss/global.scss'],
  ssr: false,
  app:{
    pageTransition: {
      name: 'page',
      mode: 'out-in' // default
    },
  },



  modules: ['@nuxtjs/tailwindcss', '@nuxt/image-edge'],

  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})
