<script lang="ts" setup>
defineProps({
    name: String
})
</script>
<template>
    <ClientOnly>
        <f-icon v-bind="$attrs" :icon="name"></f-icon>
    </ClientOnly>
</template>
