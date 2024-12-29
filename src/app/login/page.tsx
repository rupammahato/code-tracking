"use client";
import { SignInForm } from "@/components/SigninForm";
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { useEffect, useState } from 'react';

export default function SignInPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 to-gray-950 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden w-full max-w-md p-8 relative">
        <motion.div
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center mb-6"
        >
          <ArrowLeft 
            className="h-6 w-6 text-gray-800 hover:text-gray-950 hover:scale-105 mt-1 mr-2 cursor-pointer" 
            onClick={() => window.history.back()} 
          />
          <h2 className="text-2xl ml-1 font-bold text-[#091f46]">Login</h2>
        </motion.div>
        <SignInForm />
      </div>
    </div>
  );
}
