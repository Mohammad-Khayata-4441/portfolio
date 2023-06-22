export default defineNuxtConfig({
  css: [
    '~/assets/scss/tailwind.scss',
    '~/assets/scss/fonts.scss', '~/assets/scss/reusable.scss', '~/assets/scss/global.scss', 'viewerjs/dist/viewer.css'],
  ssr: true,



  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@nuxtjs/google-fonts', '@nuxt/image', 'nuxt-simple-sitemap' , '@nuxtjs/html-validator'],
  googleFonts: {
    families: {
      Poppins: true,
      Almarai: true,
      Roboto: true,
    }
  },
  sitemap: {
    siteUrl: 'https://mohammad-khayata.vercel.app/',
  },

  app: {
    head: {
      link: [
        {
          rel: 'icon',
          href: '/fav.png'
        },
        { rel: 'canonical', href: 'https://mohammad-khayata.vercel.app/about' }
      ],
      title: "Mohammad Khayata",
      meta: [
        {
          name: 'keywords',
          content: 'Mohammad Khayata,Mohammed,Mohammad-Khayatam ,Mohammed-Khayata,Mohammed_Khayata,Mohammad_Khayata,Khayat,mohamed, mohamed khayata, developer, react, frontend, vue, typescript, javascript, nuxt, next, nuxtj, nextjs ,vuejs, vue developer  '

        },
        {
          name: 'description',
          content: "3 Years + Of Experience In Frontend Development Using Vuejs , React and TypeScript"
        },
        {
          name: "og:image",
          content: "https://drive.google.com/uc?export=view&id=18jqK9Mv9h2utFVOSHs0hz46Fs7rP7hJ1"
        },
        { property: 'og:title', content: 'Mohammad Khayata' },
        { property: 'og:description', content: 'Frontend Web developer' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://www.linkedin.com/in/mohammad-khayata-9169801a9' },
        { property: 'og:locale', content: 'en_US' },
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
