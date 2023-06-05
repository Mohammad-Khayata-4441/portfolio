<template>
    <div class="relative overflow-hidden">
      <Navbar></Navbar>
      <NuxtPage></NuxtPage>
    </div>
</template>
<script setup>
useHead({
  bodyAttrs: {
    class: "text-text dark:bg-dark",
  },
});

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
