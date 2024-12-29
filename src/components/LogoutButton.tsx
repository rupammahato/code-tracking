'use client'

import { motion } from 'framer-motion'
import { useToast } from "@/components/ui/use-toast"

export default function LogoutButton() {
  const { toast } = useToast()

  const handleLogout = () => {
    // Implement logout logic here
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
      duration: 5000,
    })
  }

  return (
    <motion.div
      className="mt-8 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <button
        onClick={handleLogout}
        className="bg-red-600 hover:bg-red-700 active:shadow-none text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 shadow-md shadow-black "
      >
        Logout
      </button>
    </motion.div>
  )
}

