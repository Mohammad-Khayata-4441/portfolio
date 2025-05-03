import Animator from "@/app/components/Animator";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";

export const PersonalInfoSection = () => (
  <section className="overflow-hidden mx-auto max-w-screen-xl px-4 md:px-0">
    <Animator>
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-24 text-slate-800 dark:text-slate-100">
        Personal Information
      </h1>
    </Animator>

    <div className="grid info grid-cols-12">
      <div className="img col-span-12 lg:col-span-4 w-full flex md:justify-center">
        <Animator
          variant="fade"
          className="relative w-[300px] h-[300px] bg-dark rounded-4xl overflow-hidden shadow-xl border border-text mx-auto lg:mx-0"
        >
          <Image
            style={{ objectPosition: "0 -45px" }}
            objectFit="cover"
            fill
            src="/about/photo.png"
            className="rounded-4xl object-cover object-bottom"
            alt="personal"
          ></Image>
        </Animator>
      </div>

      <div className="info-text col-span-12 lg:col-span-8 grid grid-cols-12 gap-y-8 lg:space-y-0 p-5 md:mt-10 lg:mt-0">
        <Animator className="col-span-12 md:col-span-6 flex lg:space-x-4 flex-col lg:flex-row md:items-center lg:items-start w-full">
          <span className="text-slate-400">Full Name</span>
          <span className="dark:text-white font-bold">
            Mohammad Sabah Khayata
          </span>
        </Animator>
        <Animator className="col-span-12 md:col-span-6 flex lg:space-x-4 flex-col lg:flex-row md:items-center lg:items-start w-full">
          <span className="text-slate-400">Birthday</span>
          <span className="dark:text-white font-bold">2 May 2001</span>
        </Animator>
        <Animator className="col-span-12 md:col-span-6 flex lg:space-x-4 flex-col lg:flex-row md:items-center lg:items-start w-full">
          <span className="text-slate-400">Nationality</span>
          <span className="dark:text-white font-bold">Syrian</span>
        </Animator>
        <Animator className="col-span-12 md:col-span-6 flex lg:space-x-4 flex-col lg:flex-row md:items-center lg:items-start w-full">
          <span className="text-slate-400">Current Address</span>
          <span className="dark:text-white font-bold">Aleppo / Syria</span>
        </Animator>
        <Animator className="col-span-12 md:col-span-6 flex lg:space-x-4 flex-col lg:flex-row md:items-center lg:items-start w-full">
          <span className="text-slate-400">Email</span>
          <span className="dark:text-white font-bold">
            <a
              className="hover:text-primary"
              href="mailto:mohammad_khayata@outlook.com"
            >
              MohammadKhayata.gm@gmail.com
            </a>
          </span>
        </Animator>
        <Animator className="col-span-12 md:col-span-6 flex lg:space-x-4 flex-col lg:flex-row md:items-center lg:items-start w-full">
          <span className="text-slate-400">Phone</span>
          <span className="dark:text-white font-bold">
            <a className="hover:text-primary" href="tel:+963956954441">
              +963&nbsp;956&nbsp;954&nbsp;441
            </a>
          </span>
        </Animator>
        <div className="col-span-12">
          <Animator>
            <Button variant={"outline"}>
              Contact <ArrowRightIcon />{" "}
            </Button>
          </Animator>
        </div>
      </div>
    </div>
  </section>
);
