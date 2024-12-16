
import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";
import "./globals.css";
import "./fonts.css";



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
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
