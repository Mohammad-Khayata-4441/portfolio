<template>
  <div class="page home-page">



    <LightsGenerator></LightsGenerator>

    <div class="page-overlay"></div>

    <main class="h-full">
      <div class="container  overflow-visible m-auto h-full">
        <div class="hero grid grid-cols-12 h-full items-end lg:items-center ">

          <article
            class="hero-text col-span-12 lg:col-span-7 self-center px-2 md:px-10 flex flex-col space-y-5 order-2 lg:order1 ">
            <p ref="hi" class="text-3xl hidden lg:block text-text dark:text-gray-300">
              Hey There , I'm</p>
            <h1 ref="name"
              class="text-4xl text-center lg:text-left sm:text-5xl lg:text-6xl font-bold capitalize gradiant-heading">
              Mohammad Khayata
            </h1>
            <h2 ref="text" class="text-md sm:text-xl text-center lg:text-left  text-text dark:text-white">
              FullStack JavaScript/TypeScript Developer <br class="md:hidden" />
              Specialist in Frontend Development With <span class="text-primary font-bold">3 Years Of Experince </span> ,
              And I'm a Software Engineering Student
            </h2>
            <div ref="group" class="btn-group flex space-x-4 m-auto lg:m-0">

              <a class="bg-primary space-x-4 p-3 btn text-white rounded-lg px-6" target="_blank"
                href=" https://docs.google.com/document/d/1sYRpK8tcoPdnADpcVO6mrJc3Gz3W6WGmkhvZEGo05vI/edit?usp=sharing">

                Resume
                <Icon size="1.6rem" name="material-symbols:switch-account"></Icon>
              </a>


              <NuxtLink to="/portfolio"
                class=" p-3 px-6 text-seconadry transition hover:bg-seconadry/5 rounded-lg btn flex items-center space-x-4 ">
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


const downloadResume = () => {
  fetch('/public/Cv.txt').then(res => {
    res.blob()
  }).then(data => console.log(data))
}

</script>

<style lang="scss" >
.home-page {
  display: flex;
  align-items: center;
  justify-content: center;

}
</style>
