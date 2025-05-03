import LightsGenerator from "@/app/components/LightsGenerator";
import { BioShowcase } from "../components/Overview";
import { generatePageMetadata } from "@/lib/metaData";
import { HeroSection } from "./components/HeroSection";
import { PersonalInfoSection } from "./components/PersonalInfoSection";
import { WebDevSkillsSection } from "./components/WebDevSkillsSection";
import { AchievementsSection } from "./components/AchievementsSection";
import { ExperienceSection } from "./components/ExperienceSection";
export const metadata = generatePageMetadata({
  title: "Home",
  description:
    "Portfolio of Mohammad Khayata, a frontend developer specialized in scalable and modular web apps using React, Next.js, and modern technologies.",
  slug: "About",
});
const Home = () => {
  return (
    <div className="page portfolio-page relative z-0 flex flex-col justify-center">
      <LightsGenerator />
      <div className="page-overlay"></div>
      <main className="space-y-32">
        <HeroSection />
        <PersonalInfoSection />
        <section>
          <div className="overflow-hidden max-w-screen-md mx-auto">
            <div className="relative">
              <BioShowcase />
            </div>
          </div>
        </section>
        <WebDevSkillsSection />
        <AchievementsSection />
        <ExperienceSection />
      </main>
    </div>
  );
};

export default Home;
