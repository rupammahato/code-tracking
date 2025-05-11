"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const Page = () => {
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-[#091F46] to-[#37729C] text-[#E9E4DE]">
      <button
        onClick={() => router.push("/")}
        className="absolute top-4 left-4 group flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
      >
        <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
        <span>Back</span>
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          className="p-8 bg-white bg-opacity-10 rounded-lg shadow-lg cursor-pointer hover:bg-opacity-20 transition transform hover:scale-105 duration-300 ease-in-out w-80 h-60"
          onClick={() => navigateTo("/events")}
        >
          <h2 className="text-3xl font-bold mb-4">Events</h2>
          <p className="text-lg">
            Discover our exciting events and join us for an unforgettable
            experience.
          </p>
        </div>
        <div
          className="p-8 bg-white bg-opacity-10 rounded-lg shadow-lg cursor-pointer hover:bg-opacity-20 transition transform hover:scale-105 duration-300 ease-in-out w-80 h-60"
          onClick={() => navigateTo("/workshops")}
        >
          <h2 className="text-3xl font-bold mb-4">Workshops</h2>
          <p className="text-lg">
            Participate in our interactive workshops and enhance your skills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
