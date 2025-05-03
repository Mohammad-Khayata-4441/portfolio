import Animator from "@/app/components/Animator";
import HeroSvg from "@/app/components/HeroSvg";
import GradientText from "@/app/components/text/GradientText/GradientText";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n";
import { CiStar, CiGrid41 } from "react-icons/ci";

export const HeroSection = () => (
  <section className="overflow-hidden h-screen flex items-center" id="hero">
    <div className="hero container mx-auto px-4 max-w-screen-xl flex flex-wrap-reverse lg:flex-nowrap items-center justify-center flex-col-reverse lg:flex-row">
      <div className="hero-text grow flex flex-col justify-center items-center lg:items-start lg:justify-start space-y-4">
        <Animator>
          <p className="text-3xl hidden lg:block text-slate-400 dark:text-gray-300">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Hey There , I'm
          </p>
        </Animator>
        <div className="hidden lg:block my-0">
          <Animator>
            <GradientText className="text-center lg:text-left font-bold capitalize">
              Mohammad Khayata
            </GradientText>
          </Animator>
        </div>
        <div className="lg:hidden">
          <div className="gradient-heading lg:hidden text-3xl font-bold text-center">
            Mohammad Khayata
          </div>
        </div>
        <Animator>
          <h2 className="text-md sm:text-xl text-center lg:text-left text-slate-400 dark:text-white">
            Front-end developer with over 4 years of experience in building
            enterprise-level web applications using Vue.js and React.js.
          </h2>
        </Animator>
        <Animator>
          <div className="btn-group flex space-x-4 m-auto lg:m-0">
            <Link
              target="_blank"
              href="https://docs.google.com/document/d/1gkeG0JCpvpfxjXxXd64PqcON_FVlfosGOxHVa52_wkY/edit?usp=sharing"
            >
              <Button
                className="w-full lg:w-auto"
                size="lg"
                variant={"outline"}
              >
                <CiStar size={24} />
                Resume
              </Button>
            </Link>
            <Button asChild className="w-full md:w-auto" size="lg">
              <Link href="/portfolio">
                <CiGrid41 className="text-2xl"></CiGrid41>
                Portfolio
              </Link>
            </Button>
          </div>
        </Animator>
      </div>
      <div className="basis-[100px]">
        <HeroSvg />
      </div>
    </div>
  </section>
);
