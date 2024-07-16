"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { LayoutGrid, Users, Settings, ChevronLeft, ChevronRight, Menu } from "lucide-react";
import { DashboardSidebarItem } from "@/types";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const DashboardSidebar = ({isMobile} : {isMobile: boolean}) => {
  const [isOpen, setStatus] = useState(false);
  const currentPath = usePathname();

  const handleToggle = () => {
    setStatus(!isOpen);
  };

  const menuList = useMemo(
    () => [
      {
        title: "Dashboard",
        href: "/",
        icon: <LayoutGrid />,
      },
      {
        title: "Patients",
        href: "/patients",
        icon: <Users />,
      },
      {
        title: "Setting",
        href: "/settings",
        icon: <Settings />,
      },
    ],
    []
  );

  const MenuItem = ({ item }: { item: DashboardSidebarItem }) => {
    return (
      <Link href={item.href}>
        <div className={`flex p-2 rounded-md ${isOpen ? "gap-2 justify-start" : "justify-center"} ${currentPath === item.href ? "bg-blue-600 text-white" : "hover:bg-gray-200"}`}>
          {item.icon}
          {isOpen && <span>{item.title}</span>}
        </div>
      </Link>
    );
  };

  if (isMobile) {
    return (
      <Sheet>
        <SheetTrigger className="absolute top-5 left-5">
          <Menu className="w-[24px] h-[24px]" />
        </SheetTrigger>
        <SheetContent side="top" className="w-full pt-[40px]">
          {menuList.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div className={`flex flex-col border-r min-h-screen sticky top-0 bg-[hsl(var(--card))] p-4 transition-width duration-300 ${isOpen ? 'w-[210px] min-w-[210px]' : 'w-[74px] min-w-[74px]'}`}>
      <div className='flex flex-grow flex-col gap-4 justify-center'>
        {menuList.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </div>
      <button onClick={handleToggle} className={`p-2 rounded-md hover:bg-gray-200 ${isOpen ? 'self-end' : 'self-center'}`}>
        {isOpen ? <ChevronLeft /> : <ChevronRight />}
      </button>
    </div>
  );
};

export default DashboardSidebar;
