'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Mail, Lock, User, Phone, School, MapPin, Users, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import axios from 'axios';

type SignUpFormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  college: string;
  state: string;
  city: string;
  gender: string;
  yearOfStudy: string;
  referredByMIP: string;
  mipId?: string;
};

export function SignUpForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const router = useRouter();
  const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm<SignUpFormData>();

  const watchReferredByMIP = watch('referredByMIP');

  const onSubmit = async (data: SignUpFormData) => {
    setIsLoading(true);
    setMessage('');
    try {
      const { confirmPassword, ...rest } = data;
      const payload = { ...rest, confirmpassword: confirmPassword };
      const response = await axios.post('/api/users/register', payload);
      setMessage(response.data.message);
      if (response.data.success) {
        router.push('/verifyemail');
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.error('Signup error response:', error.response.data);
        setMessage(error.response.data.message || 'An error occurred. Please try again.');
      } else {
        console.error('Signup error:', error);
        setMessage('An error occurred. Please try again.');
      }
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
      className="space-y-4 text-black"
    >
      <div className="space-y-2 text-black">
        <Label htmlFor="name">Name:</Label>
        <div className="relative text-black ">
          <Input
            id="name"
            placeholder="Enter your name"
            {...register('name', { required: 'Name is required' })}
            className="pl-10 shadow-md shadow-black"
          />
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800" size={18} />
        </div>
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>

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
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800" size={18} />
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
            className="pl-10 text-[#091f46] shadow-md shadow-black"
          />
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800" size={18} />
        </div>
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmPassword">Confirm Password:</Label>
        <div className="relative">
          <Input
            id="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            {...register('confirmPassword', {
              required: 'Please confirm your password',
              validate: (val: string) => {
                if (watch('password') != val) {
                  return "Your passwords do not match";
                }
              },
            })}
            className="pl-10 shadow-md shadow-black"
          />
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800" size={18} />
        </div>
        {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number:</Label>
        <div className="relative">
          <Input
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            {...register('phone', { required: 'Phone number is required', pattern: { value: /^\d{10}$/, message: 'Invalid phone number' } })}
            className="pl-10 shadow-md shadow-black"
          />
          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800" size={18} />
        </div>
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="college">College:</Label>
        <div className="relative">
          <Input
            id="college"
            placeholder="Enter your college name"
            {...register('college', { required: 'College name is required' })}
            className="pl-10 shadow-md shadow-black"
          />
          <School className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800" size={18} />
        </div>
        {errors.college && <p className="text-red-500 text-sm">{errors.college.message}</p>}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="state">State:</Label>
          <div className="relative">
            <Input
              id="state"
              placeholder="Enter your state"
              {...register('state', { required: 'State is required' })}
              className="pl-10 shadow-md shadow-black"
            />
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800" size={18} />
          </div>
          {errors.state && <p className="text-red-500 text-sm">{errors.state.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="city">City:</Label>
          <div className="relative">
            <Input
              id="city"
              placeholder="Enter your city"
              {...register('city', { required: 'City is required' })}
              className="pl-10 shadow-md shadow-black"
            />
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800" size={18} />
          </div>
          {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label>Gender:</Label>
        <RadioGroup onValueChange={(value) => setValue('gender', value)} className="flex space-x-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="male" id="male" />
            <Label htmlFor="male">Male</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="female" id="female" />
            <Label htmlFor="female">Female</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="other" id="other" />
            <Label htmlFor="other">Other</Label>
          </div>
        </RadioGroup>
        {errors.gender && <p className="text-red-500 text-sm">{errors.gender.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="yearOfStudy">Year of Study:</Label>
        <Select onValueChange={(value) => setValue('yearOfStudy', value)}>
          <SelectTrigger className="w-full bg-gray-400 shadow-md shadow-black">
            <SelectValue placeholder="Select your year of study" />
          </SelectTrigger>
          <SelectContent className='text-black bg-gray-400 shadow-md shadow-black'>
            <SelectItem className='hover:bg-slate-600' value="1">1st Year</SelectItem>
            <SelectItem className='hover:bg-slate-600' value="2">2nd Year</SelectItem>
            <SelectItem className='hover:bg-slate-600' value="3">3rd Year</SelectItem>
            <SelectItem className='hover:bg-slate-600' value="4">4th Year</SelectItem>
            <SelectItem className='hover:bg-slate-600' value="5">5th Year</SelectItem>
          </SelectContent>
        </Select>
        {errors.yearOfStudy && <p className="text-red-500 text-sm">{errors.yearOfStudy.message}</p>}
      </div>

      <div className="space-y-2">
        <Label>Referred by MIP?</Label>
        <RadioGroup onValueChange={(value) => setValue('referredByMIP', value)} className="flex text-black space-x-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="yes" />
            <Label htmlFor="yes">Yes</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="no" />
            <Label htmlFor="no">No</Label>
          </div>
        </RadioGroup>
        {errors.referredByMIP && <p className="text-red-500 text-sm">{errors.referredByMIP.message}</p>}
      </div>

      {watchReferredByMIP === 'yes' && (
        <div className="space-y-2">
          <Label htmlFor="mipId">MIP ID:</Label>
          <div className="relative">
            <Input
              id="mipId"
              placeholder="Enter MIP ID"
              {...register('mipId', { required: 'MIP ID is required when referred by MIP' })}
              className="pl-10 shadow-md shadow-black "
            />
            <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800" size={18} />
          </div>
          {errors.mipId && <p className="text-red-500 text-sm">{errors.mipId.message}</p>}
        </div>
      )}

      <Button type="submit" className="w-full bg-[#091f46] hover:bg-slate-900 " disabled={isLoading}>
        {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Sign Up'}
      </Button>
      {message && <p className="text-center text-sm font-medium text-green-600">{message}</p>}
      <div className="text-center">
        <Button
          variant="link"
          onClick={() => router.push('/login')}
          className="text-sm text-gray-800 hover:text-[#091f46]"
        >
          Already have an account? Sign In
        </Button>
      </div>
    </motion.form>
  );
}

