<template>
    <div class="page-lights  dark:block absolute top-0 h-full flex-grow-1 overflow-x-hidden overflow-hidden">

        <svg v-for="(i, index)  in lightsCount" ref="pageLight" width="950" height="696" viewBox="0 0 1020 696" :style="{
            top: index === 0 ? 0 : `${devidedTo * index}%`,
            position: 'absolute',

        }" class="svg-light blur-[200px]" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="220" cy="576" rx="220" ry="576"
                transform="matrix(0.505321 -0.862932 -0.862932 -0.505321 896.097 828.819)" fill-opacity="0.2" />
        </svg>


    </div>
</template>


<script lang="ts" setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
const lightsCount = ref(0);
const pageLight = ref<SVGAElement[] | null>(null)
const devidedTo = computed(() => 100 / lightsCount.value)
onMounted(() => {
    gsap.registerPlugin(ScrollTrigger)
    if (process.client) {
        const html: HTMLHtmlElement = document.querySelector('html') as HTMLHtmlElement;
        const windowHegiht = window.innerHeight;
        const pageLength = Math.max(document.body.scrollHeight,
            document.body.offsetHeight, html.clientHeight as number,
            html.scrollHeight as number, html.offsetHeight as number);
        if (pageLength && windowHegiht) {
            const count = Math.ceil(pageLength / windowHegiht)
            lightsCount.value = count > 2 ? count : 2
        }


    }
})

const animate = () => {
    if (process.client && pageLight.value) {


        pageLight.value.forEach((light) => {

            gsap.from(light, {
                scale: 0,
                opacity:0,
                duration: 0.8 ,
                scrollTrigger: {
                    trigger: light,
                }
            })
        })
    }
}

watch(pageLight, (nv) => {
    console.log('number ', nv, document.querySelectorAll('svg'))
    if (nv)
        animate()
})

</script>



<style scoped lang="scss">
.page-lights {

    svg:nth-child(odd) {
        left: 0;
        ellipse {
            @apply  dark:fill-lightPurple ;
        }
    }

    svg:nth-child(even) {
        right: 0;
        transform: rotate(90deg);
        ellipse {
            @apply dark:fill-lightBlue;
        }

    }
}
</style>