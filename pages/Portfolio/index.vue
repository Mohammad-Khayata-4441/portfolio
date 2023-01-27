<template>
    <div class="page portfolio-page bg-primary bg-opacity-5">

        <div class="page-overlay  flex-grow-1 min-h-full"></div>
        <div
            class="page-lights absolute top-0 h-full flex-grow-1 overflow-x-hidden">



        </div>
        <!-- <div class="page-overlay flex-grow-1"></div> -->


        <div class="container px-4 mx-auto">
            <PortfolioItem class="items-center"
                v-for="(item, i) in projects" :key="item.id" :item="item">
            </PortfolioItem>
        </div>
    </div>
</template>


<script setup lang="ts">
import type { PortfolioItem as Project } from '@/types/PortfolioItem'

import ProjectsList from '@/data/projects.json'



const projects = ref<Project[]>()

onMounted(() => {
    projects.value = ProjectsList as Project[]
})


definePageMeta({
    layout: "default"
})
</script>