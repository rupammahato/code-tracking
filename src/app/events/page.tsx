"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { useWindowSize } from "@/hooks/useWindowSize";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { DownloadIcon, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const DELAY = 7000;

const carouselItems = {
  desktop: [
    {
      id: 1,
      img: "/EventsImages/img1.jpg",
      title: "Model Exhibition",
      topic:
        "In this event, Megalith give the opportunity to the participants to bring their creative ideas to life by crafting small-scale models that represent the real-world projects",
      path: "/file1.pdf",
    },
    {
      id: 2,
      img: "/EventsImages/greencanvas.png",
      title: "Green Canvas",
      topic:
        "The purpose of Green Canvas is to encourage participants to come up with innovative and creative ways to mitigate effects of pollution and restore greenery",
      path: "/file2.pdf",
    },
    {
      id: 3,
      img: "/EventsImages/comingsoon.jpg",
      title: "COMING SOON",
      topic: "...",
      path: "/file3.pdf",
    },
    {
      id: 4,
      img: "/EventsImages/comingsoon.jpg",
      title: "COMING SOON",
      topic: "...",
      path: "/file4.pdf",
    },
    {
      id: 5,
      img: "/EventsImages/comingsoon.jpg",
      title: "COMING SOON",
      topic: "...",
      path: "/file5.pdf",
    },
    {
      id: 6,
      img: "/EventsImages/img6.jpg",
      title: "Beat-d-Euclid",
      topic:
        "This event encourages the students to showcase their immense talent in the world of geometry with their amazing power of imagination.",
      path: "/file6.pdf",
    },
    {
      id: 7,
      img: "/EventsImages/darcode.jpg",
      title: "Darkode",
      topic:
        "Megalith provides a unique opportunity to civil engineering students to showcase their coding skills while solving arduous problems in civil engineering.",
      path: "/file7.pdf",
    },
    {
      id: 8,
      img: "/EventsImages/criar.jpg",
      title: "Criar",
      topic:
        "Criar, a flagship event in Megalith, is an on-the-spot competition. Participants collaborate overnight, using provided raw materials to build structures, testing teamwork, spontaneity, and optimal material use skills.",
      path: "/file8.pdf",
    },
    {
      id: 9,
      img: "/EventsImages/comingsoon.jpg",
      title: "COMING SOON",
      topic: "...",
      path: "/file9.pdf",
    },
    {
      id: 10,
      img: "/EventsImages/comingsoon.jpg",
      title: "COMING SOON",
      topic: "...",
      path: "/file10.pdf",
    },
  ],
  mobile: [
    {
      id: 1,
      img: "/EventsImages/img1.jpg",
      title: "Model Exhibition",
      topic:
        "In this event, Megalith give the opportunity to the participants to bring their creative ideas to life by crafting small-scale models that represent the real-world projects",
    },
    {
      id: 2,
      img: "/EventsImages/greencanvas.png",
      title: "Green Canvas",
      topic:
        "The purpose of Green Canvas is to encourage participants to come up with innovative and creative ways to mitigate effects of pollution and restore greenery",
    },
    {
      id: 3,
      img: "/EventsImages/comingsoon.jpg",
      title: "COMING SOON",
      topic: "...",
    },
    {
      id: 4,
      img: "/EventsImages/comingsoon.jpg",
      title: "COMING SOON",
      topic: "...",
    },
    {
      id: 5,
      img: "/EventsImages/comingsoon.jpg",
      title: "COMING SOON",
      topic: "...",
    },
    {
      id: 6,
      img: "/EventsImages/img6.jpg",
      title: "Beat-d-Euclid",
      topic:
        "This event encourages the students to showcase their immense talent in the world of geometry with their amazing power of imagination.",
    },
    {
      id: 7,
      img: "/EventsImages/darcode.jpg",
      title: "Darkode",
      topic:
        "Megalith provides a unique opportunity to civil engineering students to showcase their coding skills while solving arduous problems in civil engineering.",
    },
    {
      id: 8,
      img: "/EventsImages/criar.jpg",
      title: "Criar",
      topic:
        "Criar, a flagship event in Megalith, is an on-the-spot competition. Participants collaborate overnight, using provided raw materials to build structures, testing teamwork, spontaneity, and optimal material use skills.",
    },
    {
      id: 9,
      img: "/EventsImages/comingsoon.jpg",
      title: "COMING SOON",
      topic: "...",
    },
    {
      id: 10,
      img: "/EventsImages/comingsoon.jpg",
      title: "COMING SOON",
      topic: "...",
    },
  ],
};

export default function Carousel() {
  const { width } = useWindowSize();
  const isMobile = width ? width < 768 : false;
  const items = isMobile ? carouselItems.mobile : carouselItems.desktop;

  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);
  const progressRef = useRef(null);
  const [slideDirection, setSlideDirection] = useState(0);

  const router = useRouter();

  const resetTimeout = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  const resetProgressBar = useCallback(() => {
    if (progressRef.current) {
      progressRef.current.style.animation = "none";
      void progressRef.current.offsetHeight; // Force reflow
      progressRef.current.style.animation = `progress ${DELAY}ms linear`;
    }
  }, []);

  useEffect(() => {
    resetTimeout();
    resetProgressBar();
    timeoutRef.current = setTimeout(() => {
      setSlideDirection(-1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, DELAY);

    return () => {
      resetTimeout();
    };
  }, [currentIndex, items.length, resetTimeout, resetProgressBar]);

  const nextSlide = () => {
    setSlideDirection(-1);
    setCurrentIndex((currentIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setSlideDirection(1);
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="relative w-full h-screen max-h-screen overflow-hidden bg-black">
      {/* Add Back Button */}
      <button
        onClick={() => router.push("/event_workshop")}
        className="absolute top-4 left-4 z-50 group flex items-center gap-2 bg-black/30 hover:bg-black/50 text-white px-4 py-2 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105"
      >
        <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
        <span>Back</span>
      </button>

      {/* Slider */}
      <div className="relative w-full h-full">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`absolute top-0 left-0 w-full h-full transition-transform duration-700 ${
              index === currentIndex
                ? "translate-x-0"
                : slideDirection === 1
                ? "translate-x-full"
                : "-translate-x-full"
            }`}
          >
            <Image
              src={item.img}
              alt={item.title}
              fill
              priority={index === 0}
              className="object-cover"
            />
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-slate-900/80 to-slate-900/50 text-[#EDE4DE] p-6 rounded-xl shadow-lg max-sm:w-10/12 text-center max-w-lg">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                {item.title}
              </h1>
              <p className="text-base md:text-xl leading-relaxed">
                {item.topic}
              </p>
              <a
                key={item.id}
                href={item.path} // Path to the item
                download // Enables the download behavior
                className="flex pt-4 justify-center items-center"
              >
                <HoverBorderGradient className="bg-gradient-to-r flex flex-row gap-3 from-[#0f0c29] to-[#2e295f]">
                  <DownloadIcon /> More Info.
                </HoverBorderGradient>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute top-0 right-0 h-full w-1 bg-transparent">
        <div
          ref={progressRef}
          className="h-full bg-orange-500"
          style={{
            animation: `progress ${DELAY}ms linear`,
          }}
        ></div>
      </div>

      {/* Arrows */}

      {!isMobile && (
        <div className="absolute bottom-16 right-4 flex gap-4">
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="group bg-gradient-to-br from-blue-700 to-blue-500 hover:from-blue-500 hover:to-blue-700 
              w-16 h-16 rounded-full flex items-center justify-center shadow-lg transform transition-transform 
              hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="white"
              className="w-8 h-8 group-hover:-translate-x-1 transition-transform"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="group bg-gradient-to-br from-orange-600 to-orange-400 hover:from-orange-400 hover:to-orange-600 
              w-16 h-16 rounded-full flex items-center justify-center shadow-lg transform transition-transform 
              hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="white"
              className="w-8 h-8 group-hover:translate-x-1 transition-transform"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      )}

      {/* Thumbnails */}
      <div
        className={`absolute ${
          isMobile
            ? "bottom-4 w-full flex overflow-x-auto scrollbar-hide"
            : "top-4 right-4 flex flex-wrap"
        } gap-4 p-2`}
        style={{
          scrollbarWidth: "none",
          WebkitOverflowScrolling: "touch", // For smooth scrolling on iOS
          msOverflowStyle: "none", // Hide scrollbar in IE/Edge
        }}
      >
        <div className={`flex gap-4 ${isMobile ? "w-max" : "flex-wrap"}`}>
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`relative shrink-0 w-12 h-12 cursor-pointer ${
                index === currentIndex
                  ? "border-2 border-[#091f46] rounded-lg"
                  : "border-2 border-transparent"
              } hover:opacity-80`}
              onClick={() => setCurrentIndex(index)}
            >
              <Image
                src={item.img}
                fill
                sizes="48px"
                alt={`Thumbnail for ${item.title}`}
                className="rounded-lg object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
