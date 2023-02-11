<script setup lang='ts' >

const props = defineProps({
    text: String,
    wordsCount: {
        type: Number,
        default: 20,
    },
    default: {
        type: Boolean,
        default: false,
    }

})

const textLength = computed(() => props.text?.split(' ').length ?? 0)
const expand = ref(props.default);
</script> 


<template>
    <p class="transition-all">
        {{ expand || textLength <= wordsCount ? text : text?.split(' ').slice(0, wordsCount).join(' ') + ' ... ' }} <button
            v-if="text && text.split(' ').length > wordsCount"
            class=" text-xl hover:bg-white underline border-primary transition hover:bg-opacity-10 p-1 rounded-lg "
            @click="expand = !expand">{{ expand?' Read Less': 'Read More' }} </button>
    </p>
</template> 
<style lang='scss'>

</style>