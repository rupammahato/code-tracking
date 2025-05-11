'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Lock, CheckCircle, Loader2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import axios from 'axios'
import { useRouter, useParams } from 'next/navigation'

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { token } = useParams()

  useEffect(() => {
    setIsClient(true)
    console.log('Reset token:', token); // Add this line to log the token value
  }, [token])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (newPassword !== confirmPassword) {
      setErrorMessage("Passwords do not match.")
      return
    }

    if (newPassword.length < 6) {
      setErrorMessage("Password must be at least 6 characters long.")
      return
    }

    if (!token) {
      setErrorMessage("Invalid or expired reset token.")
      return
    }

    setIsLoading(true)
    setErrorMessage('')
    try {
      console.log('Sending reset password request with token:', token);
      const response = await axios.post(`/api/users/resetPassword/${token}`, { password: newPassword })
      console.log('Reset password response:', response.data);
      if (response.data.success) {
        setIsSubmitted(true)
        setTimeout(() => {
          router.push('/login')
        }, 1000)
      } else {
        setErrorMessage(response.data.message || 'An error occurred. Please try again.')
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.error('Reset password error response:', error.response.data)
        setErrorMessage(error.response.data.message || 'An error occurred. Please try again.')
      } else {
        console.error('Reset password error:', error)
        setErrorMessage('An error occurred. Please try again.')
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
        className="bg-white rounded-lg shadow-xl shadow-gray-800 p-8 w-full max-w-md"
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
          <h2 className="text-2xl font-bold text-gray-800">Reset Password</h2>
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
              <label htmlFor="newPassword" className="text-sm font-medium text-gray-800 block">
                New Password
              </label>
              <div className="relative">
                <Input
                  id="newPassword"
                  type={showNewPassword ? "text" : "password"}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter your new password"
                  required
                  className="pl-10 text-gray-900 bg-gray-400 border-gray-800"
                />
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-800" />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-800 block">
                Confirm Password
              </label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your password"
                  required
                  className="pl-10 text-gray-900  border-gray-800"
                />
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-800" />
              </div>
            </div>

            {errorMessage && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-sm text-red-600"
              >
                {errorMessage}
              </motion.p>
            )}

            <Button type="submit" className="w-full bg-slate-800 hover:bg-slate-900" disabled={isLoading}>
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Reset Password'}
            </Button>
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
            <h3 className="text-xl font-semibold text-gray-800">Password Reset Successful</h3>
            <p className="text-gray-600">
              You can now log in with your new password.
            </p>
          </motion.div>
        )}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-sm text-center text-[#091f46]"
        >
          Remembered your password? <a href="/login" className="text-[#091f46] hover:underline">Sign in</a>
        </motion.p>
      </motion.div>
    </div>
  )
}
