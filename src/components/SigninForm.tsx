'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Mail, Lock, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import axios from 'axios';

type SignInFormData = {
  email: string;
  password: string;
};

export function SignInForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<SignInFormData>();

  const onSubmit = async (data: SignInFormData) => {
    setIsLoading(true);
    setError('');

    try {
      const response = await axios.post('/api/users/login', data, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true // Important: ensures cookies are handled
      });
      
      if (response.data.success) {
        // Show success message
        setError(''); // Clear any errors
        // Small delay to show success message
        setTimeout(() => {
          router.push('/dashboard');
          router.refresh();
        }, 500);
      } else {
        setError(response.data.message || 'Login failed');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data?.message || 'Login failed. Please try again.');
      } else {
        setError('An unexpected error occurred');
      }
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-[#091f46]">
        {/* Email field */}
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <div className="relative">
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email address'
                }
              })}
              className="pl-10"
              disabled={isLoading}
            />
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
          </div>
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Password field */}
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters'
                }
              })}
              className="pl-10"
              disabled={isLoading}
            />
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        {/* Forgot Password Link */}
        <div className="text-right">
          <Button
            type="button"
            variant="link"
            onClick={() => router.push('/forgotpassword')}
            className="text-sm text-red-500 hover:text-red-700"
            disabled={isLoading}
          >
            Forgot Password?
          </Button>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full bg-[#091f46] hover:bg-gray-900"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Signing in...
            </>
          ) : (
            'Sign In'
          )}
        </Button>

        {/* Error Message */}
        {error && (
          <p className="text-red-500 text-sm text-center">{error}</p>
        )}

        {/* Sign Up Link */}
        <div className="text-center">
          <Button
            type="button"
            variant="link"
            onClick={() => router.push('/registration')}
            className="text-sm text-gray-700 hover:text-[#091f46]"
            disabled={isLoading}
          >
            Don&apos;t have an account? Sign Up
          </Button>
        </div>
      </form>
    </motion.div>
  );
}
