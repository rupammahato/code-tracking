import React from "react";

export const LoadingSkeleton = () => {
  return (
    <div className="animate-pulse flex justify-center items-center min-h-screen">
      <div className="grid w-3/5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-gray-400 rounded-xl aspect-[4/5] w-full" />
        ))}
      </div>
    </div>
  );
};
