// components/ResponsiveLayout.js
"use client";

import { useState, useEffect } from "react";
import DashboardSidebar from "./dashboard/DashboardSidebar";
import { SettingsProvider } from "@/app/context/MobileContext";

const ResponsiveLayout = ({ children }: { children: React.ReactNode }) => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile === null) {
    return null; // or you can return a loading spinner or placeholder
  }

  return (
    <SettingsProvider isMobile={isMobile}>
      {isMobile ? (
        <MobileLayout>
          {children}
        </MobileLayout>
      ) : (
        <DesktopLayout>
          {children}
        </DesktopLayout>
      )}
    </SettingsProvider>
  );
};

const MobileLayout = ({ children }: { children: React.ReactNode }) => 
  <div className="w-full h-full">
    <DashboardSidebar isMobile={true} />
    <main className="w-full h-full overflow-auto">
      {children}
    </main>
  </div>


const DesktopLayout = ({ children }: { children: React.ReactNode }) => <div className="flex h-screen w-full">
    <DashboardSidebar isMobile={false} />
    <main className="w-full h-full overflow-auto">
      {children}
    </main>
  </div>

export default ResponsiveLayout;
