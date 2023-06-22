<template>
    <div class="page ">
        <LightsGenerator></LightsGenerator>

        <div class="page-overlay"></div>

        <div class="container mx-auto ">
            <section class="lg:flex">
                <div class="flex flex-col justify-center w-full p-8 lg:px-12 xl:px-32 lg:w-1/2">
                    <h1 class="text-3xl font-semibold text-gray-800 capitalize dark:text-white lg:text-4xl">
                        Contact Me</h1>

                    <p class="mt-4 text-gray-500 dark:dark:text-gray-300">
                        If you want to work together, or ask for
                        something ... send a message or use social media links
                        below

                    </p>

                    <div class="mt-6 md:mt-8">

                        <h3 class="font-medium text-gray-600 mt-4 text-xl dark:text-white ">
                            Contact info </h3>
                        <hr class="border-text">

                        <ul>
                            <li class="my-4">
                                <span
                                    class="dark:text-gray-300 text-md flex gap-2 items-center hover:text-primary transition-all  ">
                                    <icon name="fa:phone"></icon>
                                    <a href="tel:+963956954441">
                                        +963&nbsp;956&nbsp;954&nbsp;441
                                    </a>
                                </span>

                            </li>
                            <li class="my-4">
                                <a href="tel:+963980379067"
                                    class="dark:text-gray-300 text-md flex gap-2 items-center hover:text-primary transition-all  ">
                                    <icon name="fa:phone"></icon>
                                    <span>
                                        +963&nbsp;980&nbsp;379&nbsp;067
                                    </span>
                                </a>
                            </li>
                            <li class="my-4">
                                <a href="mailto:Mohammad_Khayata@outlook.com"
                                    class="dark:text-gray-300 text-md flex gap-2 items-center hover:text-primary transition-all  ">
                                    <icon name="fa:at"></icon>
                                    <span>
                                        Mohammad_Khayata@outlook.com
                                    </span>
                                </a>
                            </li>
                            <li class="my-4">
                                <a href="mailto:MohammadKhayata.gm@gmail.com"
                                    class="dark:text-gray-300 text-md flex gap-2 items-center hover:text-primary transition-all  ">
                                    <icon name="fa:at"></icon>
                                    <span>
                                        MohammadKhayata.gm@gmail.com
                                    </span>
                                </a>
                            </li>
                        </ul>





                        <h3 class="font-medium text-gray-600 mt-8 text-xl dark:text-white ">
                            Social Media </h3>
                        <hr class="border-text">
                        <div class="flex mt-4 -mx-1.5 ">

                            <a class="mx-1.5 dark:hover:text-primary dark:text-gray-300 transition-colors duration-300 transform hover:primary"
                                href="https://t.me/Mohammadkh4441">

                                <icon class="text-2xl mt-1" name="fa-brands:telegram-plane" />
                            </a>

                            <a class="mx-1.5 dark:hover:text-primary dark:text-gray-300 transition-colors duration-300 transform hover:primary"
                                href="https://twitter.com/Mohammad_Kh4441">
                                <icon class="text-2xl mt-1" name="mdi:twitter" />

                            </a>


                            <a class="mx-1.5 dark:hover:text-primary dark:text-gray-300 transition-colors duration-300 transform hover:primary"
                                href="https://www.linkedin.com/in/mohammad-khayata-9169801a9">
                                <icon class="text-2xl mt-1" name="ri:linkedin-fill" />

                            </a>

                            <a class="mx-1.5 dark:hover:text-primary dark:text-gray-300 transition-colors duration-300 transform hover:primary"
                                href="https://www.facebook.com/mohammed.kh.165033/">
                                <icon class="text-2xl mt-1" name="fa-brands:facebook-f" />

                            </a>

                            <a class="mx-1.5 dark:hover:text-primary dark:text-gray-300 transition-colors duration-300 transform hover:primary"
                                href="https://www.instagram.com/mohammad_khayat4441/">
                                <icon class="text-2xl mt-1" name="mdi:instagram" />

                            </a>

                        </div>



                    </div>
                </div>

                <div class="flex flex-col justify-center w-full p-8 pt-0 lg:w-1/2 lg:px-12 xl:px-24 ">
                    <form>
                        <div class="-mx-2 md:items-center md:flex">
                            <div class="flex-1 px-2">
                                <label for="name" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full
                                    Name</label>
                                <input name="name" id="name" type="text" placeholder="John Doe"
                                    class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-dark-overlay/10 backdrop-blur-2xl dark:bg-opacity-60 dark:dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                            <div class="flex-1 px-2 mt-4 md:mt-0">
                                <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email
                                    address</label>
                                <input id="email" name="email" type="email" placeholder="johndoe@example.com"
                                    class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-dark-overlay/10 backdrop-blur-2xl dark:bg-opacity-60 dark:dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                        </div>

                        <div class="w-full mt-4">
                            <label for="message" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                class="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-dark-overlay/10 backdrop-blur-2xl dark:bg-opacity-60 dark:dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                placeholder="Message"></textarea>
                        </div>

                        <button
                        type="submit"
                            class="w-full text-[1rem] px-4 py-2 mt-4 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded-lg focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 ">
                            get in touch
                            <Icon name="tabler:send" size="1.5rem"></Icon>
                        </button>
                    </form>
                </div>
            </section>
        </div>
    </div>
</template>

<script lang="ts" setup>
useHead({
    title: "Contact",
    meta: [
        {
            name: "description",
            content: "Mohammad Khayata . frontend web developer ,",

        },
        {
            name: "keywords",
            content: "JavaScript, TypeScript, Css, Html, Scss, Sass, Vue, Nuxt, Nuxt3, Vue.js, Nuxt.js, developer, mohammadKhayata, mohammad khayata,mohammed, mohammad, khayata, frontend, fullstack, glass, ui, lights, node, node.js, programmer, it,",

        },
    ]
})
</script>