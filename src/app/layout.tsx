import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";
import "./globals.css";
import "./fonts.css";
import { ThemeInitializer } from "@/components/ThemeInitializer";

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
      <body className={`antialiased`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <ThemeInitializer />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
