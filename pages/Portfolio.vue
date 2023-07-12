<template>
    <div class="page portfolio-page  bg-opacity-5">

 
        <LightsGenerator></LightsGenerator>
        <div class="page-overlay  flex-grow-1 min-h-full"></div>



        <div class="xl:container px-4 mx-auto space-y-12">
            <PortfolioItem @on-details="setPreveiwScreenShots(item.screenShots)" v-memo class="items-center"
                data-aos-duration="1000" v-for="(item, i) in websites" :index="i" :key="item.id" :item="item">
            </PortfolioItem>

        </div>



        <Transition name="showGallery" @enter="onEnter" @leave="onLeave">
            <div v-if="showGallery" :class="{ 'bg-black bg-opacity-80': showGallery }"
                class="gallery flex items-center justify-center h-screen w-screen z-20 transition fixed top-0 left-0">
                <button class="absolute right-10 top-10 z-40" @click="closeGallery">
                    <icon class="text-5xl text-gray-300" name="solar:close-circle-linear" />
                </button>
                <Swiper ref="swiper" wrapper-class="items-center">
                    <SwiperSlide v-for="screen in screenShots" :key="screen" class="flex justify-center">
                        <NuxtImg height="2160" width="3840"
                            class="h-full w-auto mx-auto" preload
                            quality="0.2" placeholder="https://placehold.co/750x400/161A29/546192?text=Loading..."
                              :src="useDriveResolver(screen)"
                              />
                    </SwiperSlide>
                </Swiper>
            </div>
        </Transition>
    </div>
</template>


<script setup lang="ts">
import ProjectsList from '~/data/projects'
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from 'swiper/vue'
import "swiper/css";
import gsap from 'gsap'

const swiper = ref(null);

const showGallery = ref(false);

const screenShots = ref<string[]>([])
import {
    onClickOutside,
} from "@vueuse/core";

const setPreveiwScreenShots = (e: string[]) => {
    showGallery.value = true;
    document.documentElement.requestFullscreen();
    screenShots.value = e
}

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


const onLeave = (el: any, done: any) => {

    gsap.to(el.querySelector(".swiper"), {
        opacity: 0,
        duration: 0.4,
        scale: 0,
        onComplete: () => {
            done();
        },
    });
};
function closeGallery() {
    showGallery.value = false;
    if (process.client) {
        document.exitFullscreen();
    }
}


const projects = computed(() => ProjectsList)
const websites = computed(() => projects.value.filter(p => !p.type.includes('Package')))
const packages = computed(() => projects.value.filter(p => p.type.includes('Package')))

const bodyClass = computed(() =>
    showGallery.value ? "overflow-hidden" : "overflow-auto"
);



useHead({
    htmlAttrs: {
        class: bodyClass,
    },
});
// const openGallery = (images: string[]) => {
//     console.log('open', images)
//     viewer({
//         images: images.map(url => useDriveResolver(url)),
//         options: {
//             rotatable: false,
//             fullscreen: true,

//             toolbar: {
//                 next: true,
//                 prev: true,
//                 flipHorizontal: false,
//                 flipVertical: false,
//                 oneToOne: false,
//                 reset: false,
//                 rotateLeft: false,
//                 rotateRight: false,
//                 zoomOut: false,
//                 zoomIn: false
//             }
//         }
//     })
// }


useHead({
    title: "Portfolio",
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
    layout: "default"
})
</script>