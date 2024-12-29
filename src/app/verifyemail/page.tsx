'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Mail, CheckCircle, AlertCircle, ArrowLeft, Loader2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import axios from 'axios'

export default function VerifyEmail() {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(''))
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [isClient, setIsClient] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const inputRefs = useRef<HTMLInputElement[]>([])
  const router = useRouter()

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return
    const newOtp = [...otp]
    newOtp[index] = value.slice(-1)
    setOtp(newOtp)

    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleBackspace = (index: number, value: string) => {
    if (value === '' && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.some((digit) => digit === '')) {
      setErrorMessage('Please fill all the fields.');
      return;
    }

    const enteredOtp = otp.join('');
    setIsLoading(true);
    try {
      const response = await axios.post('/api/users/verifyemail', { code: enteredOtp });

      if (response.data.success) {
        setIsSubmitted(true);
        setErrorMessage('');
        setTimeout(() => {
          router.push('/login');
        }, 1000);
      } else {
        setErrorMessage(response.data.message || 'Invalid OTP. Please try again.');
      }
    } catch (error) {
      console.error('Verification error:', error);
      setErrorMessage('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  const handleGoBack = () => {
    router.back()
  }

  if (!isClient) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 to-gray-950 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Go Back Button */}
      <div className="w-full max-w-md flex justify-start mb-4">
        <Button
          onClick={handleGoBack}
          className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-[#091f46] px-4 py-2 rounded-lg shadow-md"
        >
          <ArrowLeft className="h-5 w-5" />
          Back
        </Button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative bg-white rounded-lg shadow-xl shadow-black p-8 w-full max-w-md"
      >
        {/* Header */}
        <motion.div
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center mb-6"
        >
          <Mail className="h-6 w-6 text-[#091f46] mr-2" />
          <h2 className="text-2xl font-bold text-[#091f46]">Verify Email</h2>
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
              <label htmlFor="otp" className="text-sm font-medium text-[#091f46] block">
                Enter the 6-digit OTP sent to your email
              </label>
              <div className="flex justify-between gap-2">
                {otp.map((digit, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <Input
                      ref={(el) => (inputRefs.current[index] = el!)}
                      type="text"
                      value={digit}
                      onChange={(e) => handleChange(index, e.target.value)}
                      onKeyDown={(e) =>
                        e.key === 'Backspace' && handleBackspace(index, e.currentTarget.value)
                      }
                      maxLength={1}
                      className="text-center text-xl font-bold text-[#091f46] bg-gray-500 border-gray-600 focus:ring-2 focus:ring-gray-600"
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {errorMessage && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-sm text-red-600 flex items-center"
              >
                <AlertCircle className="h-5 w-5 mr-2" />
                {errorMessage}
              </motion.p>
            )}

            <Button type="submit" className="w-full bg-slate-800 hover:bg-slate-900" disabled={isLoading}>
              {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Verify Email'}
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
            <h3 className="text-xl font-semibold text-gray-800">Verification Successful</h3>
            <p className="text-gray-600">
              Your email has been verified successfully.
            </p>
          </motion.div>
        )}

        {/* <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-sm text-center text-gray-800 mt-6"
        >
          Didn’t receive the OTP?{' '}
          <a href="#" className="text-[#091f46] font-semibold hover:underline">Resend OTP</a>
        </motion.p> */}
      </motion.div>
    </div>
  )
}
