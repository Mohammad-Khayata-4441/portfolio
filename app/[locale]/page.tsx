/* eslint-disable react/no-unescaped-entities */

"use client"
import '@/styles/home.scss'
import React, { useRef } from 'react';
import gsap from 'gsap';
import HeroSvg from '@/app/components/HeroSvg';
import LightsGenerator from '@/app/components/LightsGenerator';

import { useGsap } from '@/hooks/useGsap';
import { Button, Input, Link as UiLink } from '@nextui-org/react';
import Link from 'next/link';
import { CiGrid41, CiGrid42, CiMemoPad, CiStar } from 'react-icons/ci';
import { Metadata } from 'next';
import HomePageAnimator from './components/HomePageAnimator';


const Home = () => {
  const pageLights = useRef<HTMLDivElement | null>(null);
  const hi = useRef<any | null>(null);
  const name = useRef<any | null>(null);
  const text = useRef<any | null>(null);
  const group = useRef<any | null>(null);

  useGsap(() => {
    if (pageLights.current)
      gsap.from(pageLights.current?.querySelectorAll('svg'), {
        scale: 0,
        stagger: 0.8,
      });

    const tl = gsap.timeline();
    tl.from(hi.current, { y: -1000, duration: 0.7, opacity: 0 })
      .from(name.current, { x: -1000, duration: 0.7, opacity: 0 })
      .from(text.current, { y: -50, duration: 0.7, opacity: 0 })
      .from(group.current, { y: -50, duration: 0.7, opacity: 0 });
  },[]);

  return (
    <div className="page portfolio-page  relative z-0 flex flex-col justify-center ">
    <LightsGenerator />
    <HomePageAnimator/>
      <div className="page-overlay"></div>
      <main className="h-full">
        <div className="container overflow-visible m-auto h-full">
          <div className="hero grid grid-cols-12 h-full items-end lg:items-center ">
            <article className="hero-text col-span-12 lg:col-span-7 self-center px-2 md:px-10 flex flex-col space-y-5 order-2 lg:order1 ">
              <p ref={hi} className="text-3xl hidden lg:block text-text dark:text-gray-300">
                Hey There , I'm
              </p>
              <h1
                ref={name}
                className="text-4xl text-center lg:text-left sm:text-5xl lg:text-6xl font-bold capitalize gradiant-heading"
              >
                Mohammad Khayata
              </h1>
              <h2 ref={text} className="text-md sm:text-xl text-center lg:text-left text-text dark:text-white">
                FullStack JavaScript/TypeScript Developer <br className="md:hidden" />
                Specialist in Frontend Development With{' '}
                <span className="text-primary font-bold">3 Years Of Experience </span> , And I'm a Software
                Engineering Student
              </h2>
              <div ref={group} className="btn-group flex space-x-4 m-auto lg:m-0">
                <UiLink
                  target="_blank"
                  href="https://docs.google.com/document/d/1sYRpK8tcoPdnADpcVO6mrJc3Gz3W6WGmkhvZEGo05vI/edit?usp=sharing"

                >
                  <Button
                    variant='shadow'
                    size='lg'
                    color='primary'
                    startContent={
                      <CiStar className='text-2xl' />

                    }
                  >
                    Resume
                  </Button>
                </UiLink>
                <Button
                  color='secondary'
                  size='lg'
                  as={Link}
                  variant='flat'
                  href="/portfolio"
                  startContent={<CiGrid41 className='text-2xl'></CiGrid41>}
                >
                  Portfolio
                </Button>
              </div>
            </article>
            <div className="col-span-12 lg:col-span-5 order-1 lg:order-2">
              <HeroSvg />
            </div>
          </div>
        </div>
      </main>

    </div>
  );
};

export default Home;
