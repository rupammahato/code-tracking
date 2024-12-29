'use client'

import { motion } from 'framer-motion'

export default function UserProfile() {
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1234567890',
    college: 'Example University',
    state: 'California',
    city: 'San Francisco',
    gender: 'Male',
    yearOfStudy: '3rd Year',
    referredByMIP: 'Yes',
    MIPID: 'MIP123456',
    registrationStatus: 'Complete'
  }

  return (
    <motion.div
      className="bg-gray-800 rounded-lg shadow-lg p-6 border border-blue-500"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      <div className="grid grid-cols-2 gap-4">
        {Object.entries(user).map(([key, value]) => (
          <div key={key}>
            <span className="font-semibold">{key}: </span>
            <span>{value}</span>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <span className="font-semibold">Registration Status: </span>
        <span className={`inline-block px-2 py-1 ml-2 rounded-lg ${
          user.registrationStatus === 'Complete' ? 'bg-blue-700' : 'bg-red-500'
        }`}>
          {user.registrationStatus}
        </span>
      </div>
    </motion.div>
  )
}

