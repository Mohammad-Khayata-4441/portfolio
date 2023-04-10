<template>
    <div class="page portfolio-page  bg-opacity-5">

        <div class="page-overlay  flex-grow-1 min-h-full"></div>
  
        <!-- <div class="page-overlay flex-grow-1"></div> -->


        <div class="container  md:max-w-screen-lg 2xl:max-w-screen-2xl px-4 mx-auto space-y-12">
            <PortfolioItem class="items-center "  data-aos-duration="1000" v-for="(item, i) in projects?.sort((a , b)=>a.order>b.order?1:-1)" :key="item.id" :item="item">
            </PortfolioItem>
        </div>
    </div>
</template>


<script setup lang="ts">
import type { PortfolioItem as Project } from '@/types/PortfolioItem'

import ProjectsList from '~/data/projects'


import "aos/dist/aos.css";
import AOS from "aos";
const projects = ref<Project[]>()
onMounted(() => {
    AOS.init();
    projects.value = ProjectsList as Project[]
})


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