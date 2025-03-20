"use client";

import type React from "react";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Briefcase,
  GraduationCap,
  User,
  Target,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Animator from "./Animator";

type Section = {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: string;
};

export function BioShowcase() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set()
  );
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const bioData: Section[] = [
    {
      id: "intro",
      title: "Professional Summary",
      icon: <User className="h-5 w-5" />,
      content:
        "Experienced Front-End Developer | React.js, Vue.js | Scalable Enterprise Solutions\n\nI specialize in building enterprise-level web applications with deep expertise in React.js, Vue.js, and their ecosystems. My focus on software architecture and state management ensures scalable, maintainable, and high-performance solutions. With strong leadership and collaboration skills, I have guided teams in implementing best practices and efficient development workflows.",
    },
    {
      id: "expertise",
      title: "Technical Expertise",
      icon: <Code2 className="h-5 w-5" />,
      content:
        "My expertise extends to crafting high-quality animations and interactive UIs, delivering seamless user experiences. I excel in modular UI design, complex data handling, and multi-environment deployments, contributing to large-scale web applications, e-commerce platforms, and ERP systems.",
    },
    {
      id: "background",
      title: "Educational Background",
      icon: <GraduationCap className="h-5 w-5" />,
      content:
        "My journey in web development began during my studies at the Faculty of Informatics Engineering, where I built a strong foundation in programming, object-oriented design, algorithms, and data structures using C++ and Java. Recognizing the industry's shift towards web technologies, I transitioned to web development in 2019, mastering HTML, CSS, and JavaScript. During the 2020 quarantine, I deepened my expertise by learning Vue.js, React, and Nuxt.js.",
    },
    {
      id: "leadership",
      title: "Leadership Experience",
      icon: <Briefcase className="h-5 w-5" />,
      content:
        "As a team leader, I have successfully managed development teams on large-scale projects, including e-commerce platforms, content management systems, and educational applications. Additionally, my experience as a mentor and trainer has given me valuable insights into guiding junior developers and trainees, helping them navigate their learning journey effectively.",
    },
    {
      id: "goals",
      title: "Professional Goals",
      icon: <Target className="h-5 w-5" />,
      content:
        "My goal is to continuously evolve in the field of web development, contribute to the advancement of modern technologies, and play a role in shaping the future of web applications. I am particularly drawn to the logical and programming aspects of development rather than design, making me deeply focused on efficiency, optimization, and technical innovation.",
    },
  ];

  const toggleSection = (sectionId: string) => {
    if (expandedSections.has(sectionId)) {
      const newSet = new Set(expandedSections);
      newSet.delete(sectionId);
      setExpandedSections(newSet);
    } else {
      setExpandedSections(new Set(expandedSections).add(sectionId));
    }
  };

  // Format content with proper line breaks
  const formatContent = (content: string) => {
    return content.split("\n\n").map((paragraph, i) => (
      <p key={i} className={i > 0 ? "mt-4" : ""}>
        {paragraph}
      </p>
    ));
  };

  return (
    <div className="space-y-8 container mx-auto px-4">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold dark:text-white mb-2">
          Professional Overview
        </h1>
        <p className="text-slate-100  mx-auto">
          Explore my professional journey, expertise, and vision through the
          sections below.
        </p>
      </div>

      {/* Content Sections */}
      <div className="space-y-4">
        {bioData.map((section) => (
          <Animator key={section.id}>
            <div
              ref={(el) => (sectionRefs.current[section.id] = el) as any}
              className={cn(
                "transition-all duration-300",
                activeSection === section.id
                  ? "ring-2 ring-primary ring-opacity-50 shadow-lg"
                  : ""
              )}
            >
              <Card className="overflow-hidden glass-paper p-0">
                <div
                  className="p-4 md:p-6 cursor-pointer flex justify-between items-center"
                  onClick={() => toggleSection(section.id)}
                >
                  <div className="flex items-center">
                    <div className="bg-primary/10 p-2 rounded-full mr-3 text-seconadry">
                      {section.icon}
                    </div>
                    <h2 className="text-xl font-semibold text-slate-800 dark:text-white">
                      {section.title}
                    </h2>
                  </div>
                  <Button variant="ghost" size="icon">
                    {expandedSections.has(section.id) ? (
                      <ChevronUp className="h-5 w-5 text-seconadry" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-seconadry" />
                    )}
                  </Button>
                </div>

                <AnimatePresence>
                  {expandedSections.has(section.id) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-4 pb-4 md:px-6 md:pb-6 border-t border-seconadry/50 pt-4">
                        <div className="prose prose-slate max-w-none text-slate-100 text-lg">
                          {formatContent(section.content)}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </div>
          </Animator>
        ))}
      </div>
    </div>
  );
}
