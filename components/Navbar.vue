<template>
  <header class="flex fixed bottom-0 md:top-0 md:bottom-auto w-screen items-center justify-center p-5 z-10">
    <nav class="rounded-2xl  px-8 py-2 md:py-0 md:px-28 glass-paper">
      <ul class="flex items-center justify-center list-none space-x-12 md:space-x-16">
        <li v-for="item in navLinks" >

          <nuxt-link class="py-2 md:py-6 flex space-x-1 items-center select-none " active-class="active-nav-link"
            :to="item.path">
            <Icon class="text-4xl md:text-2xl select-none" :name="item.icon"></Icon>
            <span class="text-text text-sm font-semibold hidden md:inline">
              {{ item.title }}
            </span>

          </nuxt-link>
        </li>
      </ul>
    </nav>
    <!-- <client-only>


      <button @click="toggleDark()"
        class="btn btn-square btn-outline hidden md:block absolute right-10 z-10 top-1/2 -translate-y-1/2 rounded-circle ">
        <icon name="ph:sun-dim-duotone" v-if="isDark" class="text-primary text-4xl"></icon>
        <icon name="ion:moon-sharp" v-else class="text-text text-4xl"></icon>
      </button>
    </client-only> -->

  </header>
</template>
<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
import { ref } from "vue";


const isDark = useDark({ initialValue: 'dark' });
const toggleDark = useToggle(isDark);


const navLinks = ref([
  {
    title: "Home",
    path: "/",
    disabled: false,
    icon: 'ph:house-duotone'
  },
  {
    title: "About",
    path: "/about",
    disabled: false,
    icon: 'solar:user-id-bold'
  },
  {
    title: "Portfolio",
    path: "/portfolio",
    disabled: false,
    icon: 'bxs:collection'
  },
  {
    title: "Contact",
    path: "/contact",
    disabled: false,
    icon: 'ant-design:message-twotone'
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
.active-nav-link {
  position: relative;

  &::before {
    content: "";
    height: 2px;
    width: 100%;
    position: absolute;
    border-radius: 15px;
    background-color: theme("colors.primary");
    box-shadow: 0 35px 40px 5px theme("colors.primary");
    top: 0;
  }

  span {
    color: theme("colors.primary") !important;
  }

  svg {
    color: theme('colors.primary');
  }
}

html.dark {
  .active-nav-link {
    &::before {
      content: "";
      height: 2px;
      width: 100%;
      position: absolute;
      border-radius: 15px;
      background-color: theme("colors.primary");
      box-shadow: 0 25px 50px 10px theme("colors.primary");
      top: 0;
    }
  }
}
</style>
