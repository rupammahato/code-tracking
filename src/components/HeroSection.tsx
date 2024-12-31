"use client";
import MemoizedStars from "./ui/MemoizedStars";
import { Spotlight } from "./ui/Spotlight";
import ClientOnly from './ClientOnly';
import './HeroSection.css'; // Import the CSS file
import Image from "next/image";
import HeroLogo from "./assets/HeroLogo.png"
import { Button } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
export default function HeroSection() {
  return (
    <div className="w-full hero-background mx-auto rounded-md h-screen flex flex-col items-center justify-center overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-[10%] md:-top-20"
          fill="#460b09"
        />
          <div className="flex items-center flex-col gap-0 justify-center px-2 md:px-10 py-0 w-full h-full min-h-screen">
            <Image src={HeroLogo} alt="" className=" w-[38rem] mt-[7.5rem] max-md:mt-[11rem] " />
            {/* <h2 className="text-gray-400 text-[4rem] sm:text-[4rem] md:text-[7rem] font-canilari font-bold text-center">
              <span className="text-red-600 m-0">MEGA</span>LITH{" "}
            <span className="m-0 text-[5rem] sm:text-[4rem] md:text-[8.5rem] text-gray-100">
              2025
            </span>
            </h2>
            <div className=" overflow-hidden mt-0">
            <p className="text-base sm:text-3xl md:text-[2rem] flex flex-col items-center justify-center gap-5 py-2 font-bold bg-clip-text text-center text-gray-400 bg-transparent">
              Annual Civil Engineering Technical Fest <br />{" "}
              <span className="">IIT Kharagpur</span>
            </p>
            </div> */}
            <div className="flex w-3/5 pl-[1.55rem] max-sm:pl-[2.3rem] flex-col pt-14 items-center pointer-events-auto justify-center gap-6">
            
              <Button className="text-[#460b09] cursor-pointer max-sm:text-base z-10 w-[10.3rem] text-xl bg-[#cdc98a] rounded-full px-8 py-[0px] m-0 border-5 font-semibold border-[#460b09]" >
                  Schedule
              </Button>

              <Button  className="text-[#460b09] pointer-events-auto z-10 bg-[#cdc98a] max-sm:text-base w-[15rem] max-sm:w-[15.7rem] cursor-pointer text-[1.20rem] rounded-full px-8 py-5 border-5 font-semibold border-[#460b09]" >
                <Link href="/registration" className="text-[#460b09] hover:text-[#460b09] max-sm:text-base w-[15rem] max-sm:w-[15.7rem] cursor-pointer text-[1.3rem] text-center flex justify-center " >
                  Register Now
                </Link>  
              </Button>
            
              {/* <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
              >
                <span>Register</span>
              </HoverBorderGradient>
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
              >
                <span>Schedule</span>
              </HoverBorderGradient> */}
            </div>
          </div>
          <ClientOnly>
            <MemoizedStars />
          </ClientOnly>
    </div>
  );
}
