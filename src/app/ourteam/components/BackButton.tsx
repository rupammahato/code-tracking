"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { IoArrowBack } from "react-icons/io5";

export const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    // Go back to the previous route
    router.back();
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-[4.5rem] left-4 z-10"
    >
      <motion.button
        onClick={handleBack}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg 
                   text-white hover:bg-white/20 transition-all duration-300 shadow-lg"
      >
        <IoArrowBack className="w-5 h-5" />
        <span className="hidden sm:inline">Back</span>
      </motion.button>
    </motion.div>
  );
};
