"use client";

import React from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const ComingSoon = () => {
  const router = useRouter();

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-[#091F46] to-[#37729C] text-[#E9E4DE]">
      <button
        onClick={() => router.push("/event_workshop")}
        className="absolute top-4 left-4 group flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
      >
        <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
        <span>Back</span>
      </button>

      <div className="text-center space-y-8">
        <div className="animate-pulse">
          <h1 className="text-6xl font-extrabold tracking-widest mb-4">
            Coming Soon
          </h1>
        </div>
        <div>
          <p className="italic text-lg text-[#EFBF6A]">
            Stay tuned for something amazing!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
