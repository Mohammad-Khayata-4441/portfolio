"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  Briefcase,
  Calendar,
  MapPin,
  ExternalLink,
  CheckCircle,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BorderTrail } from "./ui/BorderTrail";
import { resume } from "@/data/resume";

export default function ExperienceTimeline() {
  const [expandedCompany, setExpandedCompany] = useState<string | null>(null);

  const toggleCompany = (company: string) => {
    setExpandedCompany(expandedCompany === company ? null : company);
  };

  return (
    <div className="relative">
      {/* Timeline line */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-300 dark:bg-slate-700 transform -translate-x-1/2 md:translate-x-0 -z-10"
      ></motion.div>

      {resume.experience.map((experience, index) => (
        <motion.div
          key={experience.company}
          initial={{ x: index % 2 === 0 ? "50%" : "-50%", scale: 0 }}
          whileInView={{ x: "0%", scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className={`relative mb-12 md:mb-16 ${
            index % 2 !== 0
              ? "md:pl-12 md:ml-auto md:ml-1/2"
              : "md:pr-12 md:mr-auto md:mr-1/2"
          } md:w-1/2 `}
        >
          {/* Timeline dot */}
          <div
            className={`h-[1px] hidden md:block border-dashed w-12 absolute glass-paper top-1/2 ${
              index % 2 == 0 ? "right-0" : "left-0"
            }`}
          ></div>

          <Card
            className="
              w-full
              glass-paper 
              md:ml-0 overflow-hidden 
          shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl font-bold text-white">
                    {experience.company}
                  </CardTitle>
                  <CardDescription className="text-lg font-medium text-slate-700 dark:text-slate-300">
                    {experience.position}
                  </CardDescription>
                </div>
                <Badge
                  variant="outline"
                  className="flex border-primary text-xs text-primary items-center gap-1 px-2 py-1"
                >
                  <Calendar className="h-3.5 w-3.5" />
                  <span>
                    {experience.startYear} - {experience.endYear}
                  </span>
                </Badge>
              </div>
              {experience.location && (
                <div className="flex items-center mt-2 text-sm text-slate-500 dark:text-slate-400">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{experience.location}</span>
                </div>
              )}
            </CardHeader>

            <CardContent className="pt-4">
              <Accordion type="single" collapsible className="w-full">
                {experience.projects.map((project, projectIndex) => (
                  <AccordionItem
                    key={projectIndex}
                    className="border-none bg-seconadry/5 px-4 rounded mb-2"
                    value={`${experience.company}-${projectIndex}`}
                  >
                    <AccordionTrigger className="text-left  font-medium hover:no-underline">
                      <div className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-2 text-seconadry" />
                        <span>{project.title}</span>
                        {project.url && (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 text-primary hover:text-primary/80"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        )}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="mt-2 space-y-1.5 text-sm">
                        {project.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-600 dark:text-slate-300">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
