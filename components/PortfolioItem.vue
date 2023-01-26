<template>
    <div class="grid grid-cols-12 project">
        <div class="info col-span-12 lg:col-span-6 order-2 lg:order-1 flex flex-col justify-center">


            <h2 class="text-5xl text-center lg:text-left lg:text-6xl   font-bold" :style="{color:item?.primaryColor}"> {{ item?.name }}
            </h2>
            <span class="mt-4 text-gray-300  hidden lg:block ">
                {{ item?.type.join(" & ") }}
            </span>

            <p class="text-gray-300 text-center lg:text-left md:text-lg capitalize mt-8"
                v-html="item?.workInformation"></p>

            <div class="tecnologies flex items-center my-6">
                <span class="text-text  hidden lg:block" >Built With</span>
                <div class="flex mx-auto lg:mx-12 gap-12 items-center  ">
                    <img class="max-w-[150px]"
                        v-for="img in item?.technologiesIcons" :src="img"
                        alt="">
                </div>

            </div>
            <button
                class=" border  hover:bg-primary hover:bg-opacity-20 text-primary border-primary rounded-2xl w-full lg:w-48 py-4 my-4 transition-all"
                type="button">
                Read More <Icon name="fas fa-arrow-right " class="mx-4">
                </Icon>
            </button>
        </div>
        <div class="image col-span-12 lg:col-span-6 order-1 lg:order-2 ">

            <img :style="{ boxShadow: `0 0 300px -100px ${item?.primaryColor}` }"
                :src="item?.coverImage"
                :class="`rounded-2xl border-4 border-text shadow-lg `">

        </div>



    </div>
</template>

<script lang="ts" setup>
import type { PortfolioItem } from '@/types/PortfolioItem';
import { PropType } from 'vue';


defineProps({
    item: Object as PropType<PortfolioItem>
})




</script>

<style lang="scss">
.project {
    height: calc(100vh - 112px);
    @media (max-width:992px) {
        height: 100vh;
    }
}
</style>
