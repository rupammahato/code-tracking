'use client'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

export default function FAQs() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-5">
      <div className="flex items-center justify-center py-10">
          <h2 className="text-4xl sm:text-4xl font-bold md:text-6xl text-black dark:text-white text-center ">
            FAQs
          </h2>
      </div>
      <div className="w-2/3 text-white mx-auto py-5 px-4 md:px-8 lg:px-10">
      <Accordion type="single" collapsible className="border-b-2 border-gray-800 w-3xl">
        <AccordionItem value="item-1" >
          <AccordionTrigger>What is Megalith, and what is its primary focus?</AccordionTrigger>
          <AccordionContent className="text-gray-400 max-w-3xl">
          Megalith is the annual civil engineering technical fest of IIT Kharagpur, primarily focused on fostering innovation, skill development, and practical knowledge in civil engineering through competitions, workshops, and guest lectures.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            What are the eligibility criteria for participating in Megalith?
          </AccordionTrigger>
          <AccordionContent className="text-gray-400 max-w-3xl">
          Students from engineering institutes across India and even professionals from the engineering industry can participate in various events, workshops, and technical sessions at Megalith.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            What are the different events and workshops offered at Megalith?
          </AccordionTrigger>
          <AccordionContent className="text-gray-400 max-w-3xl">
            Megalith offers a wide range of events and workshops, including technical paper presentations, design competitions, and workshops on the latest advancements in civil engineering.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            What prizes or recognition do participants receive?
          </AccordionTrigger>
          <AccordionContent className="text-gray-400 max-w-3xl">
          Participants can win cash prizes, certificates, and trophies in various events. Winning teams also gain recognition from industry leaders and academic institutions, enhancing their professional profiles.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      </div>
    </div>
  );
}
