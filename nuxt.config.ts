export default defineNuxtConfig({
  css: [
    '~/assets/scss/tailwind.scss',
    '~/assets/scss/fonts.scss', '~/assets/scss/reusable.scss', '~/assets/scss/global.scss', 'viewerjs/dist/viewer.css'],
  ssr: true,

  modules: ['@nuxtjs/tailwindcss', '@nuxt/image-edge', 'nuxt-icon', '@nuxtjs/google-fonts'],

  googleFonts: {
    families: {
      Poppins: true,
      Almarai: true,
      Roboto: true,

    }
  },

  tailwindcss: {
    cssPath: '~/assets/scss/tailwind.scss',
  },


  vite: {
    define: {
      'process.env.DEBUG': false,

    },
  },
})
