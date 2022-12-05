<template>
  <div class="page home-page">

    
    <div class="page-lights absolute top-0 h-full">
      <svg class="bottom-left-light absolute bottom-0 right-0 hidden md:block md:left-0 " width="494" height="309"
        viewBox="0 0 494 309" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle r="247" transform="matrix(1 0 0 -1 247 247)" fill="#436CFF" fill-opacity="0.77" />
      </svg>

      <svg class="light-top absolute top-0  right-0 md:left-1/4" width="494" height="138" viewBox="0 0 494 138"
        fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle r="247" transform="matrix(1 0 0 -1 247 -109)" fill="#AC43FF" fill-opacity="0.77" />
      </svg>

      <svg class="absolute right-32 md:right-0" width="486" height="377" viewBox="0 0 486 377" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="243" cy="134" r="243" fill="#43D2FF" fill-opacity="0.42" />
      </svg>
    </div>

    <div class="page-overlay"></div>



    <main class="h-full">
      <div class="container m-auto h-full">
        <div class="hero overflow-hidden flex flex-col lg:flex-row justify-center items-center h-full space-y-16">

          <img src="/personal.png" class="rounded-circle lg:rounded-none object-contain 
          object-top
          border-3
          border-text
          bg-primary
            bg-opacity-5
            shadow-2xl
            drop-shadow-2xl
            translate-y-6
            lg:bg-transparent
            lg:shadow-none
            lg:self-end
            lg:object-contain 
          " />


          <article class="hero-text self-center px-2 md:px-10 flex flex-col space-y-2">
            <h6 class="text-3xl hidden lg:block text-text dark:text-gray-300">Hey There , I'm</h6>
            <h2 class="text-3xl  text-center lg:text-left sm:text-5xl lg:text-7xl font-bold uppercase gradiant-heading">
              Mohammad Khayata
            </h2>
            <p class="text-md sm:text-xl text-center lg:text-left  text-text dark:text-white">
              FullStack JavaScript/TypeScript Developer <br class="md:hidden" />
              Specialist in Frontend Development
            </p>
            <div class="btn-group flex space-x-4 m-auto lg:m-0">
              <button class="bg-primary p-3 text-white rounded-xl">
                Contact
                <span class="mdi mdi-phone"></span>

              </button>
              <button class=" p-3 text-seconadry flex items-center space-x-4 ">
                <span>

                  Portfolio
                </span>
                <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M23.8238 20.2355L12.4258 25.9125C12.2913 25.9702 12.1466 26 12.0003 26C11.854 26 11.7092 25.9702 11.5748 25.9125L0.176191 20.2355C-0.0558301 20.1194 -0.0558301 19.929 0.176191 19.8124L2.90592 18.4555C3.04056 18.3978 3.1855 18.368 3.33197 18.368C3.47844 18.368 3.62339 18.3978 3.75802 18.4555L11.5748 22.3439C11.7092 22.4019 11.854 22.4318 12.0003 22.4318C12.1466 22.4318 12.2914 22.4019 12.4258 22.3439L20.2426 18.4555C20.3771 18.3978 20.5219 18.368 20.6683 18.368C20.8147 18.368 20.9596 18.3978 21.0941 18.4555L23.8238 19.8153C24.0587 19.929 24.0587 20.1194 23.8238 20.2355ZM23.8238 12.3118L21.0941 10.9521C20.9596 10.8943 20.8147 10.8646 20.6683 10.8646C20.5219 10.8646 20.3771 10.8943 20.2426 10.9521L12.4258 14.8451C12.2913 14.9026 12.1465 14.9322 12.0003 14.9322C11.854 14.9322 11.7093 14.9026 11.5748 14.8451L3.75802 10.9521C3.62339 10.8944 3.47844 10.8646 3.33197 10.8646C3.1855 10.8646 3.04056 10.8944 2.90592 10.9521L0.176191 12.3118C-0.0558301 12.4279 -0.0558301 12.6189 0.176191 12.7361L11.5748 18.412C11.7092 18.4697 11.854 18.4995 12.0003 18.4995C12.1466 18.4995 12.2913 18.4697 12.4258 18.412L23.8238 12.7361C24.0587 12.6189 24.0587 12.4285 23.8238 12.3118ZM0.176191 5.71203L11.5742 10.9521C11.8477 11.0595 12.1517 11.0595 12.4252 10.9521L23.8238 5.71203C24.0558 5.60408 24.0558 5.42823 23.8238 5.32087L12.4252 0.0814042C12.1519 -0.0271348 11.8475 -0.0271348 11.5742 0.0814042L0.176191 5.32087C-0.0587304 5.42823 -0.0587304 5.60408 0.176191 5.71203Z"
                    fill="#4BCAFE" />
                </svg>

              </button>
            </div>
          </article>
        </div>
      </div>
    </main>
  </div>
</template>
<script setup>
import gsap from 'gsap'
console.log('created');

definePageMeta({
  pageTransition: {
    mode: "default",
    appear: true,
  },
});

onMounted(() => {
  console.log('mounted');
  gsap.from('.page-lights svg', {
    scale: 0,
    stagger: 0.8

  })
})

</script>

<style lang="scss">
.page {
  padding-bottom: 90px;

  @media (min-width:768px) {
    padding-bottom: 0px;
    padding-top: 112px;
  }

  height: 100vh;

  .page-lights {
    z-index: -1;
  }

  .page-overlay {
    position: absolute;
    z-index: -1;
    width: 100%;
    min-height: 100%;
    top: 0;
    backdrop-filter: blur(250px);
  }

  .page-lights {
    top: 0;
    min-height: 100%;
    width: 100%;
  }
}

.home-page {
  .hero {
    img {
      width: 350px;
      height: 350px;

      @media(min-width:992px) {
        width: 650px;
        height: 650px;
      }

      @media(min-width:1200px) {
        width: 40%;
        height: 100%;
      }
    }


  }
}
</style>
