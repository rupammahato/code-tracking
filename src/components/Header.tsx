'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, LogOut, User, Settings } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const sections = [
  { id: 'user-profile', name: 'User Profile' },
  { id: 'progress-tracker', name: 'Progress Tracker' },
  { id: 'registration-fee', name: 'Registration Fee' },
  { id: 'payment-history', name: 'Payment History' },
];

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const sectionId = sections.find((section) =>
      section.name.toLowerCase().includes(searchQuery.toLowerCase())
    )?.id;

    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    setSearchQuery('');
    setIsSearchOpen(false);
  };

  return (
    <header className="bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg py-4 px-6 max-sm:px-2 sticky top-0 z-10 border border-transparent border-b-green-500">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between items-center space-y-2 sm:space-y-0">
          <motion.div
            className="text-xl sm:text-2xl px-4 max-sm:px-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Dashboard
          </motion.div>

          <div className="flex flex-wrap items-center space-x-2 sm:space-x-4">
            <SearchBar
              isSearchOpen={isSearchOpen}
              setIsSearchOpen={setIsSearchOpen}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              handleSearch={handleSearch}
              searchInputRef={searchInputRef}
            />
            <UserProfile />
          </div>
        </div>
      </div>
    </header>
  );
}

function SearchBar({ isSearchOpen, setIsSearchOpen, searchQuery, setSearchQuery, handleSearch, searchInputRef }) {
  return (
    <motion.div
      className="relative flex items-center"
      initial={false}
      animate={{
        width: isSearchOpen
          ? window.innerWidth < 640
            ? '135px' // Smaller width for mobile screens
            : '240px' // Default width for larger screens
          : '40px',
      }}
      transition={{ duration: 0.3 }}
      style={{
        width: isSearchOpen ? (window.innerWidth <= 640 ? '160px' : '240px') : '40px',
      }}
    >
      <AnimatePresence>
        {isSearchOpen && (
          <motion.form
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: '100%' }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ duration: 0.3 }}
            onSubmit={handleSearch}
          >
            <Input
              type="text"
              placeholder="Search sections..."
              className="w-full bg-gray-700 text-white placeholder-white pr-10 border-gray-600 focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50 rounded-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              ref={searchInputRef}
            />
          </motion.form>
        )}
      </AnimatePresence>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-0 text-gray-300 hover:text-white hover:bg-gray-700 rounded-full"
        onClick={() => setIsSearchOpen(!isSearchOpen)}
      >
        <Search className="h-4 w-4" />
      </Button>
    </motion.div>
  );
}

function UserProfile() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center space-x-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-full"
        >
          <Image
            src="/placeholder.svg?height=32&width=32"
            alt="User Avatar"
            width={32}
            height={32}
            className="rounded-full border-2 border-blue-500"
          />
          <span className="font-medium hidden sm:inline">John Doe</span>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 bg-gray-800 text-gray-100 border-gray-700 rounded-lg shadow-lg">
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">John Doe</p>
            <p className="text-xs leading-none text-gray-400">john.doe@example.com</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-gray-700" />
        <DropdownMenuItem className="hover:bg-gray-700 focus:bg-gray-700 rounded transition-colors duration-200">
          <User className="mr-2 h-4 w-4" />
          <span>Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:bg-gray-700 focus:bg-gray-700 rounded transition-colors duration-200">
          <Settings className="mr-2 h-4 w-4" />
          <span>Settings</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-gray-700" />
        <DropdownMenuItem className="hover:bg-gray-700 focus:bg-gray-700 rounded transition-colors duration-200 text-red-400 focus:text-red-400">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
