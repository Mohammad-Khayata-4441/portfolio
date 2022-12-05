export default defineNuxtConfig({
  css: ['~/assets/scss/fonts.scss', '~/assets/scss/reusable.scss', '~/assets/scss/global.scss'],
  ssr: false,
  head: {
    htmlAttrs: {
      lang: 'ar',
      dir: "rtl"
    }
  },



  modules: ['@nuxtjs/tailwindcss', '@nuxt/image-edge',],
  buildModules: ["@nuxtjs/svg", '@vueuse/nuxt'],

  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})
