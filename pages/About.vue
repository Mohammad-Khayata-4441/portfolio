<script lang="ts" setup>
import "aos/dist/aos.css";
import AOS from "aos";
onMounted(() => {

    AOS.init();
})
useHead({
    title: "About Mohmmad Khayata",
    meta: [
        {
            name: "description",
            content: "Mohammad Khayata  - about me page   , read about my  personal informations ,  work experince ,  web development (backend and frontend) skills ",

        },
        {
            name: "keywords",
            content: "JavaScript, TypeScript, Css, Html, Scss, Sass, Vue, Nuxt, Nuxt3, Vue.js, Nuxt.js, developer, mohammadKhayata, mohammad, khayata, frontend, fullstack, glass, ui, lights,",

        },
    ]
})
</script>
<template>
    <div class="page about-page  relative z-0 flex flex-col ">
        <div class="page-lights absolute top-0 h-full flex-grow-1 overflow-x-hidden">

            <svg width="950" height="696" viewBox="0 0 1020 696" class="blur-[200px]" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="220" cy="576" rx="220" ry="576"
                    transform="matrix(0.505321 -0.862932 -0.862932 -0.505321 896.097 828.819)" fill="#26CDEB"
                    fill-opacity="0.3" />
            </svg>

            <svg class="absolute right-0 top-[720px] blur-[200px]" width="669" height="668" viewBox="0 0 669 668"
                fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="334" cy="334" r="334" transform="matrix(1 0 0 -1 0.683594 668)" fill="#FB1ADE"
                    fill-opacity="0.3" />
            </svg>


            <svg width="539" height="976" viewBox="0 0 539 976" class=" absolute blur-[200px] left-0 translate-y-1/4"
                fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M426.68 559.425C547.323 293.214 574.779 45.529 488.005 6.20416C401.231 -33.1207 233.086 150.807 112.443 417.017C-8.19962 683.228 -35.6556 930.913 51.1186 970.238C137.893 1009.56 306.038 825.636 426.68 559.425Z"
                    fill="#577DFA" fill-opacity="0.77" />
            </svg>


            <svg width="964" height="614" viewBox="0 0 964 614" fill="none"
                class="absolute blur-[200px] right-0 top-[220vh] opacity-50" xmlns="http://www.w3.org/2000/svg">
                <path d="M426.68 559.425C547.323 293.214 574.779 45.529 488.005 6.20416C401.231 -33.1207 233.086 150.807 112.443 417.017C-8.19962 683.228 -35.6556 930.913 51.1186 970.238C137.893 1009.56 306.038 825.636 426.68 559.425Z" fill="#577DFA" fill-opacity="1"/>

            </svg>



            <svg width="600" height="600" viewBox="0 0 494 494" fill="none"
                class="absolute blur-[200px] left-0 bottom-0" xmlns="http://www.w3.org/2000/svg">
                <circle cx="247" cy="247" r="247" transform="matrix(1 0 0 -1 0 494)" fill="#26CDEB"
                    fill-opacity="0.77" />
            </svg>

        </div>
        <div class="page-overlay "></div>

        <!-- Personal Info Section  -->
        <section class="container mx-auto">

            <h3 class="text-3xl m-auto mt-16 dark:text-white border-b-2 border-text w-max font-bold">
                PERSONAL INFO</h3>

            <div class="grid info grid-cols-12 py-12 lg:py-24">

                <div class="img col-span-12 lg:col-span-4 w-full  flex md:justify-center">

                    <img src="~assets/images/personal-1.webp" alt=""
                        class="  w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] object-cover m-auto bg-dark-surface rounded-[90px] md:rounded-4xl"
                        style="object-position: 0 30%;" />
                </div>

                <div
                    class="info-text col-span-12 lg:col-span-8 grid grid-cols-12 gap-y-8 lg:space-y-0 p-5 md:mt-10 lg:mt-0">

                    <div
                        class="col-span-12 md:col-span-6  flex lg:space-x-4 flex-col lg:flex-row md:items-center lg:items-start w-full">

                        <span class="text-text">Full Name</span>
                        <span class="dark:text-white  font-bold">Mohammad Sabah
                            Khayata</span>
                    </div>
                    <div
                        class="col-span-12 md:col-span-6  flex lg:space-x-4 flex-col lg:flex-row md:items-center lg:items-start w-full">

                        <span class="text-text">Birthday</span>
                        <span class="dark:text-white  font-bold">2 May
                            2001</span>
                    </div>

                    <div
                        class="col-span-12 md:col-span-6  flex lg:space-x-4 flex-col lg:flex-row md:items-center lg:items-start w-full">

                        <span class="text-text">Nationaluty</span>
                        <span class="dark:text-white  font-bold">Syrian</span>
                    </div>

                    <div
                        class="col-span-12 md:col-span-6  flex lg:space-x-4 flex-col lg:flex-row md:items-center lg:items-start w-full relative">

                        <span class="text-text">Primary language</span>
                        <span class="dark:text-white  font-bold"> Arabic (Native)
                        </span>
                    </div>
                    <div
                        class="col-span-12 md:col-span-6  flex lg:space-x-4 flex-col lg:flex-row md:items-center lg:items-start w-full">

                        <span class="text-text">Current Address</span>
                        <span class="dark:text-white  font-bold">Aleppo /
                            Syria</span>
                    </div>
                    <div
                        class="col-span-12 md:col-span-6  flex lg:space-x-4 flex-col lg:flex-row md:items-center lg:items-start w-full relative">

                        <span class="text-text">Secondary language</span>
                        <span class="dark:text-white  font-bold"> English
                            (Proficient) </span>
                    </div>
                    <div
                        class="col-span-12 md:col-span-6  flex lg:space-x-4 flex-col lg:flex-row md:items-center lg:items-start w-full">

                        <span class="text-text">Email</span>
                        <span class="dark:text-white  font-bold">
                            <a href="mailto:mohammad_khayata@outlook.com">Mohammad_khayata@outlook.com</a>
                        </span>
                    </div>
                    <div
                        class="col-span-12 md:col-span-6  flex lg:space-x-4 flex-col lg:flex-row md:items-center lg:items-start w-full">

                        <span class="text-text">Phone</span>
                        <span class="dark:text-white  font-bold">
                            <a href="tel:+963956954441">
                                +963 956 954 441
                            </a>
                        </span>
                    </div>

                </div>


            </div>


        </section>
        <!-- Summary Section -->
        <section>
            <div
                class="container mx-auto dark:dark:bg-dark-overlay dark:dark:bg-opacity-10 border border-text backdrop-blur-2xl rounded-2xl overflow-hidden backdrop:blur-xl shadow-lg">

                <h3 class="text-2xl font-bold bg-primary w-max  p-2 pr-4 rounded-br-3xl text-white ">
                    Summary</h3>
                <summary
                     class="mx-auto list-none text-gray-700 dark:text-stone-300 relative p-4 max-h-[400px] lg:max-h-max overflow-auto ">
                    <p>

                        My career in Web Applications Development began
                        after entering the Faculty of Informatics
                        Engineering,
                        where I began to learn the basics of programming,
                        OOP, algorithms and data structures in C++ and
                        Java
                        languages. <br>
                        I decided to use what I learned to develop web
                        applications, because I saw that the world tends
                        towards
                        web applications broadly,<br>
                        so, I started learning HTML, CSS and JavaScript, in
                        2019 .
                        I benefited from the quarantine period in 2020 as I
                        learned a lot about Vue.js, React, Nuxt.js
                        and Next
                        Frameworks.
                        <br>
                        I always like to search for and learn new and
                        popular technologies, and I try to find the best
                        practices, and this has earned me the experience of
                        searching the Internet and reaching the best
                        solutions . <br>
                        I worked in my career as a trainer, and after a
                        long period of training and work, I worked as a
                        mentor,
                        and this gave me experience in dealing with new
                        employees and trainees and knowing the way most
                        beginners think and help them . <br>
                        I aim to learn everything related to web
                        application development, and I seek to have a role
                        in
                        developing new technologies or improving existing
                        ones. <br>
                        I tend to be more interested in issues of logic and
                        programming than those of graphics and
                        design.


                    </p>


                </summary>
            </div>

        </section>
        <!-- Work Experince Section -->
        <section class="my-20">
            <h3 class="text-3xl m-auto mt-16 dark:text-white border-b-2 border-text w-max font-bold">
                WORK EXPERIENCE</h3>

            <div class="flex mt-40">

                <div class="container mx-auto">

                    <div class="relative  flex   items-center   ">

                        <!-- left handler col -->

                        <div data-aos="fade-up" class="h-[1300px] w-1 bg-primary relative hidden md:block">
                        </div>




                        <div class="w-full space-y-8 flex flex-col items-center md:items-stretch ">
                            <!-- EXP1 -->

                            <div class="flex items-center  ">
                                <div
                                    class=" hidden lg:block h-px bg-transparent border border-dashed border-primary flex-grow relative">
                                    <div
                                        class="h-[30px]  w-[30px] top-0 left-0 -translate-x-1/2 -translate-y-1/2  rounded-full bg-primary absolute">
                                    </div>

                                </div>


                                <div data-aos="fade-right" class=" dark:bg-dark-overlay dark:bg-opacity-10 border border-text backdrop-blur-2xl rounded-2xl overflow-hidden 
                              backdrop:blur-xl shadow-lg">

                                    <article
                                         class="mx-auto list-none text-gray-700 dark:text-stone-300 relative p-4  max-w-[350px] md:max-w-max md:w-[500px]">
                                        <h2 class="text-2xl mb-2 font-bold">
                                            Frontend Vue.js Developer</h2>
                                        <h4 class="text-sm text-primary  font-bold">
                                            MindTorches <span class="text-gray-500 ml-4">
                                                Irbid - Jordan </span></h4>
                                        <p class="my-4 ">

                                            I Worked as Freelancer at
                                            MindTorches Company on JetOrder
                                            project Which is
                                            an project that provides
                                            customers with the service of
                                            creating their own
                                            e-commerce, and it is a project
                                            that consists of 3
                                            applications. two
                                            control panels, a main
                                            dashboard for project
                                            management and a dashboard for
                                            the store owner, and a mobile
                                            application .
                                        </p>
                                    </article>
                                </div>


                            </div>
                            <!-- EXP2 -->
                            <div class="flex items-center  ">
                                <div
                                    class=" hidden lg:block h-px bg-transparent border border-dashed max-w-[400px]  border-primary flex-grow relative">
                                    <div
                                        class="h-[30px]  w-[30px] top-0 left-0 -translate-x-1/2 -translate-y-1/2  rounded-full bg-primary absolute">
                                    </div>

                                </div>


                                <div data-aos="fade-right" class=" dark:bg-dark-overlay dark:bg-opacity-10 border border-text backdrop-blur-2xl rounded-2xl overflow-hidden 
                              backdrop:blur-xl shadow-lg">

                                    <article
                                         class="mx-auto list-none text-gray-700 dark:text-stone-300 relative p-4  max-w-[350px] md:max-w-max md:w-[500px]">
                                        <h2 class="text-2xl mb-2 font-bold">
                                            Frontend Team Lead</h2>
                                        <h4 class="text-sm text-primary  font-bold">
                                            ELKOOD <span class="text-gray-500 ml-4">
                                                Syria - Aleppo </span>
                                        </h4>
                                        <p class="my-4 max-h-[220px] overflow-auto">

                                            In Jan - 2022 i started working
                                            in a new position as Frontend
                                            Team Lead at
                                            ELKOOD , My main job was to
                                            supervise projects and assign
                                            tasks to my
                                            frontend team members and
                                            training new jonior developers.
                                            I built a new structure for the
                                            new projects Where the
                                            principle of the
                                            architecture was to divide the
                                            project files according to the
                                            services
                                            provided by the project,
                                            somewhat similar to the ddd
                                            architecture,
                                            then I started using a new
                                            technologies to keep up with
                                            the development
                                            that is happening in the
                                            frontend community, so i
                                            started Using TypeScript
                                            with Vue.js 3 and Vite to build
                                            more cohesive projects and
                                            better
                                            development environment
                                            and for optimized CEO and
                                            Server Side Rendering , I
                                            started Uing Nuxt Js
                                            with pinia state management
                                        </p>
                                    </article>
                                </div>


                            </div>
                            <!-- EXP3 -->
                            <div class="flex items-center  ">
                                <div
                                    class=" hidden lg:block h-px bg-transparent border border-dashed border-primary flex-grow relative">
                                    <div
                                        class="h-[30px]  w-[30px] top-0 left-0 -translate-x-1/2 -translate-y-1/2  rounded-full bg-primary absolute">
                                    </div>

                                </div>


                                <div data-aos="fade-right" class=" dark:bg-dark-overlay dark:bg-opacity-10 border border-text backdrop-blur-2xl rounded-2xl overflow-hidden 
                              backdrop:blur-xl shadow-lg">

                                    <article
                                         class="mx-auto list-none text-gray-700 dark:text-stone-300 relative p-4  max-w-[350px] md:max-w-max md:w-[500px]">
                                        <h2 class="text-2xl mb-2 font-bold">
                                            Frontend Vue.js Developer</h2>
                                        <h4 class="text-sm text-primary  font-bold">
                                            ELKOOD <span class="text-gray-500 ml-4">
                                                Syria - Aleppo </span>
                                        </h4>
                                        <p class="my-4 ">

                                            I started in EKOOD as Vue.js
                                            jonior developer , I Worked on
                                            many projects
                                            with the team , we used
                                            technologies and libraries like
                                            Vuejs, bootstrap ,
                                            vuetify , scss , Three.Js and
                                            GreenSock.
                                            I built a reusable template for
                                            the next projects that includes
                                            a lot of
                                            reusable components and
                                            functionality.
                                            I Worked on different types of
                                            projects , eCommerces like
                                            Awija
                                            TinplateIndustrial and Reviera
                                            Pharma Project , dashboards to
                                            manage the
                                            content of the projects ,
                                            Landing Pages like ProMarketing
                                            and Root Agency
                                            website
                                        </p>
                                    </article>
                                </div>


                            </div>


                        </div>





                    </div>

                </div>

            </div>

        </section>


        <section>
            <div class="container mx-auto">

                <h3 class="text-3xl m-auto mt-16 dark:text-white border-b-2 border-text w-max font-bold">
                    MY SKILLS</h3>

                <p class="text-center my-10  dark:text-gray-200"> <span class="text-primary font-bold mx-1"> Proficient
                    </span> with languages and framewoks</p>
                <div class="grid gap-8  md:gap-0 grid-cols-12 my-20">
                    <div data-aos="zoom-out" data-aos-duration="1500" class="col-span-4 md:col-span-2 flex justify-center items-center">



                        <img src="/icons/typescript.webp" class="w-12 md:w-28" alt="">


                    </div>
                    <div data-aos="zoom-out" data-aos-duration="1500" class="col-span-4 md:col-span-2 flex justify-center items-center">



                        <img src="/icons/javascript.webp" class="w-12 md:w-28 rounded-xl" alt="">


                    </div>

                    <div data-aos="zoom-out" data-aos-duration="1500" class="col-span-4 md:col-span-2 flex justify-center items-center">



                        <img src="/icons/vue.webp" class="w-12 md:w-28" alt="">



                    </div>
                    <div data-aos="zoom-out" data-aos-duration="1500" class="col-span-4 md:col-span-2 flex justify-center items-center">



                        <img src="/icons/nuxt.svg" class="w-12 md:w-40" alt="">


                    </div>
                    <div data-aos="zoom-out" data-aos-duration="1500" class="col-span-4 md:col-span-2 flex justify-center items-center">



                        <img src="/icons/react.webp" class="w-12 md:w-28" alt="">


                    </div>
                    <div data-aos="zoom-out" data-aos-duration="1500" class="col-span-4 md:col-span-2 flex justify-center items-center">


                        <img src="/icons/sass.webp" class="w-12 md:w-28" alt="">


                    </div>
                </div>
                <p class="text-center my-10  dark:text-gray-200"> <span class="text-primary font-bold mx-1"> Expert
                    </span>
                    using Tools and Libraries</p>

                <div class="grid gap-8  md:gap-0 grid-cols-12 my-20">

                    <div data-aos="zoom-out" data-aos-duration="1500" class="col-span-4 md:col-span-2 flex justify-center items-center">



                        <img src="/icons/vite.webp" class="w-12 md:w-28" alt="">



                    </div>
                    <div data-aos="zoom-out" data-aos-duration="1500" class="col-span-4 md:col-span-2 flex justify-center items-center">



                        <img src="/icons/pinia.svg" class="w-12 md:w-28  " alt="">


                    </div>

                    <div data-aos="zoom-out" data-aos-duration="1500" class="col-span-4 md:col-span-2 flex justify-center items-center">



                        <img src="/icons/redux.webp" class="w-12 md:w-28" alt="">


                    </div>
                    <div data-aos="zoom-out" data-aos-duration="1500" class="col-span-4 md:col-span-2 flex justify-center items-center">



                        <img src="/icons/tailwind.webp" class="w-12 md:w-28" alt="">



                    </div>
                    <div data-aos="zoom-out" data-aos-duration="1500" class="col-span-4 md:col-span-2 flex justify-center items-center">



                        <img src="/icons/bootstrap.webp" class="w-12 md:w-28" alt="">


                    </div>
                    <div data-aos="zoom-out" data-aos-duration="1500" class="col-span-4 md:col-span-2 flex justify-center items-center">



                        <img src="/icons/gsap.svg" class="w-12 md:w-28" alt="">


                    </div>
                </div>
                <p class="text-center my-10  dark:text-gray-200"> <span class="text-primary font-bold mx-1"> Familiar
                    </span>
                    with frameworks and languages</p>

                <div class="grid gap-8  md:gap-0 grid-cols-12 my-20">
                    <div data-aos="zoom-out" data-aos-duration="1500" class="col-span-4 md:col-span-2 flex justify-center items-center">



                        <img src="/icons/angular.webp" class="w-12 md:w-40" alt="">


                    </div>
                    <div data-aos="zoom-out" data-aos-duration="1500" class="col-span-4 md:col-span-2 flex justify-center items-center">



                        <img src="/icons/nodejs.webp" class="w-12 md:w-28 " alt="">


                    </div>

                    <div data-aos="zoom-out" data-aos-duration="1500" class="col-span-4 md:col-span-2 flex justify-center items-center">



                        <img src="/icons/nest.webp" class="w-12 md:w-28" alt="">


                    </div>
                    <div data-aos="zoom-out" data-aos-duration="1500" class="col-span-4 md:col-span-2 flex justify-center items-center">



                        <img src="/icons/cpp.webp" class="w-12 md:w-28" alt="">



                    </div>
                    <div data-aos="zoom-out" data-aos-duration="1500" class="col-span-4 md:col-span-2 flex justify-center items-center">



                        <img src="/icons/cs.webp" class="w-12 md:w-28" alt="">


                    </div>
                    <div data-aos="zoom-out" data-aos-duration="1500" class="col-span-4 md:col-span-2 flex justify-center items-center">



                        <img src="/icons/asp.webp" class="w-12 md:w-28" alt="">


                    </div>
                </div>

            </div>


        </section>




    </div>
</template>
 

<style lang="scss">
.page.about-page {
    height: auto !important;
    min-height: 100vh;

    summary p {

        line-height: 35px;
    }
}
</style>