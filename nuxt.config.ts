export default defineNuxtConfig({
  css: ['~/assets/scss/fonts.scss', '~/assets/scss/reusable.scss', '~/assets/scss/global.scss'],
  ssr: true,
 
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image-edge', 'nuxt-icon', '@nuxtjs/google-fonts'],
  
  googleFonts: {
    families: {
      Poppins:true,
      Almarai:true,
      Roboto: true,
  
    }
  },
  
  vite: {
    define: {
      'process.env.DEBUG': false,

    },
  },
})
