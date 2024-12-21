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

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function NavbarSection() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  if (!mounted) {
    return null;
  }

  return (
    <Navbar
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
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">MEGALITH</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={pathname === "/"}>
          <Link
            color={pathname === "/" ? undefined : "foreground"}
            className={pathname === "/" ? "text-red-700" : ""}
            aria-current={pathname === "/" ? "page" : undefined}
            href="/"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/event_workshop"}>
          <Link
            color={pathname === "/event_workshop" ? undefined : "foreground"}
            className={pathname === "/event_workshop" ? "text-red-700" : ""}
            aria-current={pathname === "/event_workshop" ? "page" : undefined}
            href="/event_workshop"
          >
            Events & Workshops
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/sponsors"}>
          <Link
            color={pathname === "/sponsors" ? undefined : "foreground"}
            className={pathname === "/sponsors" ? "text-red-700" : ""}
            aria-current={pathname === "/sponsors" ? "page" : undefined}
            href="/sponsors"
          >
            Sponsors
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/ourteam"}>
          <Link
            color={pathname === "/ourteam" ? undefined : "foreground"}
            className={pathname === "/ourteam" ? "text-red-700" : ""}
            aria-current={pathname === "/ourteam" ? "page" : undefined}
            href="/ourteam"
          >
            Our Team
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="https://www.mip.megalith.co.in/">
            MIP
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/login">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/registration" variant="flat">
            Register
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
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
