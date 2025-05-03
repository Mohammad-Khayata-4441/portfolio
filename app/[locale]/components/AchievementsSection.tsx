import Animator from "@/app/components/Animator";
import SpotlightCard from "@/app/components/SpotlightCard/SpotlightCard";
import SectionTitle from "@/components/SectionTitle";
import { BiDevices } from "react-icons/bi";
import { HiCode } from "react-icons/hi";
import { MdSpeed, MdOutlineAutoAwesomeMotion } from "react-icons/md";

export const AchievementsSection = () => (
  <section>
    <div className="container max-w-screen-xl px-4 md:px-0 mx-auto">
      <SectionTitle
        title="What will we achieve together?"
        subtitle="Elevating your web presence with high-performance, visually stunning, and engaging experiences."
      />
      <div className="overflow-hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto gap-4">
        {[
          {
            icon: <BiDevices size={45} className="text-primary-foreground" />,
            title: "Stunning & Responsive UI",
            description:
              "Delivering visually captivating, fully responsive web applications for seamless user experiences.",
          },
          {
            icon: <MdSpeed size={45} className="text-primary-foreground" />,
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
            icon: <HiCode size={45} className="text-primary-foreground" />,
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
);
