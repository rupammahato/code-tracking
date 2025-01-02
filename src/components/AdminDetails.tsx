'use client'

import { motion } from 'framer-motion'
import { User } from '@/types/user'

interface UserProfileProps {
  user: User
}

// Function to format field names for display
const formatFieldName = (field: string): string => {
  return field
    .replace(/([A-Z])/g, ' $1') // Add space before capital letters
    .replace(/^./, str => str.toUpperCase()) // Capitalize first letter
}

export default function UserProfile({ user }: UserProfileProps) {
  // Fields to display (add or remove fields as needed)
  const displayFields = [
    'name',
    'email',
    'phone',
    'college',
    'state',
    'city',
    'gender',
    'yearOfStudy',
    'referredByMIP',
    'MIPID'
  ]

  return (
    <motion.div
      className="bg-gray-900 rounded-lg shadow-xl shadow-black p-6 border border-purple-800"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4"> Profile</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {displayFields.map(field => (
          user[field] && (
            <div key={field} className="flex flex-col">
              <span className="text-gray-400 text-sm">
                {formatFieldName(field)}
              </span>
              <span className={field === "email" ? "font-medium lowercase" : "font-medium capitalize "} >
                {user[field]?.toString() || 'Not provided'}
              </span>
            </div>
          )
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-purple-700">
        <div className="flex items-center justify-between">
          <span className="text-gray-400 text-sm">Verification Status</span>
          <span className={`px-3 py-1 rounded-full text-sm ${
            user.isVerified 
              ? 'bg-green-500/20 text-green-400' 
              : 'bg-yellow-500/20 text-yellow-400'
          }`}>
            {user.isVerified ? 'Verified' : 'Pending Verification'}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

