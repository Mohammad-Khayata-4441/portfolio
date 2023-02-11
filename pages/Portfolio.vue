<template>
    <div class="page portfolio-page bg-primary bg-opacity-5">

        <div class="page-overlay  flex-grow-1 min-h-full"></div>
        <div class="page-lights absolute top-0 h-full flex-grow-1 overflow-x-hidden">

            <div class="page-lights absolute top-0 h-full flex-grow-1 overflow-x-hidden">
                <svg class="absolute blur-[200px] top-0 left-0" width="494" height="494" viewBox="0 0 494 494" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="247" cy="247" r="247" transform="matrix(1 0 0 -1 0 494)" fill="#26CDEB"
                        fill-opacity="0.77" />
                </svg>
                <svg class="absolute blur-[200px] top-[20%]  left-0" width="764" height="751" viewBox="0 0 764 751" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="501" cy="187.5" rx="501" ry="187.5"
                        transform="matrix(0.714449 0.699688 0.699688 -0.714449 -106.936 158.962)" fill="#FB1ADE80"
                        fill-opacity="0.77" />
                </svg>

                <svg class="absolute blur-[200px] top-[40%]  left-0" width="539" height="976" viewBox="0 0 539 976" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M426.68 559.425C547.323 293.214 574.779 45.529 488.005 6.20416C401.231 -33.1207 233.086 150.807 112.443 417.017C-8.19962 683.228 -35.6556 930.913 51.1186 970.238C137.893 1009.56 306.038 825.636 426.68 559.425Z"
                        fill="#577DFA" fill-opacity="0.77" />
                </svg>

                <svg class="absolute blur-[200px] top-[60%]  left-0" width="539" height="976" viewBox="0 0 539 976" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="269.141" cy="503.371" rx="269.141" ry="503.371"
                        transform="matrix(0.34508 -0.938573 -0.938573 -0.34508 861.584 733.625)" fill="#532061" />

                </svg>


                <svg class="absolute blur-[200px] top-[80%] left-0" width="644" height="644" viewBox="0 0 644 644" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="322" cy="322" r="322" fill="#7C99F990" />
                </svg>

                <svg class="absolute blur-[200px] bottom-0 left-48" width="494" height="494" viewBox="0 0 494 494" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="247" cy="247" r="247" transform="matrix(1 0 0 -1 0 494)" fill="#26CDEB"
                        fill-opacity="0.77" />
                </svg>

            </div>
            <div class="page-overlay "></div>

        </div>
        <!-- <div class="page-overlay flex-grow-1"></div> -->


        <div class="container  md:max-w-screen-lg 2xl:max-w-screen-2xl px-4 mx-auto ">
            <PortfolioItem class="items-center"  data-aos-duration="1000" v-for="(item, i) in projects" :key="item.id" :item="item">
            </PortfolioItem>
        </div>
    </div>
</template>


<script setup lang="ts">
import type { PortfolioItem as Project } from '@/types/PortfolioItem'

import ProjectsList from '@/data/projects.json'


import "aos/dist/aos.css";
import AOS from "aos";
const projects = ref<Project[]>()
onMounted(() => {

    AOS.init();
    projects.value = ProjectsList as Project[]
})
 

definePageMeta({
    layout: "default"
})
</script>