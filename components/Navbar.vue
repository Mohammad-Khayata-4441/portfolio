<template>
  <header
    class="flex fixed bottom-0 md:top-0 md:bottom-auto w-screen items-center justify-center p-5 z-10">
    <nav
      class="rounded-2xl bg-white px-8 py-2 md:py-0 md:px-28 shadow-md dark:bg-dark-surface bg-opacity-50 dark:bg-opacity-75 backdrop:blur">
      <ul
        class="flex items-center justify-center list-none space-x-12 md:space-x-16">
        <nuxt-link
          class="py-2 md:py-6 flex space-x-1 items-center select-none "
          active-class="active-nav-link" ta v-for="item in navLinks"
          :to="item.path">
          <client-only>
            <icon class="text-3xl md:text-xl select-none"
              :name="`fas fa-${item.icon}`"></icon>
            <span class="text-text text-sm font-semibold hidden md:inline">
              {{ item.title }}
            </span>
          </client-only>

        </nuxt-link>
      </ul>
    </nav>
<client-only>


  <button @click="toggleDark()"
  class="btn btn-square btn-outline hidden md:block absolute right-10 z-10 top-1/2 -translate-y-1/2 rounded-circle ">
  <icon v-if="isDark" class="text-4xl" name="fas fa-moon"></icon>
  <icon name="fas fa-sun" v-else class=" text-4xl"></icon>
</button>
</client-only>

  </header>
</template>
<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
import { ref } from "vue";


const isDark = useDark({initialValue:'dark'});
const toggleDark = useToggle(isDark);


const navLinks = ref([
  {
    title: "Home",
    path: "/",
    disabled: false,
    icon: 'home'
  },
  {
    title: "About",
    path: "/about",
    disabled: false,
    icon: 'circle-user'
  },
  {
    title: "Portfolio",
    path: "/portfolio",
    disabled: false,
    icon: 'image'
  },
  {
    title: "Contact",
    path: "/contact",
    disabled: false,
    icon: 'paper-plane'
  },
  // {
  //   title: "Blog",
  //   path: "/blog",
  //   disabled: false,
  //   icon: 'newspaper'
  // },
]);
</script>

<style lang="scss">
nav {
  backdrop-filter: blur(20px);
}

.active-nav-link {
  position: relative;

  &::before {
    content: "";
    height: 2px;
    width: 100%;
    position: absolute;
    border-radius: 15px;
    top: 0;
    background-color: theme("colors.primary");
    box-shadow: 0 10px 30px 5px theme("colors.primary");
  }

  span {
    color: theme("colors.primary") !important;
  }

  .svg-inline--fa {
    color: theme('colors.primary');
  }
}
</style>
