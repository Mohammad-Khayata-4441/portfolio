<template>
  <div v-if="!isMounted"
    class="loading -z-10 bg-dark fixed top-0 left-0 h-screen w-screen flex items-center justify-center flex-col">
    <svg class="light blur-[200px] absolute left-0 top-0" width="520" height="396" viewBox="0 0 1020 696" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="220" cy="576" rx="220" ry="576"
        transform="matrix(0.505321 -0.862932 -0.862932 -0.505321 896.097 828.819)" fill="#26CDEB" fill-opacity="0.77" />
    </svg>

    <svg class="light blur-[200px] absolute right-0 bottom-0" width="520" height="396" viewBox="0 0 764 751" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="501" cy="187.5" rx="501" ry="187.5"
        transform="matrix(0.714449 0.699688 0.699688 -0.714449 -106.936 158.962)" fill="#FB1ADE" fill-opacity="0.77" />
    </svg>

    <h1 class="text-3xl text-center text-white">Welcome To Mohammad Khayata Portfolio <span class="text-primary text-4xl"> :) </span> </h1>
    <h4 class="my-2 text-lg">Loading ... </h4>
  </div>
  <template v-else>
    <div class="relative">
      <Navbar></Navbar>
      <NuxtPage></NuxtPage>
    </div>
  </template>
</template>
<script setup>
const isMounted = ref(false)
useHead({
  bodyAttrs: {
    class: "text-text dark:bg-dark",
  },
});
onMounted(() => {
  isMounted.value = true
})
</script>

<style lang="scss" scoped>
@keyframes flash {
  0% {
    opacity: 0;
  }

  50%{
    opacity: 1;
  }

  100%{
    opacity: 0;
  }
}

.light {
  animation: flash 4s ease-in-out infinite;
}

body {
  font-family: "poppins", "almarai";
}</style>
