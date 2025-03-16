"use client";
import { HiCode } from "react-icons/hi";
import { MdOutlineAutoAwesomeMotion } from "react-icons/md";
import { MdSpeed } from "react-icons/md";
import { BiDevices } from "react-icons/bi";
/* eslint-disable react/no-unescaped-entities */

import "@/styles/home.scss";
import React, { useRef } from "react";
import gsap from "gsap";
import HeroSvg from "@/app/components/HeroSvg";
import LightsGenerator from "@/app/components/LightsGenerator";

import { useGsap } from "@/hooks/useGsap";
import Link from "next/link";
import { CiGrid41, CiStar } from "react-icons/ci";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ScrollReveal from "../components/text/ScrollReveal/ScrollReveal";
import { resume } from "@/data/resume";
import ExperienceTimeline from "@/components/experience-timeline";
import InfiniteScroll from "../components/InfinityScroll";
import SpotlightCard from "../components/SpotlightCard/SpotlightCard";
import StarBorder from "../components/animations/StarBorder/StarBorder";

const Home = () => {
  const pageLights = useRef<HTMLDivElement | null>(null);
  const hi = useRef<any | null>(null);
  const name = useRef<any | null>(null);
  const text = useRef<any | null>(null);
  const group = useRef<any | null>(null);

  useGsap(() => {
    if (pageLights.current)
      gsap.from(pageLights.current?.querySelectorAll("svg"), {
        scale: 0,
        stagger: 0.8,
      });

    const tl = gsap.timeline();
    tl.from(hi.current, { yPercent: 100, duration: 0.5, opacity: 0 })
      .from(name.current, { yPercent: 100, duration: 0.5, opacity: 0 })
      .from(text.current, { yPercent: 100, duration: 0.5, opacity: 0 })
      .from(group.current, { yPercent: 100, duration: 0.5, opacity: 0 });
  }, []);

  return (
    <div className="page portfolio-page relative z-0 flex flex-col justify-center ">
      <LightsGenerator />
      <div className="page-overlay"></div>
      <main className="space-y-32">
        <section className="container overflow-visible m-auto h-screen">
          <div className="hero grid grid-cols-12 h-full items-end lg:items-center ">
            <article className="hero-text col-span-12 lg:col-span-7 self-center px-2 md:px-10 flex flex-col space-y-5 order-2 lg:order1 ">
              <p
                ref={hi}
                className="text-3xl hidden lg:block text-text dark:text-gray-300"
              >
                Hey There , I'm
              </p>
              <h1
                ref={name}
                className="text-4xl text-center lg:text-left sm:text-5xl lg:text-6xl font-bold capitalize gradient-heading"
              >
                Mohammad Khayata
              </h1>
              <h2
                ref={text}
                className="text-md sm:text-xl text-center lg:text-left text-text dark:text-white"
              >
                Front-end developer with over 4 years of experience in building
                enterprise-level web applications using Vue.js and React.js.
              </h2>
              <div
                ref={group}
                className="btn-group flex space-x-4 m-auto lg:m-0"
              >
                <Link
                  target="_blank"
                  href="https://docs.google.com/document/d/1sYRpK8tcoPdnADpcVO6mrJc3Gz3W6WGmkhvZEGo05vI/edit?usp=sharing"
                >
                  <Button size="lg" variant={"outline"}>
                    <CiStar size={24} />
                    Resume
                  </Button>
                </Link>
                <Button size="lg">
                  <CiGrid41 className="text-2xl"></CiGrid41>
                  Portfolio
                </Button>
              </div>
            </article>
            <div className="col-span-12 lg:col-span-5 order-1 lg:order-2">
              <HeroSvg />
            </div>
          </div>
        </section>

        <section className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-24 text-slate-800 dark:text-slate-100">
            Personal Information
          </h1>

          <div className="grid info grid-cols-12  ">
            <div className="img col-span-12 lg:col-span-4 w-full  flex md:justify-center">
              <div className="relative w-[300px] h-[300px]  bg-dark  rounded-4xl overflow-hidden shadow-xl border border-text mx-auto lg:mx-0">
                <Image
                  style={{ objectPosition: "0 -30px" }}
                  objectFit="cover"
                  fill
                  src="/about/personal-1.webp"
                  className="rounded-4xl "
                  alt="personal"
                ></Image>
              </div>
            </div>

            <div className="info-text col-span-12 lg:col-span-8 grid grid-cols-12 gap-y-8 lg:space-y-0 p-5 md:mt-10 lg:mt-0">
              <div className="col-span-12 md:col-span-6  flex lg:space-x-4 flex-col lg:flex-row md:items-center lg:items-start w-full">
                <span className="text-text">Full Name</span>
                <span className="dark:text-white  font-bold">
                  Mohammad Sabah Khayata
                </span>
              </div>
              <div className="col-span-12 md:col-span-6  flex lg:space-x-4 flex-col lg:flex-row md:items-center lg:items-start w-full">
                <span className="text-text">Birthday</span>
                <span className="dark:text-white  font-bold">2 May 2001</span>
              </div>

              <div className="col-span-12 md:col-span-6  flex lg:space-x-4 flex-col lg:flex-row md:items-center lg:items-start w-full">
                <span className="text-text">Nationaluty</span>
                <span className="dark:text-white  font-bold">Syrian</span>
              </div>

              <div className="col-span-12 md:col-span-6  flex lg:space-x-4 flex-col lg:flex-row md:items-center lg:items-start w-full relative">
                <span className="text-text">Primary language</span>
                <span className="dark:text-white  font-bold">
                  {" "}
                  Arabic (Native)
                </span>
              </div>
              <div className="col-span-12 md:col-span-6  flex lg:space-x-4 flex-col lg:flex-row md:items-center lg:items-start w-full">
                <span className="text-text">Current Address</span>
                <span className="dark:text-white  font-bold">
                  Aleppo / Syria
                </span>
              </div>
              <div className="col-span-12 md:col-span-6  flex lg:space-x-4 flex-col lg:flex-row md:items-center lg:items-start w-full relative">
                <span className="text-text">Secondary language</span>
                <span className="dark:text-white  font-bold">
                  {" "}
                  English (Proficient){" "}
                </span>
              </div>
              <div className="col-span-12 md:col-span-6  flex lg:space-x-4 flex-col lg:flex-row md:items-center lg:items-start w-full">
                <span className="text-text">Email</span>
                <span className="dark:text-white  font-bold">
                  <a
                    className="hover:text-primary"
                    href="mailto:mohammad_khayata@outlook.com"
                  >
                    MohammadKhayata.gm@gmail.com
                  </a>
                </span>
              </div>
              <div className="col-span-12 md:col-span-6  flex lg:space-x-4 flex-col lg:flex-row md:items-center lg:items-start w-full">
                <span className="text-text">Phone</span>
                <span className="dark:text-white  font-bold">
                  <a className="hover:text-primary" href="tel:+963956954441">
                    +963&nbsp;956&nbsp;954&nbsp;441
                  </a>
                </span>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container summary max-w-5xl mx-auto dark:dark:bg-dark-overlay dark:dark:bg-opacity-10 border border-primary dark:border-text rounded-2xl overflow-hidden  shadow-lg">
            <div className="flex items-center justify-between pr-4">
              <h3 className="text-2xl font-bold bg-primary w-max  p-2 pr-4 rounded-br-3xl text-white ">
                Overview
              </h3>
              <div className="flex items-center gap-4">
                {/* <AiOutlineFontSize className="text-[44px]" name="majesticons:font-size-line"></AiOutlineFontSize> */}
                {/* <input placeholder='font size' min="12" max="24"  type="range" /> */}
              </div>
            </div>
            <div className="relative max-h-[450px] overflow-auto">
              <article className="px-4">
                {resume.overview.split("\n").map((line, i) => (
                  <p
                    key={i}
                    className="mx-auto list-none text-gray-700 dark:text-white relative my-4 max-h-[400px] lg:max-h-max
                overflow-auto leading-8 text-lg text-justify"
                  >
                    {line}
                  </p>
                ))}
              </article>
            </div>
          </div>
        </section>

        <section>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-24 text-slate-800 dark:text-slate-100 capitalize  ">
            What will we achieve together ?
          </h1>
          <div className="container max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto gap-4">
            <SpotlightCard className="glass-paper flex flex-col gap-4">
              <BiDevices size={45} className="text-primary-foreground" />
              <h2 className="text-2xl font-bold text-primary-foreground">
                Stunning & Responsive UI{" "}
              </h2>
              <p>
                Delivering visually captivating, fully responsive web
                applications for seamless user experiences
              </p>
            </SpotlightCard>

            <SpotlightCard className="glass-paper flex flex-col gap-4">
              <MdSpeed size={45} className="text-primary-foreground" />

              <h2 className="text-2xl font-bold text-primary-foreground">
                Optimized Performance & SEO
              </h2>
              <p>
                I build websites that load quickly, rank well on search engines,
                and provide a smooth user experience without slowdowns.
              </p>
            </SpotlightCard>
            <SpotlightCard className="glass-paper flex flex-col gap-4">
              <MdOutlineAutoAwesomeMotion
                size={45}
                className="text-primary-foreground"
              />
              <h2 className="text-2xl font-bold text-primary-foreground">
                Engaging Animations & Interactive UI{" "}
              </h2>
              <p>
                I bring websites to life with smooth animations and interactive
                elements, making them more engaging and user-friendly.
              </p>
            </SpotlightCard>
            <SpotlightCard className="glass-paper flex flex-col gap-4">
              <HiCode size={45} className="text-primary-foreground" />
              <h2 className="text-2xl font-bold text-primary-foreground">
                Scalable & Clean Code{" "}
              </h2>
              <p>
                Building modular, maintainable architectures for long-term
                efficiency.
              </p>
            </SpotlightCard>
          </div>
        </section>

        <section className="min-h-screen bg-gradient-to-b">
          <div className="container mx-auto ">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-800 dark:text-slate-100">
              Professional Experience
            </h1>
            <p className="text-lg text-center mb-12 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              A journey through my professional career, showcasing projects and
              achievements across different companies.
            </p>
            <div className="container mx-auto max-w-screen-xl">
              <ExperienceTimeline />
            </div>
          </div>
        </section>

        <section>
          <div className="container"></div>
        </section>
      </main>
    </div>
  );
};

export default Home;
