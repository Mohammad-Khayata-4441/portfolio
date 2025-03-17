"use client";
import { HiCode } from "react-icons/hi";
import { MdOutlineAutoAwesomeMotion } from "react-icons/md";
import { MdSpeed } from "react-icons/md";
import { BiDevices } from "react-icons/bi";
/* eslint-disable react/no-unescaped-entities */

import "@/styles/home.scss";
import React from "react";
import HeroSvg from "@/app/components/HeroSvg";
import LightsGenerator from "@/app/components/LightsGenerator";
import { motion } from "motion/react";
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
import GradientText from "../components/text/GradientText/GradientText";
import SlideUpText from "../components/SlideUpText";
import { ArrowRightIcon, ArrowUp, ArrowUpRightIcon } from "lucide-react";
import ScrollVelocity from "../components/text/ScrollVelocity/ScrollVelocity";
import Animator from "../components/Animator";
import DashedPattern from "@/components/ui/DashedPattern";
import { BioShowcase } from "../components/Overview";
import SectionTitle from "@/components/SectionTitle";

const Home = () => {
  const webDevSkills = [
    { src: "/icons/vue.webp", alt: "vue", color: "rgba(65, 184, 131, 1)" }, // #41B883
    { src: "/icons/react.webp", alt: "react", color: "rgba(97, 218, 251, 1)" }, // #61DAFB
    { src: "/icons/nuxt.svg", alt: "nuxt", color: "rgba(0, 220, 130, 1)" }, // #00DC82
    {
      src: "/icons/nextjs.png",
      alt: "nextjs",
      color: "rgba(255, 255, 255, 1)",
    }, // #FFFFFF
    {
      src: "/icons/typescript.webp",
      alt: "typescript",
      color: "rgba(36, 150, 237, 1)",
    },
    { src: "/icons/nest.webp", alt: "nest", color: "rgba(224, 35, 78, 1)" }, // #E0234E
    { src: "/icons/vite.webp", alt: "vite", color: "rgba(36, 150, 237, 1)" },
    { src: "/icons/docker.webp", alt: "vite", color: "rgba(36, 150, 237, 1)" },
  ];

  return (
    <div className="page portfolio-page relative z-0 flex flex-col justify-center ">
      <LightsGenerator />
      <div className="page-overlay"></div>
      <main className="space-y-32">
        <section className="overflow-hidden h-screen flex items-center">
          <div
            className="hero 
            container 
            mx-auto 
            px-4
            max-w-screen-xl 
            flex 
            flex-wrap-reverse
            lg:flex-nowrap
           items-center
           justify-center
           flex-col-reverse lg:flex-row
            "
          >
            <div
              className="
            hero-text
            grow
            flex
            flex-col
            justify-center
            items-center
            lg:items-start
            lg:justify-start
            space-y-4
            
            "
            >
              <Animator>
                <p className="text-3xl hidden lg:block text-slate-400 dark:text-gray-300">
                  Hey There , I'm
                </p>
              </Animator>
              <div className="hidden lg:block my-0">
                <Animator>
                  <GradientText className=" text-center lg:text-left  font-bold capitalize ">
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
                  Front-end developer with over 4 years of experience in
                  building enterprise-level web applications using Vue.js and
                  React.js.
                </h2>
              </Animator>
              <Animator>
                <div className="btn-group flex space-x-4 m-auto lg:m-0">
                  <Link
                    target="_blank"
                    href="https://docs.google.com/document/d/1sYRpK8tcoPdnADpcVO6mrJc3Gz3W6WGmkhvZEGo05vI/edit?usp=sharing"
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
                  <Button className="w-full md:w-auto" size="lg">
                    <CiGrid41 className="text-2xl"></CiGrid41>
                    Portfolio
                  </Button>
                </div>
              </Animator>
            </div>
            <div className="basis-[100px]">
              <HeroSvg />
            </div>
          </div>
        </section>

        <section className=" overflow-hidden mx-auto max-w-screen-xl px-4 md:px-0">
          <Animator>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-24 text-slate-800 dark:text-slate-100">
              Personal Information
            </h1>
          </Animator>

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
              <Animator className="col-span-12 md:col-span-6  flex lg:space-x-4 flex-col lg:flex-row md:items-center lg:items-start w-full">
                <span className="text-slate-400">Full Name</span>
                <span className="dark:text-white  font-bold">
                  Mohammad Sabah Khayata
                </span>
              </Animator>
              <Animator className="col-span-12 md:col-span-6  flex lg:space-x-4 flex-col lg:flex-row md:items-center lg:items-start w-full">
                <span className="text-slate-400">Birthday</span>
                <span className="dark:text-white  font-bold">2 May 2001</span>
              </Animator>
              <Animator className="col-span-12 md:col-span-6  flex lg:space-x-4 flex-col lg:flex-row md:items-center lg:items-start w-full">
                <span className="text-slate-400">Nationality</span>
                <span className="dark:text-white  font-bold">Syrian</span>
              </Animator>
              <Animator className="col-span-12 md:col-span-6  flex lg:space-x-4 flex-col lg:flex-row md:items-center lg:items-start w-full">
                <span className="text-slate-400">Current Address</span>
                <span className="dark:text-white  font-bold">
                  Aleppo / Syria
                </span>
              </Animator>
              <Animator className="col-span-12 md:col-span-6  flex lg:space-x-4 flex-col lg:flex-row md:items-center lg:items-start w-full">
                <span className="text-slate-400">Email</span>
                <span className="dark:text-white  font-bold">
                  <a
                    className="hover:text-primary"
                    href="mailto:mohammad_khayata@outlook.com"
                  >
                    MohammadKhayata.gm@gmail.com
                  </a>
                </span>
              </Animator>
              <Animator className="col-span-12 md:col-span-6  flex lg:space-x-4 flex-col lg:flex-row md:items-center lg:items-start w-full">
                <span className="text-slate-400">Phone</span>
                <span className="dark:text-white  font-bold">
                  <a className="hover:text-primary" href="tel:+963956954441">
                    +963&nbsp;956&nbsp;954&nbsp;441
                  </a>
                </span>
              </Animator>
              <div className="col-span-12">
                <Animator>
                  <Button variant={"outline"}>
                    Contact <ArrowRightIcon />{" "}
                  </Button>
                </Animator>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className=" overflow-hidden max-w-screen-md mx-auto">
            <div className="relative">
              <BioShowcase />
            </div>
          </div>
        </section>

        <section>
          <div className=" overflow-hidden mx-auto grid grid-cols-1 max-w-screen-xl px-4 md:px-0">
            <SectionTitle
              title="Web Development Skills"
              subtitle="I Utilize the most powerful technologies to save your time and build modern , high-performance and scalable web applications."
            ></SectionTitle>
            <div className="features-wrapper">
              {/* Frontend Skills */}
              <div className="features">
                <div className="flex justify-evenly md:justify-between gap-y-4  flex-wrap md:flex-nowrap">
                  {webDevSkills.map((skill, index) => (
                    <Animator variant="scale-down" key={index}>
                      <SpotlightCard
                        spotlightColor={skill.color as any}
                        key={index}
                        className="glass-paper p-8 rounded-xl flex justify-center items-center"
                      >
                        <div className="relative aspect-square p-8">
                          <Image
                            className="object-contain"
                            src={skill.src}
                            alt={skill.alt}
                            fill
                          />
                        </div>
                      </SpotlightCard>
                    </Animator>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div
            className="container
          max-w-screen-xl px-4 md:px-0 mx-auto
          "
          >
            <SectionTitle
              title="What will we achieve together?"
              subtitle="Elevating your web presence with high-performance, visually stunning, and engaging experiences."
            ></SectionTitle>
            <div className=" overflow-hidden  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto gap-4">
              {[
                {
                  icon: (
                    <BiDevices size={45} className="text-primary-foreground" />
                  ),
                  title: "Stunning & Responsive UI",
                  description:
                    "Delivering visually captivating, fully responsive web applications for seamless user experiences.",
                },
                {
                  icon: (
                    <MdSpeed size={45} className="text-primary-foreground" />
                  ),
                  title: "Optimized Performance & SEO",
                  description:
                    "I build websites that load quickly, rank well on search engines, and provide a smooth user experience without slowdowns.",
                },
                {
                  icon: (
                    <MdOutlineAutoAwesomeMotion
                      size={45}
                      className="text-primary-foreground"
                    />
                  ),
                  title: "Engaging Animations & Interactive UI",
                  description:
                    "I bring websites to life with smooth animations and interactive elements, making them more engaging and user-friendly.",
                },
                {
                  icon: (
                    <HiCode size={45} className="text-primary-foreground" />
                  ),
                  title: "Scalable & Clean Code",
                  description:
                    "Building modular, maintainable architectures for long-term efficiency.",
                },
              ].map((item, index) => (
                <Animator className="h-full" variant="scale-up" key={index}>
                  <SpotlightCard className="glass-paper flex flex-col gap-4 h-full">
                    {item.icon}
                    <h2 className="text-2xl font-bold text-primary-foreground">
                      {item.title}
                    </h2>
                    <p>{item.description}</p>
                  </SpotlightCard>
                </Animator>
              ))}
            </div>
          </div>
        </section>

        <section className="min-h-screen bg-gradient-to-b">
          <div className=" overflow-hidden max-w-screen-xl px-4 md:px-0 mx-auto ">
            <SectionTitle
              title="Professional Experience"
              subtitle="A journey through my professional career, showcasing projects and achievements across different companies."
            />

            <div className=" overflow-hidden mx-auto max-w-screen-xl px-4 md:px-0">
              <ExperienceTimeline />
            </div>
          </div>
          <div className="flex justify-center">
            <Button asChild variant={"outline"} className="mx-auto text-center">
              <a href={"#"}>
                Go Back To Top <ArrowUp />{" "}
              </a>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
