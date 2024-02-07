import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

interface PortfolioItem {  name: string;
  type: string[];
  description: string;
  workInformation: string;
  technologiesIcons: string[];
  gitRepo?: string;
  url?: string;
  screenShots: string[];
}

interface ProjectProps {
  item: PortfolioItem;
  index: number;
  onDetails: () => void;
}

const Project: React.FC<ProjectProps> = ({ item, index, onDetails }) => {
  const projectRef = useRef<HTMLDivElement | null>(null);

  const iconUrl = (icon: string) => `/icons/${icon}`;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (typeof window !== 'undefined' && projectRef.current) {
      const selector = `.work-item-${index}`;
      const element = projectRef.current;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          toggleActions: 'restart reverse restart reset',
        },
      });

      tl.from(`${selector}`, {
        opacity: 0,
        yPercent: 15,
        duration: 0.5,
      });

      tl.from(`${selector} .tech-icon`, {
        xPercent: 100,
        opacity: 0,
        stagger: 0.15,
      });
    }
  }, [index]);

  return (
    <div className={`grid grid-cols-12 project py-12 md:py-10 work-item-${index}`} ref={projectRef}>
      {/* Rest of your component code */}
    </div>
  );
};

export default Project;
