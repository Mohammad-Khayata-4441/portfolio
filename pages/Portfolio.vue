<template>
    <div class="page portfolio-page bg-primary bg-opacity-5">

        <div class="page-overlay  flex-grow-1 min-h-full"></div>
        <div
            class="page-lights absolute top-0 h-full flex-grow-1 overflow-x-hidden">



        </div>
        <!-- <div class="page-overlay flex-grow-1"></div> -->


        <div class="container px-4 mx-auto">
            <PortfolioItem class="items-center" v-for="item in projects"
                :key="item.id" :item="item">
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
        coverImage: "/projects/qrGermany/cover.png",
        primaryColor: "#FDD636",
        status: "in Progress",
        type: ["Landing Page", "Web Application"],
        workInformation: "I Worked on it as Frontend Team Leader at <a class='text-white'>ELKOOD</a> Company",
        technologiesIcons: ['/icons/nuxt.svg', '/icons/tailwind.webp'],
        year: '2022',
        gitRepo: '',
        url: '',

    },

    {
        name: "SAS GENERAL CONTRACTING ",
        client: "SAS GENERAL CONTRACTING ",
        description: `SAS General Contracting & Trading Est. was established in the year 2020, in the Kingdom
        of Saudi Arabia. A 100% Saudi owned organization, initially started by opening
        Trading & Contracting Establishment. Based in Al-Jubail city to needs of limited customers.
        Now, it is considered as one of the leading companies in the Kingdom especially
        in the Eastern Province`,
        id: '2',
        coverImage: "/projects/sas/sas.png",
        primaryColor: "#ED1B33",
        status: "Finished",
        type: ["Landing Page"],
        workInformation: "I Worked on it as a <a class='text-white'>Freelancer</a> for Sudian Company",
        technologiesIcons: ['/icons/nuxt.svg', '/icons/tailwind.webp'],
        year: '2022',
        gitRepo: '',
        url: '',

    },
    {
        name: "العلم نور",
        client: "Al Elem Nour Publishing House",
        description: "A landing page for publishing house in aleppo syria",
        id: '1',
        coverImage: "/projects/alElemNour/cover.png",
        primaryColor: "#FFD400",
        status: "in Progress",
        type: ["Landing Page", "Web Application"],
        workInformation: "I Worked on it as a <a class='text-white'>Freelancer</a> for publishing house in aleppo syria",
        technologiesIcons: ['/icons/vue.webp', '/icons/bootstrap.webp'],
        year: '2022',
        gitRepo: '',
        url: '',

    },
    {
        name: "Awija Metal Industries",
        client: "ELKOOD Company",
        description: "",
        id: '1',
        coverImage: "/projects/awija/cover.jpg",
        primaryColor: "#1ac9fb",
        status: "in Progress",
        type: ["eCommerce", "Dashboard"],
        workInformation: "I Worked on it as Vue Developer at <span class='text-white font-bold '> Elkood </span> frontend  team ",
        technologiesIcons: ['/icons/vue.webp', '/icons/bootstrap.webp'],
        year: '2022',
        gitRepo: '',
        url: '',

    },
    {
        name: "Broker Management",
        client: "ELKOOD Company",
        description: "",
        id: '1',
        coverImage: "/projects/broker/cover.png",
        primaryColor: "#D19D44",
        status: "in Progress",
        type: ["eCommerce", "Dashboard"],
        workInformation: "I Worked on it as Vue Developer at <span class='text-white font-bold '> Elkood </span> frontend  team ",
        technologiesIcons: ['/icons/vue.webp', '/icons/tailwind.webp'],
        year: '2022',
        gitRepo: '',
        url: '',

    },
    {
        name: "Rivira Pharma",
        client: "ELKOOD Company",
        description: "",
        id: '1',
        coverImage: "/projects/riviraPharma/cover.jpg",
        primaryColor: "#ffffff",
        status: "in Progress",
        type: ["eCommerce", "Dashboard"],
        workInformation: "I Worked on it as Vue Developer at <span class='text-white font-bold '> Elkood </span> frontend  team ",
        technologiesIcons: ['/icons/vue.webp', '/icons/tailwind.webp'],
        year: '2022',
        gitRepo: '',
        url: '',

    },
    {
        name: "Vue Admin Dashboard",
        client: "ELKOOD Company",
        description: "",
        id: '1',
        coverImage: "/projects/vueAdminDashboard/cover.jpg",
        primaryColor: "#004A9F",
        status: "in Progress",
        type: ["eCommerce", "Dashboard"],
        workInformation: "I Worked on it as Vue Developer at <span class='text-white font-bold '> Elkood </span> frontend  team ",
        technologiesIcons: ['/icons/vue.webp', '/icons/tailwind.webp'],
        year: '2022',
        gitRepo: '',
        url: '',

    },
    {
        name: "Golden Wrap",
        client: "ELKOOD Company",
        description: "",
        id: '1',
        coverImage: "/projects/goldenWrap/cover.jpg",
        primaryColor: "#1f6b38",
        status: "in Progress",
        type: ["eCommerce", "Dashboard"],
        workInformation: "I Worked on it as Vue Developer at <span class='text-white font-bold '> Elkood </span> frontend  team ",
        technologiesIcons: ['/icons/vue.webp', '/icons/bootstrap.webp'],
        year: '2022',
        gitRepo: '',
        url: '',

    },
    {
        name: "Pro Marketing",
        client: "ELKOOD Company",
        description: "",
        id: '1',
        coverImage: "/projects/proMarketing/cover.jpg",
        primaryColor: "#F28003",
        status: "in Progress",
        type: ["eCommerce", "Dashboard"],
        workInformation: "I Worked on it as Vue Developer at <span class='text-white font-bold '> Elkood </span> frontend  team ",
        technologiesIcons: ['/icons/javascript.webp', '/icons/bootstrap.webp'],
        year: '2022',
        gitRepo: '',
        url: '',

    },
    {
        name: "MR Course",
        client: "ELKOOD Company",
        description: "",
        id: '1',
        coverImage: "/projects/mrCourse/cover.jpg",
        primaryColor: "#2ec4b6",
        status: "in Progress",
        type: ["eCommerce", "Dashboard"],
        workInformation: "I Worked on it as Vue Developer at <span class='text-white font-bold '> Elkood </span> frontend  team ",
        technologiesIcons: ['/icons/vue.webp', '/icons/bootstrap.webp'],
        year: '2022',
        gitRepo: '',
        url: '',

    },
])



definePageMeta({
    layout: "default"
})
</script>