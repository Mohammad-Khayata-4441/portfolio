"use client";
import ReadMore from "@/app/components/ReadMore";
import Image from "next/image";
import React, { useState } from "react";
import { BsGithub, BsImage } from "react-icons/bs";
import { HiOutlineExternalLink, HiPhotograph } from "react-icons/hi";
import { type PortfolioItem } from "@/types/PortfolioItem";
import { Link } from "@/i18n";
import { Button } from "@/components/ui/button";
import { BorderTrail } from "@/components/ui/BorderTrail";
import { MacbookMockUp } from "./MacbookMocUp";
import { PhotoProvider, PhotoSlider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
export default function PortfolioItem({
  item,
}: {
  className: string;
  item: PortfolioItem;
}) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="grid grid-cols-12 project gap-2 xl:gap-4" v-if="item">
      {item?.images && item.images.length && (
        <div className="image col-span-12 xl:col-span-6  file:cursor-pointer flex justify-center">
          <div className="hidden md:block">
            <MacbookMockUp>
              <div
                className="relative rounded-lg cursor-pointer h-full"
                onClick={() => setVisible(true)}
              >
                <Image
                  height={1080}
                  width={1920}
                  className="work-cover h-full w-full object-fill rounded-lg  "
                  src={item.cover_image}
                  alt={item.name}
                ></Image>
              </div>
            </MacbookMockUp>
          </div>
          <div className="md:hidden">
            <Link
              className="relative rounded-lg h-full"
              href={`/portfolio?project=${item.key}`}
              scroll={false}
            >
              <Image
                height={1080}
                width={1920}
                className="work-cover h-full w-full object-fill rounded-lg"
                src={item.cover_image}
                alt={item.name}
              ></Image>
            </Link>
          </div>

          {/* <span className="bg-primary text-white p-2 rounded-xl relative left-4 bottom-12">{item?.screenShots.length}
              <BsImage />
              
            </span> */}
        </div>
      )}
      <div className="info col-span-12 xl:col-span-6 flex flex-col justify-center px-4 gap-4">
        <h2 className="text-3xl text-primary dark:text-white text-center xl:text-6xl font-bold">
          {item.name}
        </h2>
        <span className="  dark:text-gray-400 hidden xl:block">
          {item.type}
        </span>
        <ReadMore
          className="dark:text-gray-400 text-center  md:text-lg capitalize "
          text={item?.description}
        ></ReadMore>

        <div className="tecnologies flex items-center justify-center space-y-12">
          <div className="flex mx-auto xl:mx-12 gap-8 items-center">
            {item.project_skills?.map((t) => (
              <Image
                key={t.id}
                alt={t.id.toString()}
                className="tech-icon max-w-[40px] md:max-w-[65px]"
                width={100}
                height={100}
                src={t.skills.image}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-center  gap-2 xl:gap-4 ">
          {!!item.repo_url && (
            <Button
              asChild
              size={"lg"}
              className=" w-[220px] text-white bg-black hover:bg-gray-800"
            >
              <a href={item.repo_url}>
                <BsGithub />
                Github
              </a>
            </Button>
          )}
          {!!item.host_url && (
            <Button
              asChild
              size={"lg"}
              className="flex-grow xl:flex-grow-0 w-[220px]"
              variant={"outline"}
            >
              <a href={item.host_url} target="_blank">
                <HiOutlineExternalLink />
                Live Preview
              </a>
            </Button>
          )}
          <Button
            size={"lg"}
            color="secondary"
            onClick={() => setVisible(true)}
            className="flex-grow xl:flex-grow-0 w-[220px]"
            variant={"default"}
          >
            <HiPhotograph />
            Screen Shots
          </Button>
        </div>
      </div>

      <PhotoSlider
        images={item.images.map((item, i) => ({ src: item, key: item + i }))}
        visible={visible}
        onClose={() => setVisible(false)}
      />
    </div>
  );
}
