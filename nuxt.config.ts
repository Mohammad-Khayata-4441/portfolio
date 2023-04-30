export default defineNuxtConfig({
  css: ['~/assets/scss/fonts.scss', '~/assets/scss/reusable.scss', '~/assets/scss/global.scss'],
  ssr: true,
 
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image-edge', 'nuxt-icon', '@nuxtjs/google-fonts'],
  
  googleFonts: {
    families: {
      Almarai:true,
      Roboto: true,
      'Josefin+Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      },
    }
  },
  

  vite: {
    define: {
      'process.env.DEBUG': false,

    },
  },
})
