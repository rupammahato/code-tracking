import { Providers } from "./providers";
import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";
import "./globals.css";
import "./fonts.css";
import { ThemeInitializer } from "@/components/ThemeInitializer";
import  NavbarSection from "@/components/Navbar"
import { Toaster } from "@/components/ui/toaster"
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Megalith 2025",
  description: "Megalith 2025 official website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <Providers>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <ThemeInitializer />
            <NavbarSection />
            {children}
            <Footer />
            <Toaster />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
