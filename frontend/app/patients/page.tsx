"use client";

import { Button } from "@/components/ui/button";
import { Calendar, HeartPulse, Stethoscope, Waves, BookHeart } from "lucide-react";
import { getToday } from "@/lib/utils";
import { LabourProgressChart } from "@/components/dashboard/LabourProgressChart";
import { ModeToggle } from "@/components/dashboard/ModeToggle";
import PatientDetailsCard from "@/components/dashboard/PatientDetailsCard";
import StatusCard from "@/components/dashboard/StatusCard";
import { CtgChart } from "@/components/dashboard/CtgChart";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useMobile } from "../context/MobileContext";
import { DataTable } from "./data-table";
import { columns, Patient } from "./columns";
import { useEffect, useState } from "react";

export default function Patients() {
  const today = getToday();
  const { isMobile } = useMobile();
  const [data, setData] = useState<Patient[]>([
    {
      id: "728ed52f",
      name: "Jared",
      admissionDate: "2022-01-01",
      risk: "High",
    },
    {
      id: "12345",
      name: "Jeff",
      admissionDate: "2022-01-01",
      risk: "Medium",
    }
  ]);

  useEffect(() => {
    // Fetch data from the server
  }, []);

  if (isMobile) {
    return (
      <main className="h-full w-full">
        <div className="flex-1 space-y-4 p-4 md:p-8">
          <div id="top-bar" className="flex w-full justify-end items-center">
            <div className="flex flex-row gap-2">
              <Button variant="outline" className="gap-2">
                <Calendar size={20} />
                {today}
              </Button>
              <ModeToggle />
            </div>
          </div>
        </div>
        <div id="patients-list" className="p-2">
          <DataTable columns={columns} data={data} />
        </div>
      </main>
    );
  }

  return (
    <main className="h-full w-full p-6">
      <div className="flex-1 space-y-4">
        <div id="top-bar" className="flex w-full justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Patients List</h2>
          <div className="flex flex-row gap-2">
            <Button variant="outline" className="gap-2">
              <Calendar size={20} />
              {today}
            </Button>
            <ModeToggle />
          </div>
        </div>
      </div>
      <div id="patients-list" className="mt-4">
        <DataTable columns={columns} data={data} />
      </div>
    </main>
  );
}
