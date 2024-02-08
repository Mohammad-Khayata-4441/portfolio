import LightsGenerator from '@/app/components/LightsGenerator'
import { Button } from '@nextui-org/button'
import React from 'react'
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTelegram, BsTwitterX, BsWhatsapp } from 'react-icons/bs'
import { CiAt, CiFacebook, CiInstagram, CiLinkedin, CiPaperplane, CiPhone } from 'react-icons/ci'

export default function page() {
  return (
    <div className="page flex flex-col justify-center relative z-0 ">
        <LightsGenerator></LightsGenerator>

        <div className="page-overlay"></div>

        <div className="container mx-auto ">
            <section className="lg:flex">
                <div className="flex flex-col justify-center w-full p-8 lg:px-12 xl:px-32 lg:w-1/2">
                    <h1 className="text-3xl font-semibold text-gray-800 capitalize dark:text-white lg:text-4xl">
                        Contact Me</h1>

                    <p className="mt-4 text-gray-500 dark:dark:text-gray-300">
                        If you want to work together, or ask for
                        something ... send a message or use social media links
                        below

                    </p>

                    <div className="mt-6 md:mt-8">

                        <h3 className="font-medium text-gray-600 mt-4 text-xl dark:text-white ">
                            Contact info </h3>
                        <hr className="border-text"/>

                        <ul>
                            <li className="my-4 ">
                                <span
                                    className="dark:text-gray-300 dark:hover:text-primary text-md flex gap-2 items-center hover:text-primary transition-all  ">
                                    {/* <icon name="fa:phone"></icon> */}
                                    <CiPhone></CiPhone>
                                    <a href="tel:+963956954441">
                                        +963&nbsp;956&nbsp;954&nbsp;441
                                    </a>
                                </span>

                            </li>
                            <li className="my-4 ">
                                <a href="tel:+963980379067"
                                    className="dark:text-gray-300 dark:hover:text-primary text-md flex gap-2 items-center hover:text-primary transition-all  ">
                                    {/* <icon name="fa:phone"></icon> */}
                                    <CiPhone></CiPhone>

                                    <span>
                                        +963&nbsp;980&nbsp;379&nbsp;067
                                    </span>
                                </a>
                            </li>
                            <li className="my-4 ">
                                <a href="mailto:MohammadKhayata.gm@gmail.com"
                                    className="dark:text-gray-300 dark:hover:text-primary text-md flex gap-2 items-center  transition-all  ">
                                    {/* <icon name="fa:at"></icon> */}
                                    <CiAt></CiAt>
                                    <span>
                                        MohammadKhayata.gm@gmail.com
                                    </span>
                                </a>
                            </li>
                            <li className="my-4 ">
                                <a href="mailto:Mohammad_Khayata@outlook.com"
                                    className="dark:text-gray-300 dark:hover:text-primary text-md flex gap-2 items-center hover:text-primary transition-all  ">
                                    <CiAt></CiAt>
                                    <span>
                                        Mohammad_Khayata@outlook.com
                                    </span>
                                </a>
                            </li>
                        </ul>





                        <h3 className="font-medium text-gray-600 mt-8 text-xl dark:text-white ">
                            Social Media </h3>
                        <hr className="border-text" />
                        <div className="flex mt-4 -mx-1.5 ">

                            <a className="mx-1.5 dark:hover:text-primary dark:text-gray-300 transition-colors duration-300 transform hover:primary"
                                href="https://www.linkedin.com/in/mohammad-khayata-9169801a9">
                                {/* <icon className="text-2xl mt-1" name="ri:linkedin-fill" /> */}
                                <BsLinkedin/>

                            </a>
                            <a className="mx-1.5 dark:hover:text-primary dark:text-gray-300 transition-colors duration-300 transform hover:primary"
                                href="https://github.com/Mohammad-Khayata-4441">
                                {/* <icon className="text-2xl mt-1" name="ri:github-fill" /> */}
                                <BsGithub></BsGithub>

                            </a>



                            <a className="mx-1.5 dark:hover:text-primary dark:text-gray-300 transition-colors duration-300 transform hover:primary"
                                href="https://t.me/Mohammadkh4441">

                                {/* <icon className="text-2xl mt-1" name="fa-brands:telegram-plane" /> */}
                                <BsTelegram></BsTelegram>
                            </a>

                            <a className="mx-1.5 dark:hover:text-primary dark:text-gray-300 transition-colors duration-300 transform hover:primary"
                                href="https://twitter.com/Mohammad_Kh4441">
                                {/* <icon className="text-2xl mt-1" name="mdi:twitter" /> */}
                                <BsTwitterX></BsTwitterX>

                            </a>



                            <a className="mx-1.5 dark:hover:text-primary dark:text-gray-300 transition-colors duration-300 transform hover:primary"
                                href="https://www.facebook.com/mohammed.kh.165033/">
                                {/* <icon className="text-2xl mt-1" name="fa-brands:facebook-f" /> */}
                                <BsFacebook/>

                            </a>

                            <a className="mx-1.5 dark:hover:text-primary dark:text-gray-300 transition-colors duration-300 transform hover:primary"
                                href="https://www.instagram.com/mohammad_khayat4441/">
                                {/* <icon className="text-2xl mt-1" name="mdi:instagram" /> */}
                                <BsInstagram></BsInstagram>

                            </a>
                            <a className="mx-1.5 dark:hover:text-primary dark:text-gray-300 transition-colors duration-300 transform hover:primary"
                                href="https://wa.me/+963956954441">
                                <BsWhatsapp></BsWhatsapp>

                            </a>

                        </div>



                    </div>
                </div>

                <div className="flex flex-col justify-center w-full p-8 pt-0 lg:w-1/2 lg:px-12 xl:px-24 ">
                    <form>
                        <div className="-mx-2 md:items-center md:flex">
                            <div className="flex-1 px-2">
                                <label  className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full
                                    Name</label>
                                <input name="name" id="name" type="text" placeholder="John Doe"
                                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-dark-overlay/10 backdrop-blur-2xl dark:bg-opacity-60 dark:dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 transition-all duration-700" />
                            </div>

                            <div className="flex-1 px-2 mt-4 md:mt-0">
                                <label  className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email
                                    address</label>
                                <input id="email" name="email" type="email" placeholder="johndoe@example.com"
                                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-dark-overlay/10 backdrop-blur-2xl dark:bg-opacity-60 dark:dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 transition-all duration-700" />
                            </div>

                        </div>

                        <div className="w-full mt-4">
                            <label  className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-dark-overlay/10 backdrop-blur-2xl dark:bg-opacity-60 dark:dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 transition-all duration-700"
                                placeholder="Message"></textarea>
                        </div>

                        <Button
                        
                        type="submit"
                        color='primary'
                        fullWidth
                        variant='shadow'
                        className='mt-4'
                        startContent={<CiPaperplane className='text-xl'/> }
                            >
                            Get in touch
                         </Button>
                    </form>
                </div>
            </section>
        </div>
    </div>  )
}
