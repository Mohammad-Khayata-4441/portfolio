<template>
  <div class="relative">
    <div class="page-overlay"></div>
    
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
.page {
  padding-bottom: 90px;
  height: auto !important;
    min-height: 100vh;
  @media (min-width:768px) {
    padding-bottom: 0px;
    padding-top: 112px;
  }

  height: 100vh;


  .page-overlay {
    position: absolute;
    z-index: -1;
    width: 100%;
    min-height: 100%;
    top: 0;
    &::after{
      content: '';
      // backdrop-filter: blur(250px);
      background-color: transparent;
      position: absolute;
      height: 100%;
      width: 100%;

    }
  }

  .page-lights {
    z-index: -1;
    top: 0;
    min-height: 100%;
    width: 100%;
  }

}

body {
  font-family: "poppins" , "almarai";
}
</style>
