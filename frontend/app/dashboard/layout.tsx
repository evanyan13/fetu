import type { Metadata } from "next";
import DashboardSidebar from "./(components)/DashboardSidebar";

export const metadata: Metadata = {
  title: "Dashboard | FETU",
  description: "A project by FETU",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
        <DashboardSidebar />
    </div>
  );
}
