'use client'

import { motion } from 'framer-motion'
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from 'next/navigation'

export default function LogoutButton() {
  const { toast } = useToast()
  const router = useRouter()

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        toast({
          title: "Logged Out",
          description: "You have been successfully logged out.",
          duration: 5000,
        });
        router.push('/login');
      } else {
        throw new Error('Logout failed');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to logout. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    }
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

