'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Mail, Lock, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

type SignInFormData = {
  email: string;
  password: string;
};

async function submitForm(data: SignInFormData, isRegistration: boolean) {
  const endpoint = isRegistration ? '/api/users/register' : '/api/users/login';
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
}

export function SignInForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<SignInFormData>();

  const onSubmit = async (data: SignInFormData) => {
    setIsLoading(true);
    setMessage('');
    try {
      const result = await submitForm(data, false);
      setMessage(result.message);
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 text-[#091f46]"
    >
      <div className="space-y-2">
        <Label htmlFor="email">Email:</Label>
        <div className="relative">
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
            className="pl-10 shadow-md shadow-black"
          />
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800 " size={18} />
        </div>
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password:</Label>
        <div className="relative">
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })}
            className="pl-10 shadow-md shadow-black"
          />
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800" size={18} />
        </div>
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
      </div>
      <div className="text-right mt-0">
        <Button
          variant="link"
          onClick={() => router.push('/forgotpassword')}
          className="text-sm text-red-500 hover:text-red-800"
        >
          Forgot Password?
        </Button>
      </div>
      <Button type="submit"  disabled={isLoading} className={`w-full bg-[#091f46] ${isLoading ? 'bg-[#091f46]' : 'hover:bg-gray-900'}`}
       >
        {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Sign In'}
      </Button>
      {message && <p className="text-center text-sm font-medium text-green-600">{message}</p>}
      <div className="text-center">
        <Button
          variant="link"
          onClick={() => router.push('/registration')}
          className="text-sm text-gray-900 hover:text-[#091f46]"
        >
          Dont&apos; have an account? Sign Up
        </Button>
      </div>
    </motion.form>
  );
}
