"use client"
import Image from "next/image";
import Link from 'next/link';
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import green2 from "./assets/green2.png";
import model2 from "./assets/Model2.jpg";
import photo2 from "./assets/photo2.jpg";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

export default function Events() {
  const data = [
    {
      title: "Green Canvas",
      content: (
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-10">
          <div>
            <Image
              src={green2}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              The purpose of Green Canvas is to encourage participants to come
              up with innovative and creative ways to mitigate effects of
              pollution and restore greenery
            </p>
            <Link href="/events">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 transition duration-300 ease-in-out transform hover:bg-gray-200 dark:hover:bg-gray-800 hover:scale-105 active:scale-100"
            >
              <span>More Details</span>
            </HoverBorderGradient>
            </Link>
          </div>
        </div>
      ),
    },
    {
      title: "Model Exhibition",
      content: (
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-10">
          <div>
          <Image
              src={model2}
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
          <div className="flex flex-col gap-4">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            In this event, Megalith give the opportunity to the participants to
            bring their creative ideas to life by crafting small-scale models
            that represent the real-world projects
          </p>
          <Link href="/events">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 transition duration-300 ease-in-out transform hover:bg-gray-200 dark:hover:bg-gray-800 hover:scale-105 active:scale-100"
            >
              <span>More Details</span>
            </HoverBorderGradient>
            </Link>
          </div>
        </div>
      ),
    },
    {
      title: "Photography",
      content: (
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-10">
          <div>
          <Image
              src={photo2}
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
          <div className="flex flex-col gap-4">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            This event encourages the participants to showcase their
            photographic skills that help them capture cherishable moments and
            to uplift their creative and imaginative skills
          </p>
          <Link href="/events">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 transition duration-300 ease-in-out transform hover:bg-gray-200 dark:hover:bg-gray-800 hover:scale-105 active:scale-100"
            >
              <span>More Details</span>
            </HoverBorderGradient>
            </Link>
          </div>
        </div>       
      ),
    },
  ];
  return (
    <div className="w-full flex flex-col items-center justify-center py-0 bg-white dark:bg-black dark:text-white">
      <div className="max-w-7xl mx-auto bg-white dark:bg-black">
        <h2 className="text-4xl sm:text-4xl font-bold md:text-7xl text-black dark:bg-black bg-white dark:text-white text-center max-w-4xl">
          Events
        </h2>
      </div>
      <Timeline data={data} />
      <Link href="/events">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 transition duration-300 ease-in-out transform hover:bg-gray-200 dark:hover:bg-gray-800 hover:scale-105 active:scale-100"
      >
        <span>Other Events</span>
      </HoverBorderGradient>
      </Link>
    </div>
  );
}
