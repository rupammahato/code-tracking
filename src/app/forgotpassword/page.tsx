'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Mail, CheckCircle, Loader2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import axios from 'axios'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage('')
    try {
      const response = await axios.post('/api/users/forgotPassword', { email })
      setMessage(response.data.message)
      if (response.data.success) {
        setIsSubmitted(true)
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.error('Forgot password error response:', error.response.data)
        setMessage(error.response.data.message || 'An error occurred. Please try again.')
      } else {
        console.error('Forgot password error:', error)
        setMessage('An error occurred. Please try again.')
      }
    } finally {
      setIsLoading(false)
    }
  }

  if (!isClient) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 to-gray-950 flex items-center justify-center p-4 sm:p-6 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md"
      >
        <motion.div
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center mb-6"
        >
          <ArrowLeft 
            className="h-6 w-6 text-gray-800 mr-2 cursor-pointer" 
            onClick={() => window.history.back()} 
          />
          <h2 className="text-2xl font-bold text-gray-800">Forgot Password</h2>
        </motion.div>

        {!isSubmitted ? (
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-800 block">
                Email Address
              </label>
              <div className="relative">
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="pl-10 text-gray-900 bg-gray-500 border-gray-800"
                />
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-800" />
              </div>
            </div>
            <Button type="submit" className="w-full bg-slate-800 hover:bg-slate-900" disabled={isLoading}>
              {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Reset Password'}
            </Button>
            {message && <p className="text-center text-sm font-medium text-red-600">{message}</p>}
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center space-y-4"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 10 }}
            >
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
            </motion.div>
            <h3 className="text-xl font-semibold text-gray-800">Check Your Email</h3>
            <p className="text-gray-600">
              We&apos;ve sent a password reset link to your email address.
            </p>
          </motion.div>
        )}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-sm text-center text-[#091f46]"
        >
          Remember your password? <a href="/login" className="text-[#091f46] hover:underline">Sign in</a>
        </motion.p>
      </motion.div>
    </div>
  )
}

