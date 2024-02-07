"use client"
import React, { useEffect, useRef, useState } from 'react';
import { useGsap } from '@/hooks/useGsap';

const LightsGenerator: React.FC = () => {
  const [lightsCount, setLightsCount] = useState(2);

  const lightsContainerRef = useRef<HTMLDivElement>()
  const devidedTo = () => 100 / lightsCount;

  useEffect(() => {
    const html = document.querySelector('html') as HTMLHtmlElement;
    const windowHeight = window.innerHeight;
    const pageLength = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      html.clientHeight as number,
      html.scrollHeight as number,
      html.offsetHeight as number
    );
    if (pageLength && windowHeight) {
      const count = Math.ceil(pageLength / windowHeight);
      setLightsCount(count > 2 ? count : 2);
    }
  }, [lightsCount,setLightsCount]);



  useGsap((gsap) => {
    if (lightsContainerRef.current) {
      const lights = lightsContainerRef.current.querySelectorAll('svg')
      console.log('should start',lights)
      lights.forEach((light) => {
        gsap.from(light, {
          scale: 0,
          opacity: 0,
          scrollTrigger: {
            trigger: light,
            toggleActions: 'play reverse play reverse',
            start:'-100'
          },
        });
      });
    }
  },[lightsContainerRef.current]);

  return (
    <div ref={lightsContainerRef as any} className="page-lights dark:block absolute top-0 left-0 h-full flex-grow-1 overflow-x-hidden overflow-hidden">
       {[...Array(lightsCount)].map((_, index) => (
        <svg
          key={index}
          width="950"
          height="696"
          viewBox="0 0 1020 696"
          style={{
            top: index === 0 ? 0 : `${devidedTo() * index}%`,
            position: 'absolute',
          }}
          className="svg-light blur-[200px] absolute z-10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="220"
            cy="576"
            rx="220"
            ry="576"
            transform="matrix(0.505321 -0.862932 -0.862932 -0.505321 896.097 828.819)"
            fillOpacity="0.2"
          />
        </svg>
      ))}
    </div>
  );
};

export default LightsGenerator;