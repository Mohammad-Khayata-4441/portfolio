<template>
    <div class="page portfolio-page">

        <div class="container  mx-auto">
            <PortfolioItem class="items-center" v-for="item in projects" :key="item.id"
                :item="item">
            </PortfolioItem>
        </div>
    </div>
</template>


<script setup lang="ts">
import type { PortfolioItem as Project } from '@/types/PortfolioItem'
const projects = ref<Project[]>([
    {
        name: "Qr Germany",
        client: "ELKOOD Company",
        description: "",
        id: '1',
        imageUrl: "/projects/qrGermany/cover.png",
        primaryColor: "#FDD636",
        status: "in Progress",
        type: ["Landing Page" , "Web Application"],
        workInformation: "I Worked on it as Frontend Team Leader at <a class='text-white'>ELKOOD</a> Company",
        technologiesIcons: ['/icons/nuxt.svg', '/icons/tailwind.webp']
    },
    {
        name: "Qr Germany",
        client: "ELKOOD Company",
        description: "",
        id: '1',
        imageUrl: "/projects/qrGermany/cover.png",
        primaryColor: "#FDD636",
        status: "in Progress",
        type: ["Landing Page" , "Web Application"],
        workInformation: "I Worked on it as Frontend Team Leader at <a class='text-white'>ELKOOD</a> Company",
        technologiesIcons: ['/icons/nuxt.svg', '/icons/tailwind.webp']
    },
    {
        name: "SAS Company",
        client: "SAS Company",
        description: "",
        id: '1',
        imageUrl: "/projects/sas/sas.png",
        primaryColor: "#b34",
        status: "in Progress",
        type: ["Landing Page" , "Web Application"],
        workInformation: "I Worked on it as Frontend Team Leader at <a class='text-white'>ELKOOD</a> Company",
        technologiesIcons: ['/icons/nuxt.svg', '/icons/tailwind.webp']
    },
    {
        name: "Qr Germany",
        client: "ELKOOD Company",
        description: "",
        id: '1',
        imageUrl: "/projects/qrGermany/cover.png",
        primaryColor: "#FDD636",
        status: "in Progress",
        type: ["Landing Page" , "Web Application"],
        workInformation: "I Worked on it as Frontend Team Leader at <a class='text-white'>ELKOOD</a> Company",
        technologiesIcons: ['/icons/nuxt.svg', '/icons/tailwind.webp']
    },
])



definePageMeta({
    layout: "default"
})
</script>