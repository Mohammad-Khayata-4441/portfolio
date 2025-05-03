import Animator from "@/app/components/Animator";
import SpotlightCard from "@/app/components/SpotlightCard/SpotlightCard";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";

export const WebDevSkillsSection = () => {
  const webDevSkills = [
    { src: "/icons/vue.webp", alt: "vue", color: "rgba(65, 184, 131, 1)" },
    { src: "/icons/react.webp", alt: "react", color: "rgba(97, 218, 251, 1)" },
    { src: "/icons/nuxt.svg", alt: "nuxt", color: "rgba(0, 220, 130, 1)" },
    {
      src: "/icons/nextjs.png",
      alt: "nextjs",
      color: "rgba(255, 255, 255, 1)",
    },
    {
      src: "/icons/typescript.webp",
      alt: "typescript",
      color: "rgba(36, 150, 237, 1)",
    },
    { src: "/icons/nest.webp", alt: "nest", color: "rgba(224, 35, 78, 1)" },
    { src: "/icons/vite.webp", alt: "vite", color: "rgba(36, 150, 237, 1)" },
    { src: "/icons/docker.webp", alt: "vite", color: "rgba(36, 150, 237, 1)" },
  ];

  return (
    <section>
      <div className="overflow-hidden mx-auto grid grid-cols-1 max-w-screen-xl px-4 md:px-0">
        <SectionTitle
          title="Web Development Skills"
          subtitle="I Utilize the most powerful technologies to save your time and build modern , high-performance and scalable web applications."
        />
        <div className="features-wrapper">
          <div className="features">
            <div className="flex justify-evenly md:justify-between gap-x-2 gap-y-4 flex-wrap md:flex-nowrap">
              {webDevSkills.map((skill, index) => (
                <Animator variant="scale-down" key={index}>
                  <SpotlightCard
                    spotlightColor={skill.color as any}
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
  );
};
