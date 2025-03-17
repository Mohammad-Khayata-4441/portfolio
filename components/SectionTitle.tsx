import Animator from "@/app/components/Animator";
import React from "react";

export default function SectionTitle(props: {
  title: React.ReactNode;
  subtitle: React.ReactNode;
}) {
  return (
    <Animator className="flex justify-center flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-800 dark:text-slate-100 capitalize">
        {props.title}
      </h1>
      <p className="text-lg max-w-screen-lg capitalize text-center text-slate-600 dark:text-slate-300 mb-12 lg:mb-24">
        {props.subtitle}
      </p>
    </Animator>
  );
}
