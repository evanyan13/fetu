import type { Metadata } from "next"
import "./globals.css"
import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Car Hub",
  description: "Discover the best car in town",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
