<template>
  <div class="grid grid-cols-12 project py-12 md:py-10" v-if="item" :class="`work-item-${index}`">
    <div class="info col-span-12 lg:col-span-6 order-2 lg:order-1 flex flex-col justify-center px-4">
      <h2 class="text-5xl text-primary dark:text-white text-center lg:text-left lg:text-6xl font-bold">
        {{ item?.name }}
      </h2>

      <span class="mt-4 dark:text-gray-300 hidden lg:block">
        {{ item?.type.join(" & ") }}
      </span>

      <ReadMore class="dark:text-gray-300 text-center lg:text-left md:text-lg capitalize mt-8" :text="item?.description">
      </ReadMore>

      <p class="dark:text-gray-300 text-center lg:text-left md:text-lg capitalize mt-8" v-html="item?.workInformation">
      </p>

      <div class="tecnologies flex items-center my-6">
        <span class="dark:text-gray-300 hidden lg:block">Built With</span>
        <div class="flex mx-auto lg:mx-12 gap-12 items-center">
          <img class="tech-icon max-w-[65px] md:max-w-[100px]" v-for="img in item?.technologiesIcons" :src="iconUrl(img)" alt="" />
        </div>
      </div>
      <div class="flex items-center gap-4">
        <a :href="item.gitRepo" class="w-full lg:w-auto" v-if="item?.gitRepo">
          <button
            class="text-xl bg-black hover:bg-black/60 text-white rounded-lg w-full lg:w-48 py-4 px-4 my-4 transition-all"
            type="button">
            <icon class="text-white mr-2 text-2xl" name="codicon:github"></icon>
            Github
          </button>
        </a>
        <a :href="item?.url" v-if="item?.url"
          class="w-full text-center border px-4 hover:bg-primary hover:bg-opacity-20 text-primary border-primary rounded-lg lg:w-48 py-4 my-4 transition-all">
          Live Preview
          <icon class="text-2xl" name="tabler:external-link"></icon>
        </a>
        <span v-else-if="!item?.gitRepo" class="text-gray-400 text-sm">This Project is a Private Dashboard 😅</span>
      </div>
    </div>

    <div v-if="item?.screenShots && item.screenShots.length"
      class="image col-span-12 lg:col-span-6 order-1 lg:order-2 cursor-pointer" @click="$emit('onDetails')">
      <NuxtImg height="1080" width="1920" class="work-cover h-auto md:h-[400px] w-full object-contain lg:object-cover"
        preload quality="0.2" placeholder="https://placehold.co/750x400/161A29/546192?text=Loading..."
        v-if="item?.screenShots[0]" :src="useDriveResolver(item?.screenShots[0])"
        :class="`rounded-3xl border-4 border-seconadry dark:border-text shadow-lg `" />

      <span class="bg-primary text-white p-2 rounded-xl relative left-4 bottom-12">{{ item?.screenShots.length }}
        <icon name="clarity:image-gallery-solid" />
      </span>
    </div>




  </div>
</template>

<script lang="ts" setup>
import type { PortfolioItem } from "@/types/PortfolioItem";
import { PropType } from "vue";
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


const iconUrl = (icon: string) => `/icons/${icon}`



  defineEmits(['onDetails'])





const props = defineProps({
  item: Object as PropType<PortfolioItem>,
  index: Number
});




onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  if (process.client) {
    const selector = `.work-item-${props.index}`
    const element = document.querySelector(selector);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        toggleActions:"restart reverse restart reset"
      },
    })
    tl.from(`${selector}`, {
      opacity: 0,
      yPercent:15,
      duration: 0.5
    })
    tl.from(`${selector} .tech-icon`,{
      xPercent:100,
      opacity:0,
      stagger:0.15
    })


  }

})
</script>

<style lang="scss">
.project {
  min-height: calc(100vh - 112px);

  @media (max-width: 992px) {
    min-height: 100vh;
  }
}
</style>
