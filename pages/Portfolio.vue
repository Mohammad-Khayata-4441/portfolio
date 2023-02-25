<template>
    <div class="page portfolio-page bg-primary bg-opacity-5">

        <div class="page-overlay  flex-grow-1 min-h-full"></div>
  
        <!-- <div class="page-overlay flex-grow-1"></div> -->


        <div class="container  md:max-w-screen-lg 2xl:max-w-screen-2xl px-4 mx-auto ">
            <PortfolioItem class="items-center"  data-aos-duration="1000" v-for="(item, i) in projects" :key="item.id" :item="item">
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
 

definePageMeta({
    layout: "default"
})
</script>