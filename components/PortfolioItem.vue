<template>
  <div class="grid grid-cols-12 project py-12 md:py-10">
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
          <img class="max-w-[65px] md:max-w-[100px]" v-for="img in item?.technologiesIcons" :src="iconUrl(img)" alt="" />
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

    <div v-if="item?.screenShots" class="image col-span-12 lg:col-span-6 order-1 lg:order-2 cursor-pointer"
      @click="openGallery(item.screenShots)">
      <!-- <NuxtImg height="400" width="750" class="h-[400px] w-full object-contain lg:object-cover" preload
        placeholder="https://placehold.co/750x400/161A29/546192?text=Loading..."
        :style="{ boxShadow: getBoxShadow(item.primaryColor) }" v-if="item?.screenShots[0]"
        :src="url(item?.screenShots[0])" :class="`rounded-3xl border-4 border-seconadry dark:border-text shadow-lg `" /> -->
      <img height="400" width="750" class="h-[400px] w-full object-contain lg:object-cover" preload
        placeholder="https://placehold.co/750x400/161A29/546192?text=Loading..."
        :style="{ boxShadow: getBoxShadow(item.primaryColor) }" v-if="item?.screenShots[0]"
        :src="url(item?.screenShots[0])" :class="`rounded-3xl border-4 border-seconadry dark:border-text shadow-lg `" />
      <span class="bg-primary text-white p-2 rounded-xl relative left-4 bottom-12">{{ item?.screenShots.length }}
        <icon name="clarity:image-gallery-solid" />
      </span>
    </div>

    <!-- <Transition name="showGallery" @enter="onEnter" @leave="onLeave">
      <div
        v-if="showGallery"
        :class="{ 'bg-black bg-opacity-80': showGallery }"
        class="gallery flex items-center justify-center h-screen w-screen z-20 transition fixed top-0 left-0"
      >
        <button class="absolute right-10 top-10 z-40" @click="closeGallery">
          <icon class="text-5xl text-white" name="solar:close-circle-linear" />
        </button>
        <Swiper ref="swiper" wrapper-class="items-center">
          <SwiperSlide
            v-for="screen in item?.screenShots"
            :key="screen"
            class=""
          >
            <NuxtImg
              :src="url(screen)"
              height="1080"
              width="1920"
              class="w-[90vw] max-h-[90vh] mx-auto object-contain"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </Transition> -->


  </div>
</template>

<script lang="ts" setup>
import type { PortfolioItem } from "@/types/PortfolioItem";
import { PropType } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import {
  breakpointsTailwind,
  onClickOutside,
  useBreakpoints,
} from "@vueuse/core";
import gsap from "gsap";
import "swiper/css";
const showGallery = ref(false);
const swiper = ref(null);

const url = (imageName: string) => `/projects/${imageName}`
const iconUrl = (icon: string) => `/icons/${icon}`
const { isSmaller } = useBreakpoints(breakpointsTailwind);

const bodyClass = computed(() =>
  showGallery.value ? "overflow-hidden" : "overflow-auto"
);


const emit = defineEmits(['onDetails'])

const onLeave = (el: any, done: any) => {
  console.log("on leave");

  gsap.to(el.querySelector(".swiper"), {
    opacity: 0,
    duration: 0.4,
    scale: 0,
    onComplete: () => {
      done();
    },
  });
};
onClickOutside(swiper.value, () => {
  showGallery.value = false;
});

const onEnter = (el: any, done: any) => {
  gsap.from(el.querySelector(".swiper"), {
    opacity: 0,
    duration: 0.4,
    scale: 0,
    onComplete: () => {
      done();
    },
  });
};

function getBoxShadow(color: string) {
  return isSmaller("md")
    ? `0 20px 400px -50px ${color}`
    : `0 20px 400px -75px ${color}`;
}

function openGallery(items: string[]) {
  emit('onDetails', items)
  if (process.client) {

    // document.documentElement.requestFullscreen();
    // showGallery.value = true;

  }
}

// function closeGallery() {
//   if (process.client) {
//     document.exitFullscreen();
//     showGallery.value = false;
//   }
// }

defineProps({
  item: Object as PropType<PortfolioItem>,
});

useHead({
  htmlAttrs: {
    class: bodyClass,
  },
});
</script>

<style lang="scss">
.project {
  min-height: calc(100vh - 112px);

  @media (max-width: 992px) {
    min-height: 100vh;
  }
}
</style>
