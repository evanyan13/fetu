import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

import "@/styles/globals.css";
import { cn } from "@/lib/utils"
import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import { ThemeProvider } from "@/components/dashboard/ThemeProvider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "FETU | Home",
  description: "A project by FETU",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased flex items-start justify-between",
        fontSans.variable,
      )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <DashboardSidebar />
          <main className="w-full h-full">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
