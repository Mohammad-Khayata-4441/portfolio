import { defineNuxtConfig } from 'nuxt'
// import postcssRTLCSS from 'postcss-rtlcss'
// import tailwindCss from 'tailwindcss'
export default defineNuxtConfig({
  mode: 'universal', // changed from mode: 'spa'
  css: ['~/assets/scss/fonts.scss', '~/assets/scss/reusable.scss', '~/assets/scss/global.scss'],
  head: {
    htmlAttrs: {
      lang: 'ar',
      dir: "rtl"
    }
  },

  modules: ['@nuxtjs/tailwindcss', 'nuxtjs-mdi-font', '@nuxt/image-edge',],
  buildModules: ["@nuxtjs/svg", '@vueuse/nuxt'],

  router: {
    base: '/Summary'
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})
