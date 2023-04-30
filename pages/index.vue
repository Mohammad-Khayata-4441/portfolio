<template>
  <div class="page home-page">


    <div ref="pageLights" class="page-lights absolute top-0 h-full">
      <svg class="bottom-left-light absolute blur-[200px] bottom-0 right-0 hidden md:block md:left-0 " width="494"
        height="309" viewBox="0 0 494 309" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle r="247" transform="matrix(1 0 0 -1 247 247)" fill="#436CFF" fill-opacity="0.77" />
      </svg>

      <svg class="light-top absolute blur-[200px] top-0  right-0 md:left-1/4" width="494" height="138"
        viewBox="0 0 494 138" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle r="247" transform="matrix(1 0 0 -1 247 -109)" fill="#AC43FF" fill-opacity="0.77" />
      </svg>

      <svg class="absolute blur-[200px] right-32 md:right-0" width="486" height="377" viewBox="0 0 486 377" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="243" cy="134" r="243" fill="#43D2FF" fill-opacity="0.42" />
      </svg>
    </div>

    <div class="page-overlay"></div>

    <main class="h-full">
      <div class="container  overflow-visible m-auto h-full">
        <div class="hero grid grid-cols-12 h-full items-end lg:items-center ">

          <article
            class="hero-text col-span-12 lg:col-span-7 self-center px-2 md:px-10 flex flex-col space-y-5 order-2 lg:order1 ">
            <h6 ref="hi" class="text-3xl hidden lg:block text-text dark:text-gray-300">
              Hey There , I'm</h6>
            <h2 ref="name"
              class="text-4xl text-center lg:text-left sm:text-5xl lg:text-6xl font-bold uppercase gradiant-heading">
              Mohammad Khayyata
            </h2>
            <p ref="text" class="text-md sm:text-xl text-center lg:text-left  text-text dark:text-white">
              FullStack JavaScript/TypeScript Developer <br class="md:hidden" />
              Specialist in Frontend Development With <span class="text-primary font-bold">3 Yars Of Experince </span> ,
              And Software Engineering Student
            </p>
            <div ref="group" class="btn-group flex space-x-4 m-auto lg:m-0">
              <NuxtLink to="/cv">
                <button class="bg-primary space-x-4 p-3 btn text-white rounded-lg px-6">
                  Resume
                  <Icon size="1.6rem" name="material-symbols:switch-account"></Icon>
                </button>
              </NuxtLink>
              <NuxtLink to="/portfolio"  class=" p-3 px-6 text-seconadry transition hover:bg-seconadry/5 rounded-lg btn flex items-center space-x-4 ">
                <span>

                  Portfolio
                </span>
             
                <icon size="1.6rem" name="bxs:collection" />

              </NuxtLink>
            </div>
          </article>
          <div class="col-span-12 lg:col-span-5 order-1 lg:order-2">


            <ClientOnly>

              <HeroSvg></HeroSvg>
            </ClientOnly>

          </div>
        </div>
      </div>
    </main>

  </div>
</template>
<script setup lang="ts">
import gsap from 'gsap'
const pageLights = ref<HTMLDivElement | null>(null)

const hi = ref<HTMLElement | null>(null)
const name = ref<HTMLElement | null>(null)
const text = ref<HTMLElement | null>(null)
const group = ref<HTMLElement | null>(null)
useHead({
  title: "Mohammad Khayata",
  meta: [
    {
      name: "description",
      content: "Mohammad Khayata . frontend web developer ,",

    },
    {
      name: "keywords",
      content: "JavaScript, TypeScript, Css, Html, Scss, Sass, Vue, Nuxt, Nuxt3, Vue.js, Nuxt.js, developer, mohammadKhayata, mohammad khayata,mohammed, mohammad, khayata, frontend, fullstack, glass, ui, lights, node, node.js, programmer, it,",

    },
  ]
})

definePageMeta({
  layout: 'default'
})

onMounted(() => {
  if (pageLights.value)
    gsap.from(pageLights.value?.querySelectorAll('svg'), {
      scale: 0,
      stagger: 0.8

    })

  const tl = gsap.timeline();
  tl.from(hi.value, { y: -1000, duration: 0.7, opacity: 0 })
    .from(name.value, { x: -1000, duration: 0.7, opacity: 0 })
    .from(text.value, { y: -50, duration: 0.7, opacity: 0 })
    .from(group.value, { y: -50, duration: 0.7, opacity: 0 })
})


</script>

<style lang="scss" >
.home-page {
  display: flex;
  align-items: center;
  justify-content: center;

}
</style>
