"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, LogOut, User, HomeIcon, Settings } from "lucide-react";
import Image from "next/image";
import type { User as UserType } from "@/types/user";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import Female from "@/components/assets/female.png";
import male from "@/components/assets/male.png";

const sections = [
  { id: "admin-details", name: "Admin Details" },
  { id: "add-admin", name: "Add Admin" },
  { id: "admin-list", name: "Admin List" },
  { id: "student-list", name: "Student List" },
];

interface HeaderProps {
  user: UserType;
}

// Add this helper function before the Header component
const getFirstName = (fullName: string): string => {
  return fullName?.split(" ")[0] || "User";
};

export default function Header({ user }: HeaderProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Get the header height (adjust the selector as needed)
      const headerHeight = document.querySelector("header")?.offsetHeight || 0;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerHeight - 20;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const sectionId = sections.find((section) =>
      section.name.toLowerCase().includes(searchQuery.toLowerCase())
    )?.id;

    if (sectionId) {
      scrollToSection(sectionId);
      setSearchQuery("");
      setIsSearchOpen(false);
    }
  };

  return (
    <header className="bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg py-4 px-6 max-sm:px-2 sticky top-0 z-10 border border-transparent border-b-purple-800">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between items-center space-y-2 sm:space-y-0">
          <motion.div
            className="text-xl sm:text-2xl px-4 max-sm:px-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Admin Dashboard
          </motion.div>

          <div className="flex flex-wrap items-center space-x-2 sm:space-x-4">
            <SearchBar
              isSearchOpen={isSearchOpen}
              setIsSearchOpen={setIsSearchOpen}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              handleSearch={handleSearch}
              searchInputRef={searchInputRef}
              sections={sections}
            />
            <UserProfile user={user} />
          </div>
        </div>
      </div>
    </header>
  );
}

interface SearchBarProps {
  isSearchOpen: boolean;
  setIsSearchOpen: (isOpen: boolean) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  handleSearch: (e: React.FormEvent) => void;
  searchInputRef: React.RefObject<HTMLInputElement>;
  sections: { id: string; name: string }[];
}

function SearchBar({
  isSearchOpen,
  setIsSearchOpen,
  searchQuery,
  setSearchQuery,
  handleSearch,
  searchInputRef,
  sections,
}: SearchBarProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Get the header height
      const headerHeight = document.querySelector("header")?.offsetHeight || 0;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerHeight - 20;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.div
      className="relative flex items-center"
      initial={false}
      animate={{
        width: isSearchOpen
          ? window.innerWidth < 640
            ? "135px"
            : "240px"
          : "40px",
      }}
      transition={{ duration: 0.3 }}
    >
      <AnimatePresence>
        {isSearchOpen && (
          <motion.form
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "100%" }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ duration: 0.3 }}
            onSubmit={handleSearch}
          >
            <div className="relative">
              <Input
                type="text"
                placeholder="Search sections..."
                className="w-full bg-gray-700 text-white placeholder-purple-300 pr-10 border-purple-600 focus:border-purple-900 focus:ring focus:ring-purple-800 focus:ring-opacity-50 rounded-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                ref={searchInputRef}
              />
              {searchQuery && (
                <div className="absolute mt-1 w-full bg-gray-800 border border-gray-700 rounded-md shadow-lg z-50">
                  {sections
                    .filter((section) =>
                      section.name
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase())
                    )
                    .map((section) => (
                      <button
                        key={section.id}
                        className="w-full px-4 py-2 text-left text-gray-300 hover:bg-gray-700"
                        onClick={() => {
                          scrollToSection(section.id);
                          setSearchQuery("");
                          setIsSearchOpen(false);
                        }}
                      >
                        {section.name}
                      </button>
                    ))}
                </div>
              )}
            </div>
          </motion.form>
        )}
      </AnimatePresence>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-0 text-gray-300 hover:text-white hover:bg-gray-700 rounded-full"
        onClick={() => setIsSearchOpen(!isSearchOpen)}
      >
        <Search className="h-4 w-4 text-purple-400" />
      </Button>
    </motion.div>
  );
}

interface UserProfileProps {
  user: UserType;
}

function UserProfile({ user }: UserProfileProps) {
    const { toast } = useToast();
    const router = useRouter();
  if (!user) {
    return null; // Or return a loading/fallback UI
  }

  const userName = user?.name || "User";
  const firstName = getFirstName(user?.name || "User");
  const userEmail = user?.email || "";
  const gender = user?.gender || "male";



  const handleLogout = async () => {
    try {
      const response = await fetch("/api/users/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        toast({
          title: "Logged Out",
          description: "You have been successfully logged out.",
          duration: 5000,
        });
        router.push("/login");
      } else {
        throw new Error("Logout failed");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to logout. Please try again:" + {error},
        variant: "destructive",
        duration: 5000,
      });
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center space-x-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-full"
        >
          <Image
            src={gender === "female" ? Female : male}
            alt={`${userName}'s Avatar`}
            width={32}
            height={32}
            className="rounded-full border-2 border-blue-500"
          />
          <span className="font-medium hidden capitalize sm:inline">
            {firstName}
          </span>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-56 bg-gray-800 text-gray-100 border-gray-700 rounded-lg shadow-lg"
      >
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium capitalize leading-none">
              {userName}
            </p>
            <p className="text-xs leading-none text-gray-400">{userEmail}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-gray-700" />
        <DropdownMenuItem
          onClick={() => router.push("/")}
          className="hover:bg-gray-700 focus:bg-gray-700 rounded transition-colors duration-200"
        >
          <HomeIcon className="mr-2 h-4 w-4" />
          <span>Home</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="hover:bg-gray-700 focus:bg-gray-700 rounded transition-colors duration-200"
          onClick={() => router.push("/dashboard")}
        >
          <User className="mr-2 h-4 w-4" />
          <span>User Dashboard</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="hover:bg-gray-700 focus:bg-gray-700 rounded transition-colors duration-200"
          onClick={() => router.push("/admin-dashboard")}
        >
          <Settings className="mr-2 h-4 w-4" />
          <span>Admin Dashboard</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-gray-700" />
        <DropdownMenuItem
          className="hover:bg-gray-700 focus:bg-gray-700 rounded transition-colors duration-200 text-red-400 focus:text-red-400"
          onClick={handleLogout}
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
