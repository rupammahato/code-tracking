'use client'

import { motion } from 'framer-motion'

export default function ProgressTracker() {
  const steps = [
    { name: 'Profile Completion', completed: true },
    { name: 'Payment Status', completed: true },
    { name: 'Registration Confirmation', completed: false },
  ]

  return (
    <motion.div
      className="bg-gray-800 rounded-lg shadow-lg p-6 border border-blue-500 "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h2 className="text-2xl font-bold mb-4">Progress Tracker</h2>
      <div className="flex items-center space-x-4">
        {steps.map((step, index) => (
          <div key={step.name} className="flex-1">
            <div className={`h-2 ${
              step.completed ? 'bg-blue-500' : 'bg-gray-600'
            } rounded-full`}>
              {step.completed && (
                <motion.div
                  className="h-full bg-blue-300 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                />
              )}
            </div>
            <p className="mt-2 text-sm">{step.name}</p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

