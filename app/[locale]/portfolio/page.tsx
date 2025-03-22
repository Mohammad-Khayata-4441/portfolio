import LightsGenerator from "@/app/components/LightsGenerator";
import React from "react";
// import projects from '@/data/projects'
import { NextPage } from "next";
import { type PortfolioItem as PortfolioItemType } from "@/types/PortfolioItem";
import ProjectDetails from "./ProjectDetails";
import PortfolioItem from "./PortfolioItem";
import { createClient } from "@/utils/supabase/server";
import BlurAppearVariant1, { MotionWrapper } from "@/components/MotionWrapper";

const page: NextPage = async () => {
  const response = await fetch(
    "https://ruhmvzueumswzfdbjlto.supabase.co/rest/v1/projects?select=*",
    {
      headers: {
        apikey: process.env.SUPABASE_ANON_KEY!,
      },
    }
  );

  const data = await response.json();

  console.log("Data using fetch: ", data);
  const supabase = await createClient();

  let { data: projects, error } = await supabase
    .from("projects")
    .select<string, PortfolioItemType>(`* , project_skills(id,  skills(*))`);

  console.log("DATA : ", projects);
  console.log("error : ", error);

  return (
    <>
      <div className="page portfolio-page  relative z-0 flex flex-col ">
        <LightsGenerator />
        <div className="page-overlay "></div>
        <div className="container lg:px-12 mx-auto py-16">
          <div className=" px-4 mx-auto space-y-24">
            {projects?.map((item) => (
              <MotionWrapper key={item.id}>
                <PortfolioItem
                  item={item}
                  className="items-center"
                  data-aos-duration={1000}
                ></PortfolioItem>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default page;
