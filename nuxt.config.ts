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

  app: {
    head: {
      title: "Mohammad Khayata",
      meta: [
        {
          name:'keywords',
          content:'Mohammad Khayata, developer, react, frontend, vue, typescript, javascript  '

        },
        {
          name: 'description',
          content:"3 Yars + Forntent Web Developer Using Vuejs , React and TypeScript"
        }
      ],
      htmlAttrs: {
        class: 'dark'
      }
    },

    // pageTransition: {
    //   name: 'page',
    //   mode: 'out-in' // default
    // },

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
