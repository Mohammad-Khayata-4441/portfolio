<template>
        <div  class="grid grid-cols-12 project">
            <div class="info col-span-6 flex flex-col justify-center">

                <h2 class="text-6xl text-primary font-bold"> {{ item?.name }}
                </h2>

                <h4 class="text-white text-2xl my-8">
                    {{ item?.type.join(" & ") }}
                </h4>

                <p class="text-text text-lg capitalize"
                    v-html="item?.workInformation"></p>

                <div class="tecnologies flex items-center my-6">
                    <span>Built With</span>
                    <div class="flex mx-12 gap-12 items-center ">
                        <img class="h-[75px]"
                            v-for="img in item?.technologiesIcons"
                            :src="img" alt="">
                    </div>
                    
                </div>
                <button class=" border hover:bg-primary hover:bg-opacity-20 text-primary border-primary rounded-2xl w-48 py-4 my-4 transition-all" type="button">
                    Read More <Icon name="fas fa-arrow-right " class="mx-4"></Icon>
                </button>
            </div>
            <div class="image col-span-6">

                <img :style="{ boxShadow: `0 0 300px -100px ${item?.primaryColor}` }"
                    :src="item?.imageUrl"
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
.project{
    height: calc(100vh - 112px);
} 
</style>
