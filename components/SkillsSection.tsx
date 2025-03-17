import Animator from "@/app/components/Animator";
import SpotlightCard from "@/app/components/SpotlightCard/SpotlightCard";
import { resume } from "@/data/resume";
import Image from "next/image";

const SkillsSection = () => {
  return (
    <section className="container max-w-screen-xl">
      <Animator>
        <h3 className="text-center my-8 text-primary-foreground text-3xl font-bold">
          Web Development Skills
        </h3>
      </Animator>
      <div className="flex justify-between gap-8 px-8">
        {resume.webDevSkills.map((skill, index) => (
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
    </section>
  );
};

export default SkillsSection;
