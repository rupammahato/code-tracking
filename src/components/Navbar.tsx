"use client";
import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import logo from "./assets/megalith-logo.png";
import Image from "next/image";
import { useToast } from "@/components/ui/use-toast";
import studentMale from "@/components/assets/studentMale.jpg";
import studentFemale from "@/components/assets/studentFemale.jpg";

interface UserData {
  name: string;
  email: string;
  id: string;
  isAdmin?: boolean;
  gender: string;
}

export default function NavbarSection() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);

  const { toast } = useToast();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Check authentication status when component mounts
    const checkAuth = async () => {
      try {
        const response = await fetch("/api/users/check-auth", {
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();

        if (data.success) {
          setIsLoggedIn(true);
          setUserData(data.user);
        } else {
          setIsLoggedIn(false);
          setUserData(null);
        }
      } catch (error) {
        console.error("Error checking auth status:", error);
        setIsLoggedIn(false);
        setUserData(null);
      }
    };

    checkAuth();
  }, [pathname]);


  const menuItems = [
    {
      key: 1,
      item: "Home",
      href: "/",
    },
    {
      key: 2,
      item: "Events & Workshops",
      href: "/event_workshop",
    },
    {
      key: 3,
      item: "Sponsors",
      href: "/sponsors",
    },
    {
      key: 4,
      item: "Our Team",
      href: "/ourteam",
    },
    {
      key: 5,
      item: "MIP",
      href: "https://www.mip.megalith.co.in/",
    },
  ];

  if (!mounted) {
    return null;
  }

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/users/logout", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      console.log("Logout response:", data);

      document.cookie =
        "token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;";
      setIsLoggedIn(false);
      setUserData(null);
      toast({
        title: "Success",
        description: "Logged out successfully",
        duration: 5000,
      });

      window.location.replace("/login");
    } catch (error) {
      console.error("Logout error:", error);
      toast({
        title: "Error",
        description: "Failed to logout: " + error,
        variant: "destructive",
      });
    }
  };

  return (
    <Navbar
      className="bg-[#cdc98a] text-[#460b09] "
      onMenuOpenChange={setIsMenuOpen}
      isBordered
      shouldHideOnScroll
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-red-700",
        ],
      }}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="cursor-pointer">
          <Image src={logo} alt="Megalith" className="h-7 w-7 mr-2" />
          <p className="font-bold cursor-pointer text-inherit">MEGALITH</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={pathname === "/"}>
          <Link
            color={pathname === "/" ? undefined : "secondary"}
            className={
              pathname === "/" ? "text-red-700" : "text-[#460b09] font-semibold"
            }
            aria-current={pathname === "/" ? "page" : undefined}
            href="/"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem
          className="text-[#460b09]"
          isActive={pathname === "/event_workshop"}
        >
          <Link
            color={undefined}
            className={
              pathname === "/event_workshop"
                ? "text-red-700"
                : "text-[#460b09] font-semibold"
            }
            aria-current={pathname === "/event_workshop" ? "page" : undefined}
            href="/event_workshop"
          >
            Events & Workshops
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/sponsors"}>
          <Link
            color={pathname === "/sponsors" ? undefined : "foreground"}
            className={
              pathname === "/sponsors"
                ? "text-red-700"
                : "text-[#460b09] font-semibold"
            }
            aria-current={pathname === "/sponsors" ? "page" : undefined}
            href="/sponsors"
          >
            Sponsors
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/ourteam"}>
          <Link
            color={pathname === "/ourteam" ? undefined : "foreground"}
            className={
              pathname === "/ourteam"
                ? "text-red-700"
                : "text-[#460b09] font-semibold"
            }
            aria-current={pathname === "/ourteam" ? "page" : undefined}
            href="/ourteam"
          >
            Our Team
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            className="text-[#460b09] font-semibold"
            href="https://www.mip.megalith.co.in/"
          >
            MIP
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Conditional rendering of Register/Login or User Profile */}
      {isLoggedIn ? (
        // Show user profile for authenticated users
        <NavbarContent as="div" justify="end">
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name={userData?.name || "User"}
                size="sm"
                src={
                  userData?.gender === "female"
                    ? studentFemale.src
                    : studentMale.src
                }
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold capitalize ">{userData?.name}</p>
                <p className=" text-gray-400 ">{userData?.email}</p>
              </DropdownItem>
              <DropdownItem href="/dashboard" key="dashboard">
                Dashboard
              </DropdownItem>
              {userData && userData.isAdmin === true ? (
                <DropdownItem href="/admin-dashboard" key="admin">
                  Admin Dashboard
                </DropdownItem>
              ) : null}
              <DropdownItem href="/" key="team_settings">
                Home
              </DropdownItem>
              <DropdownItem
                href="https://www.mip.megalith.co.in/"
                key="analytics"
              >
                MIP
              </DropdownItem>
              <DropdownItem key="logout" color="danger">
                <button onClick={handleLogout}>Log Out</button>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      ) : (
        // Show Register/Login buttons for non-authenticated users
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="/login" className="text-[#460b09]">
              Login
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Button
              as={Link}
              className="bg-[#450b09] text-[#cdc98a]"
              href="/registration"
            >
              Register
            </Button>
          </NavbarItem>
        </NavbarContent>
      )}

      <NavbarMenu className="z-50">
        {menuItems.map((item) => (
          <NavbarMenuItem className="" key={item.key}>
            <Link
              color={pathname === item.href ? undefined : "foreground"}
              className={
                pathname === item.href
                  ? "text-rose-700 font-semibold w-full"
                  : "text-rose-300 w-full"
              }
              aria-current={pathname === item.href ? "page" : undefined}
              href={item.href}
              size="lg"
            >
              {item.item}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <button
            className="text-rose-700 font-semibold w-full flex justify-items-start"
            onClick={handleLogout}
          >
            Logout
          </button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
