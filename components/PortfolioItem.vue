<template>
    <div class="grid grid-cols-12 project py-12 md:py-10">
        <div class="info col-span-12  lg:col-span-6 order-2 lg:order-1 flex flex-col justify-center px-4">


            <h2 class="text-5xl text-primary dark:text-white text-center lg:text-left lg:text-6xl font-bold"
                > {{ item?.name }}
            </h2>

            <span class="mt-4 dark:text-gray-300  hidden lg:block ">
                {{ item?.type.join(" & ") }}
            </span>



            <ReadMore class="dark:text-gray-300 text-center lg:text-left md:text-lg capitalize mt-8"
                :text="item?.description"></ReadMore>

            <p class="dark:text-gray-300 text-center lg:text-left md:text-lg capitalize mt-8" v-html="item?.workInformation">
            </p>

            <div class="tecnologies flex items-center my-6">
                <span class="dark:text-gray-300  hidden lg:block">Built With</span>
                <div class="flex mx-auto lg:mx-12 gap-12 items-center  ">
                    <img class="max-w-[85px] md:max-w-[150px]" v-for="img in item?.technologiesIcons" :src="img" alt="">
                </div>

            </div>
            <div class="flex items-center gap-4">
                <a :href="item.gitRepo" class="w-full lg:w-auto" v-if="item?.gitRepo">
                    <button
                        class="text-xl  bg-black hover:bg-black/60 text-white rounded-2xl w-full lg:w-48 py-4 px-4 my-4 transition-all"
                        type="button">
                        <f-icon class="text-white mr-2 text-2xl" icon="fab fa-github"></f-icon>
                        Github
                    </button>
                </a>
                <a :href="item?.url" class="w-full lg:w-auto">
                    <button
                        class=" border px-4 hover:bg-primary hover:bg-opacity-20 text-primary border-primary rounded-2xl w-full lg:w-48 py-4 my-4 transition-all"
                        type="button">
                        Live Preview <f-icon icon="arrow-right"></f-icon>
                    </button>
                </a>
            </div>

        </div>

        <div class="image col-span-12 lg:col-span-6 order-1 lg:order-2 cursor-pointer" @click="openGallery">
            <img :style="{ boxShadow: `0 0 300px -100px ${item?.primaryColor}` }" :src="item?.screenShots[0]"
                :class="`rounded-3xl border-4 border-seconadry dark:border-text shadow-lg `">
            <span class="bg-primary text-white p-2 rounded-xl relative left-4 bottom-12">{{item?.screenShots.length}} <f-icon icon="fas fa-image" /></span>
        </div>

        <Transition name="showGallery" @enter="onEnter" @leave="onLeave">
            <div v-if="showGallery" :class="{ 'bg-black bg-opacity-75': showGallery }"
                class="gallery  flex items-center justify-center h-screen w-screen z-20 transition fixed top-0 left-0  ">

                <button class="absolute right-10 top-10 z-40 " @click="closeGallery"><f-icon class="text-4xl"
                        icon="fas fa-close" /></button>
                <Swiper ref="swiper">
                    <SwiperSlide v-for="screen in item?.screenShots" :key="screen" class="">
                        <img :src="screen" class="w-[90vw] max-h-[90vh] mx-auto" alt="">
                    </SwiperSlide>
                </Swiper>
            </div>
        </Transition>

    </div>
</template>

<script lang="ts" setup>
import type { PortfolioItem } from '@/types/PortfolioItem';
import { PropType } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue'
import { onClickOutside } from '@vueuse/core'
import gsap from 'gsap'
import 'swiper/css';
const showGallery = ref(false)
const swiper = ref(null)

const bodyClass = computed(() => showGallery.value ? 'overflow-hidden' : 'overflow-auto')

const onLeave = (el: any, done: any) => {
    console.log('on leave');

    gsap.to(el.querySelector('.swiper'), { opacity: 0, duration: 0.4, scale: 0, onComplete: () => { done() } })
}
onClickOutside(swiper.value, () => { showGallery.value  = false})

const onEnter = (el: any, done: any) => {
    console.log('on enter');

    gsap.from(el.querySelector('.swiper'), { opacity: 0, duration: 0.4, scale: 0, onComplete: () => { done() } })

}

function openGallery(){
    if(process.client){
        document.documentElement.requestFullscreen();
        showGallery.value = true
    }
}

function closeGallery(){
    if(process.client){
        document.exitFullscreen();
        showGallery.value = false
    }

}

defineProps({
    item: Object as PropType<PortfolioItem>
})





useHead({
    htmlAttrs: {
        class: bodyClass
    }
})

</script>

<style lang="scss">
.project {
    min-height: calc(100vh - 112px);

    @media (max-width:992px) {
        min-height: 100vh;
    }
}
</style>
