<script lang="ts" setup>
import "aos/dist/aos.css";
import AOS from "aos";
const fontSize = ref(16)
const pxFontSize = computed(() => fontSize.value.toString() + 'px')
onMounted(() => {
    AOS.init();
})
useHead({
    title: "About Mohmmad Khayata",
    meta: [
        {
            name: "description",
            content: "Mohammad Khayata  - about me page   , read about my  personal informations ,  work experience ,  web development (backend and frontend) skills ",

        },
        {
            name: "keywords",
            content: "JavaScript, TypeScript, Css, Html, Scss, Sass, Vue, Nuxt, Nuxt3, Vue.js, Nuxt.js, developer, mohammadKhayata, mohammad, khayata, frontend, fullstack, glass, ui, lights,",

        },
    ]
})
definePageMeta({
    layout: 'default'
})
</script>
<template>
    <Head>
        <Title>About Me</Title>
    </Head>
    <div class="page about-page  relative z-0 flex flex-col ">
        <LightsGenerator></LightsGenerator>
        <div class="page-overlay "></div>
        <!-- Personal Info Section  -->
        <section class="container mx-auto">

            <h1 class="text-white text-2xl  text-center hidden">About Mohammad Khayata</h1>
            <h2 class="text-3xl m-auto mt-16 dark:text-white border-b-2 border-primary dark:border-text w-max font-bold">
                Personal Info</h2>

            <div class="grid info grid-cols-12 py-12 lg:py-24">

                <div class="img col-span-12 lg:col-span-4 w-full  flex md:justify-center">

                    <NuxtImg quality="0.5" preload height="350" width="350"
                        :src="useDriveResolver('https://drive.google.com/file/d/15hlCwRxuWBjUfn_3o6D9Kyop-2xlLC30/view?usp=drive_link')"
                        alt="mohammad_khayata"
                        class="w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] object-cover m-auto bg-dark rounded-[90px] md:rounded-4xl"
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
                            <a class="hover:text-primary"
                                href="mailto:mohammad_khayata@outlook.com">MohammadKhayata.gm@gmail.com</a>
                        </span>
                    </div>
                    <div
                        class="col-span-12 md:col-span-6  flex lg:space-x-4 flex-col lg:flex-row md:items-center lg:items-start w-full">

                        <span class="text-text">Phone</span>
                        <span class="dark:text-white  font-bold">
                            <a class="hover:text-primary" href="tel:+963956954441">
                                +963&nbsp;956&nbsp;954&nbsp;441
                            </a>
                        </span>
                    </div>

                </div>


            </div>


        </section>
        <!-- Summary Section -->
        <section>
            <div
                class="container summary max-w-7xl mx-auto dark:dark:bg-dark-overlay dark:dark:bg-opacity-10 border border-primary dark:border-text rounded-2xl overflow-hidden  shadow-lg">

                <div class="flex items-center justify-between pr-4">

                    <h3 class="text-2xl font-bold bg-primary w-max  p-2 pr-4 rounded-br-3xl text-white ">
                        Summary</h3>
                    <div class="flex items-center gap-4">
                        <Icon class="text-[44px]" name="majesticons:font-size-line"></Icon>
                        <input min="12" max="24" v-model="fontSize" type="range">

                    </div>
                </div>
                <p
                    class="mx-auto list-none text-gray-700 dark:text-white relative p-4 max-h-[400px] lg:max-h-max overflow-auto leading-1">
                    My career in web application development began when I entered the Faculty of Informatics Engineering,
                    where I learned the basics of programming, object-oriented programming, algorithms, and data structures
                    using C++ and Java languages. I decided to focus on web applications because I saw the world was
                    trending towards them. <br>

                    In 2019, I started learning HTML, CSS, and JavaScript. During the quarantine period in 2020, I expanded
                    my knowledge by learning Vue.js, React and Nuxt.js Frameworks. <br>

                    I am always eager to learn new and
                    popular technologies, and I strive to follow best practices. This has helped me become proficient in
                    searching the internet for the best solutions. <br>

                    I worked as a team leader with a group of employees. We worked on various large projects such as
                    e-commerce stores, content management applications, educational apps, and other applications. <br>

                    I have worked as a trainer and mentor, gaining experience in dealing with new employees and trainees.
                    This has taught me how beginners think and how to help them. I aim to continue learning everything
                    related to web application development and to have a role in developing new technologies or improving
                    existing ones. I am particularly interested in issues of logic and programming rather than those of
                    graphics and design. <br>



                </p>
            </div>

        </section>
        <!-- Work Experience Section -->
        <section class="my-20">
            <h3 class="text-3xl m-auto mt-16 dark:text-white border-b-2 border-primary dark:border-text w-max font-bold">
                Work Experience</h3>

            <div class="flex mt-40">

                <div class="container max-w-7xl mx-auto">

                    <div class="relative  flex   items-center   ">

                        <!-- left handler col -->

                        <div data-aos="fade-up" class="h-[1300px] w-1 bg-primary relative hidden lg:block">
                        </div>




                        <div class="w-full space-y-8 flex flex-col items-center lg:items-stretch ">
                            <!-- EXP1 -->
                            <div class="flex items-center  ">
                                <div
                                    class=" hidden lg:block h-px bg-transparent border border-dashed border-primary flex-grow relative">
                                    <div
                                        class="h-[30px] w-[30px] top-0 left-0 -translate-x-1/2 -translate-y-1/2  rounded-full bg-primary absolute">
                                    </div>

                                </div>


                                <div data-aos="fade-right" class="glass-paper rounded-2xl overflow-hidden">

                                    <article
                                        class="mx-auto list-none text-gray-700 dark:text-white relative p-4  max-w-[350px] md:max-w-max md:w-[500px]">
                                        <h2 class="text-2xl mb-2 font-bold">
                                            Frontend Vue.js Developer</h2>
                                        <h3 class="text-sm text-primary  font-bold">
                                            MindTorches <span class="text-gray-500 ml-4">
                                                Irbid - Jordan </span></h3>
                                        <p class="exp-text my-4  max-h-[220px] dark:text-gray-300 overflow-auto">

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


                                <div data-aos="fade-right" class="glass-paper rounded-2xl overflow-hidden">

                                    <article
                                        class="mx-auto list-none text-gray-700 dark:text-white relative p-4  max-w-[350px] md:max-w-max md:w-[500px]">
                                        <h2 class="text-2xl mb-2 font-bold">
                                            Frontend Team Lead</h2>
                                        <h3 class="text-sm text-primary  font-bold">
                                            ELKOOD <span class="text-gray-500 ml-4">
                                                Syria - Aleppo </span>
                                        </h3>
                                        <p class="exp-text my-4 max-h-[220px] dark:text-gray-300 overflow-auto">

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
                                            and for optimized SEO and
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


                                <div data-aos="fade-right" class="glass-paper rounded-2xl overflow-hidden">

                                    <article
                                        class="mx-auto list-none text-gray-700 dark:text-white relative p-4  max-w-[350px] md:max-w-max md:w-[500px]">
                                        <h2 class="text-2xl mb-2 font-bold">
                                            Frontend Vue.js Developer</h2>
                                        <h3 class="text-sm text-primary  font-bold">
                                            ELKOOD <span class="text-gray-500 ml-4">
                                                Syria - Aleppo </span>
                                        </h3>
                                        <p class="exp-text my-4 max-h-[220px] overflow-auto dark:text-gray-300">

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
                            <!-- EXP4 -->
                            <div class="flex items-center  ">
                                <div
                                    class=" hidden lg:block h-px bg-transparent border border-dashed max-w-[400px]  border-primary flex-grow relative">
                                    <div
                                        class="h-[30px]  w-[30px] top-0 left-0 -translate-x-1/2 -translate-y-1/2  rounded-full bg-primary absolute">
                                    </div>

                                </div>


                                <div data-aos="fade-right" class="glass-paper rounded-2xl overflow-hidden">

                                    <article
                                        class="mx-auto list-none text-gray-700 dark:text-white relative p-4  max-w-[350px] md:max-w-max md:w-[500px]">
                                        <h2 class="text-2xl mb-2 font-bold">
                                            Frontend Vue.js Developer</h2>
                                        <h3 class="text-sm text-primary  font-bold">
                                            Freelancer <span class="text-gray-500 ml-4">
                                                online </span>
                                        </h3>
                                        <p class="my-4 dark:text-gray-300 exp-text max-h-[220px] overflow-auto">

                                            After learning the basics of developing web applications, I created some
                                            training projects for practicing .. in addition to working on some small
                                            projects (such as
                                            landing pages) for some clients in the region.

                                        </p>
                                    </article>
                                </div>


                            </div>


                        </div>





                    </div>

                </div>

            </div>

        </section>


        <section class="overflow-y-hidden">
            <div class="container max-w-7xl mx-auto">

                <h3
                    class="text-3xl m-auto mt-16 dark:text-white border-b-2 border-primary dark:border-text w-max font-bold">
                    My Skills</h3>

                <p class="text-center my-10  dark:text-gray-200"> <span class="text-primary font-bold mx-1"> Proficient
                    </span> with languages and framewoks</p>
                <div class="grid gap-8  md:gap-0 grid-cols-12 my-20">
                    <div data-aos="fade-up" data-aos-delay="0" data-aos-duration="700"
                        class="col-span-4 md:col-span-2 flex justify-center items-center">



                        <img height="100" width="100" src="/icons/typescript.webp" class="w-16 md:w-28"
                            alt="technology-typescript" title="typescript">


                    </div>
                    <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="700"
                        class="col-span-4 md:col-span-2 flex justify-center items-center">



                        <img height="100" width="100" src="/icons/javascript.webp" class="w-16 md:w-28 rounded-xl"
                            alt="technology-javascript" title="javascript">


                    </div>

                    <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="700"
                        class="col-span-4 md:col-span-2 flex justify-center items-center">



                        <img height="100" width="100" src="/icons/vue.webp" class="w-16 md:w-28" alt="technology-vue"
                            title="vue">



                    </div>
                    <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="700"
                        class="col-span-4 md:col-span-2 flex justify-center items-center">



                        <img height="150" width="100" src="/icons/nuxt.svg" class="h-32 md:w-40" alt="technology-nuxt"
                            title="nuxt">


                    </div>
                    <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="700"
                        class="col-span-4 md:col-span-2 flex justify-center items-center">



                        <img height="100" width="100" src="/icons/react.webp" class="w-16 md:w-28" alt="technology-react"
                            title="react">


                    </div>
                    <div data-aos="fade-up" data-aos-delay="500" data-aos-duration="700"
                        class="col-span-4 md:col-span-2 flex justify-center items-center">


                        <img height="100" width="100" src="/icons/sass.webp" class="w-16 md:w-28" alt="technology-sass"
                            title="sass">


                    </div>
                </div>
                <p class="text-center my-10  dark:text-gray-200"> <span class="text-primary font-bold mx-1"> Expert
                    </span>
                    using Tools and Libraries</p>

                <div class="grid gap-8 md:gap-0 grid-cols-4 md:grid-cols-8 my-20">

                    <div data-aos="fade-up" data-aos-delay="0" data-aos-duration="700"
                        class=" flex justify-center items-center">
                        <img height="100" width="100" src="/icons/vite.webp" class="w-16 md:w-28" alt="technology-vite"
                            title="vite">
                    </div>
                    <div data-aos="fade-up" data-aos-delay="0" data-aos-duration="700"
                        class=" flex justify-center items-center">
                        <img height="100" width="100" src="/icons/material-ui.svg" class="w-16 md:w-28" alt="technology-vite"
                            title="vite">
                    </div>
                    <div data-aos="fade-up" data-aos-delay="0" data-aos-duration="700"
                        class=" flex justify-center items-center">
                        <img height="100" width="100" src="/icons/react-query.svg" class="w-16 md:w-28" alt="technology-vite"
                            title="vite">
                    </div>



                    <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="700"
                        class=" flex justify-center items-center">



                        <img height="100" width="100" src="/icons/pinia.svg" class="w-16 md:w-28  " alt="tpiniaechnology-">


                    </div>

                    <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="700"
                        class=" flex justify-center items-center">



                        <img height="100" width="100" src="/icons/redux.webp" class="w-16 md:w-28" alt="technology-redux"
                            title="redux">


                    </div>
                    <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="700"
                        class=" flex justify-center items-center">



                        <img height="100" width="100" src="/icons/tailwind.webp" class="w-16 md:w-28"
                            alt="technology-tailwind" title="tailwind">



                    </div>
                    <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="700"
                        class=" flex justify-center items-center">



                        <img height="100" width="100" src="/icons/bootstrap.webp" class="w-16 md:w-28"
                            alt="technology-bootstrap" title="bootstrap">


                    </div>
                    <div data-aos="fade-up" data-aos-delay="500" data-aos-duration="700"
                        class=" flex justify-center items-center">



                        <img height="100" width="100" src="/icons/gsap.svg" class="w-16 md:w-28" alt="technology-gsap"
                            title="gsap">


                    </div>
                </div>
                <p class="text-center my-10  dark:text-gray-200"> <span class="text-primary font-bold mx-1"> Familiar
                    </span>
                    with frameworks and languages</p>

                <div class="grid gap-8  md:gap-0 grid-cols-12 my-20">
                    <div data-aos="fade-up" data-aos-delay="0" data-aos-duration="700"
                        class="col-span-4 md:col-span-3 flex justify-center items-center">



                        <img height="100" width="100" src="/icons/angular.webp" class="w-16 md:w-40"
                            alt="technology-angular" title="angular">


                    </div>
                    <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="700"
                        class="col-span-4 md:col-span-3 flex justify-center items-center">



                        <img height="100" width="100" src="/icons/nodejs.webp" class="w-16 md:w-28 " alt="technology-nodejs"
                            title="nodejs">


                    </div>

                    <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="700"
                        class="col-span-4 md:col-span-3 flex justify-center items-center">



                        <img height="100" width="100" src="/icons/nest.webp" class="w-16 md:w-28" alt="technology-nest"
                            title="nest">


                    </div>
                    <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="700"
                        class="col-span-4 md:col-span-3 flex justify-center items-center">



                        <img height="100" width="100" src="/icons/cpp.webp" class="w-16 md:w-28" alt="technology-cpp"
                            title="cpp">



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

    .summary p,
    .exp-text {
        line-height: 2.4rem;
        font-size: v-bind(pxFontSize);
    }


}
</style>