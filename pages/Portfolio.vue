<template>
    <div class="page portfolio-page  bg-opacity-5">

        <div class="page-overlay  flex-grow-1 min-h-full"></div>



        <!-- <h2 class="text-center mt-12 text-2xl text-white">Web Applications & Landing Pages</h2> -->
        <div class="container  px-4 mx-auto space-y-12">
            <PortfolioItem v-memo class="items-center" @on-details="openGallery" data-aos-duration="1000"
                v-for="(item, i) in websites" :key="item.id" :item="item">
            </PortfolioItem>

        </div>

        <!-- <h2 class="text-center mt-12 text-2xl text-white">Packages and Templates</h2>
        <div class="container  px-4 mx-auto space-y-12">
            <PortfolioItem v-memo class="items-center " data-aos-duration="1000" v-for="(item, i) in packages"
                :key="item.id" :item="item">
            </PortfolioItem>


        </div> -->
    </div>
</template>


<script setup lang="ts">
import type { PortfolioItem as Project } from '@/types/PortfolioItem'
import ProjectsList from '~/data/projects'
import "aos/dist/aos.css";
import { api } from 'v-viewer'
const { vueApp } = useNuxtApp()
const projects = computed(() => ProjectsList.sort((a, b) => a.order > b.order ? 1 : -1))
const websites = computed(() => projects.value.filter(p => !p.type.includes('Package')))
const packages = computed(() => projects.value.filter(p => p.type.includes('Package')))



const openGallery = (images: string[]) => {
    console.log('open', images)

    api({
        images: images.map(url => `/projects/${url}`),
        options:{
            rotatable:false,
            fullscreen:true,
            
            toolbar:{
                next:true,
                prev:true,
                flipHorizontal:false,
                flipVertical:false,
                oneToOne:false,
                reset:false,
                rotateLeft:false,
                rotateRight:false,
                zoomOut:false,
                zoomIn:false
            }
        }
    })
}


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