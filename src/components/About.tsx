"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function About() {
  return (
    <div className="flex flex-col w-full justify-center items-center min-h-screen overflow-hidden dark:bg-black bg-white">
        <div className="flex items-center justify-center pt-10">
          <h2 className="text-4xl sm:text-4xl font-bold md:text-6xl text-black dark:text-white text-center ">
            About Us
          </h2>
        </div>
      <div className="h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
    "Indian Institute of Technology Kharagpur (IIT Kharagpur) is an institute of technology and research university and an autonomous institute, established by the Government of India in Kharagpur, West Bengal. Established in 1951, the institute is the first of the IITs to be established and is recognised as an Institute of National Importance. In 2019 it was awarded the status of Institute of Eminence by the Government of India. IIT Kharagpur is ranked among the most prestigious academic institutions in India.",
    title: "IIT KHARAGPUR",
    name: "Excellence in action is Yoga",
  },
  {
    quote:
      "Megalith is the annual technical fest of IIT Kharagpur. It is a three-day event that showcases the latest advancements in technology and engineering. The fest is open to all students and is a great opportunity to learn and network. The event features a variety of competitions, workshops, and exhibitions focused on civil engineering and related fields.",
    name: "",
    title: "MEGALITH",
  },
  {
    quote: "The Megalith Internship Program (MIP) serves as a vital link between students, colleges, and our campus, acting as a key channel for communication and promotion. It offers a rewarding opportunity, both personally and professionally. By participating in the program, students can enhance their personalities while developing valuable managerial skills, making it a great asset for future career prospects.",
    name: "IIT KHARAGPUR",
    title: "MEGALITH INTERNSHIP PROGRAM",
  },
];
