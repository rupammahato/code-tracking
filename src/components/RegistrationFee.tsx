'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useToast } from "@/components/ui/use-toast"

export default function RegistrationFee() {
  const [registrationType, setRegistrationType] = useState('')
  const [fee, setFee] = useState(0)
  const { toast } = useToast()

  const handleRegistrationTypeChange = (type: string) => {
    setRegistrationType(type)
    switch (type) {
      case 'events':
        setFee(500)
        break
      case 'workshops':
        setFee(750)
        break
      case 'both':
        setFee(1000)
        break
      default:
        setFee(0)
    }
  }

  const handlePayment = () => {
    // Implement Razorpay integration here
    toast({
      title: "Payment Successful",
      description: `You have successfully paid ₹${fee} for ${registrationType}`,
      duration: 5000,
    })
  }

  return (
    <motion.div
      className="bg-gray-800 rounded-lg shadow-lg p-6 border border-green-500 "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <h2 className="text-2xl font-bold mb-4">Registration Fee</h2>
      <div className="space-y-4">
        <div>
          <label className="block mb-2">Registration Type:</label>
          <select
            value={registrationType}
            onChange={(e) => handleRegistrationTypeChange(e.target.value)}
            className="w-full bg-gray-700 rounded px-3 py-2 "
          >
            <option value="">Select type</option>
            <option value="events">Events</option>
            <option value="workshops">Workshops</option>
            <option value="both">Events and Workshops</option>
          </select>
        </div>
        {fee > 0 && (
          <div>
            <p className="text-xl">Fee: ₹{fee}</p>
            <button
              onClick={handlePayment}
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg shadow-black active:shadow-none transition-colors duration-300 "
            >
              Pay with Razorpay
            </button>
          </div>
        )}
      </div>
    </motion.div>
  )
}

