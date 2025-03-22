import LightsGenerator from "@/app/components/LightsGenerator";
import { Button } from "@/components/ui/button";
import { AiOutlineMessage } from "react-icons/ai";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTelegram,
  BsWhatsapp,
} from "react-icons/bs";
import { CiAt, CiPhone } from "react-icons/ci";

export default function page() {
  async function handleSubmit(formData: FormData) {
    "use server";
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    await fetch(
      `https://api.web3forms.com/submit?access_key=${process.env.WEB3FORMS_ACCESS_KEY}&to=${process.env.NEXT_PUBLIC_EMAIL}&subject=Contact Form Submission - ${name}&message=${message}&replyTo=${email}`
    );
    // const formData = new FormData(event.target);
    // const response = await sendEmail(formData);
    // setStatus(response.message);
  }
  return (
    <div className="page flex flex-col justify-center relative z-0 ">
      <LightsGenerator></LightsGenerator>

      <div className="page-overlay"></div>

      <div className="container mx-auto ">
        <section className="lg:flex">
          <div className="flex flex-col justify-center w-full p-8 lg:px-12 xl:px-32 lg:w-1/2">
            <h1 className="text-3xl font-semibold text-gray-800 capitalize dark:text-white lg:text-4xl">
              Contact Me
            </h1>

            <p className="mt-4 text-gray-500 dark:dark:text-gray-300">
              I&apos;d love to connect and collaborate! Feel free to send me a
              message or reach out through my social media links below 🚀.
            </p>

            <div className="mt-6 md:mt-8">
              <h3 className="font-medium text-gray-600 mt-4 text-xl dark:text-white ">
                Contact info{" "}
              </h3>
              <hr className="border-text" />

              <ul>
                <li className="my-4 ">
                  <span className="dark:text-gray-300 dark:hover:text-primary text-md flex gap-2 items-center hover:text-primary transition-all  ">
                    {/* <icon name="fa:phone"></icon> */}
                    <CiPhone></CiPhone>
                    <a href="tel:+963956954441">
                      +963&nbsp;956&nbsp;954&nbsp;441
                    </a>
                  </span>
                </li>

                <li className="my-4 ">
                  <a
                    href="mailto:MohammadKhayata.gm@gmail.com"
                    className="dark:text-gray-300 dark:hover:text-primary text-md flex gap-2 items-center  transition-all  "
                  >
                    {/* <icon name="fa:at"></icon> */}
                    <CiAt></CiAt>
                    <span>MohammadKhayata.gm@gmail.com</span>
                  </a>
                </li>
              </ul>

              <h3 className="font-medium text-gray-600 mt-8 text-xl dark:text-white ">
                Social Media{" "}
              </h3>
              <hr className="border-text" />
              <div className="flex mt-4 -mx-1.5 ">
                <a
                  className="mx-1.5 dark:hover:text-primary dark:text-gray-300 transition-colors duration-300 transform hover:primary"
                  href="https://www.linkedin.com/in/mohammad-khayata-9169801a9"
                >
                  {/* <icon className="text-2xl mt-1" name="ri:linkedin-fill" /> */}
                  <BsLinkedin />
                </a>
                <a
                  className="mx-1.5 dark:hover:text-primary dark:text-gray-300 transition-colors duration-300 transform hover:primary"
                  href="https://github.com/Mohammad-Khayata-4441"
                >
                  {/* <icon className="text-2xl mt-1" name="ri:github-fill" /> */}
                  <BsGithub></BsGithub>
                </a>

                <a
                  className="mx-1.5 dark:hover:text-primary dark:text-gray-300 transition-colors duration-300 transform hover:primary"
                  href="https://t.me/Mohammadkh4441"
                >
                  {/* <icon className="text-2xl mt-1" name="fa-brands:telegram-plane" /> */}
                  <BsTelegram></BsTelegram>
                </a>

                <a
                  className="mx-1.5 dark:hover:text-primary dark:text-gray-300 transition-colors duration-300 transform hover:primary"
                  href="https://www.facebook.com/mohammed.kh.165033/"
                >
                  {/* <icon className="text-2xl mt-1" name="fa-brands:facebook-f" /> */}
                  <BsFacebook />
                </a>

                <a
                  className="mx-1.5 dark:hover:text-primary dark:text-gray-300 transition-colors duration-300 transform hover:primary"
                  href="https://www.instagram.com/mohammad_khayat4441/"
                >
                  {/* <icon className="text-2xl mt-1" name="mdi:instagram" /> */}
                  <BsInstagram></BsInstagram>
                </a>
                <a
                  className="mx-1.5 dark:hover:text-primary dark:text-gray-300 transition-colors duration-300 transform hover:primary"
                  href="https://wa.me/+963956954441"
                >
                  <BsWhatsapp></BsWhatsapp>
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center w-full p-8 pt-0 lg:w-1/2 lg:px-12 xl:px-24 ">
            <form action={"https://api.web3forms.com/submit"} method="POST">
              <div className="-mx-2 md:items-center md:flex">
                <div className="flex-1 px-2">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Full Name
                  </label>
                  <input
                    name="name"
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-dark-overlay/10 backdrop-blur-2xl dark:bg-opacity-60 dark:dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 transition-all duration-700"
                  />
                </div>

                <div className="flex-1 px-2 mt-4 md:mt-0">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="johndoe@example.com"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-dark-overlay/10 backdrop-blur-2xl dark:bg-opacity-60 dark:dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 transition-all duration-700"
                  />
                </div>
              </div>

              <div className="w-full mt-4">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="
                                block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-dark-overlay/10 backdrop-blur-2xl dark:bg-opacity-60 dark:dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 transition-all duration-700"
                  placeholder="Message"
                ></textarea>
              </div>
              <input
                type="hidden"
                name="redirect"
                value="https://web3forms.com/success"
              />
              <input
                type="hidden"
                name="access_key"
                value={process.env.WEB3_FORM_KEY}
              />

              <Button type="submit" className="mt-4 hover:bg-seconadry/80">
                <AiOutlineMessage></AiOutlineMessage>
                Send Message
              </Button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
