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
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import logo from "./assets/megalith-logo.png"
import Image from "next/image";

export default function NavbarSection() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const menuItems = [
    "Dashboard",
    "Home",
    "Events & Workshops",
    "Sponsors",
    "Our Team",
    "MIP",
    "Log Out",
  ];

  if (!mounted) {
    return null;
  }

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
        <NavbarBrand className="cursor-pointer" >
          <Image src={logo} alt="Megalith" className="h-7 w-7 mr-2" />
          <p className="font-bold cursor-pointer text-inherit">MEGALITH</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={pathname === "/"}>
          <Link
            color={pathname === "/" ? undefined : "secondary"}
            className={pathname === "/" ? "text-red-700" : "text-[#460b09] font-semibold"}
            aria-current={pathname === "/" ? "page" : undefined}
            href="/"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem className="text-[#460b09]" isActive={pathname === "/event_workshop"}>
          <Link
            color={undefined}
            className={pathname === "/event_workshop" ? "text-red-700" : "text-[#460b09] font-semibold"}
            aria-current={pathname === "/event_workshop" ? "page" : undefined}
            href="/event_workshop"
          >
            Events & Workshops
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/sponsors"}>
          <Link
            color={pathname === "/sponsors" ? undefined : "foreground"}
            className={pathname === "/sponsors" ? "text-red-700" : "text-[#460b09] font-semibold"}
            aria-current={pathname === "/sponsors" ? "page" : undefined}
            href="/sponsors"
          >
            Sponsors
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/ourteam"}>
          <Link
            color={pathname === "/ourteam" ? undefined : "foreground"}
            className={pathname === "/ourteam" ? "text-red-700" : "text-[#460b09] font-semibold"}
            aria-current={pathname === "/ourteam" ? "page" : undefined}
            href="/ourteam"
          >
            Our Team
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" className="text-[#460b09] font-semibold" href="https://www.mip.megalith.co.in/">
            MIP
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/login" className="text-[#460b09] hover:text-gray-900" >Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} className=" bg-[#460b09] text-[#cdc98a] font-semibold " color="primary" href="/registration" variant="flat">
            Register
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="z-50" >
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
