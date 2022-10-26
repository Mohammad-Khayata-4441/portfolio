<template>
  <div>
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

<style lang="scss">
body {
  font-family: "poppins";
}
</style>
