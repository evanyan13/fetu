"use client";

import { Button } from "@/components/ui/button";
import { Calendar, HeartPulse, Stethoscope, Waves, BookHeart } from "lucide-react";
import { getToday } from "@/lib/utils";
import { LabourProgressChart } from "@/components/dashboard/LabourProgressChart";
import { ModeToggle } from "@/components/dashboard/ModeToggle";
import PatientDetailsCard from "@/components/dashboard/PatientDetailsCard";
import StatusCard from "@/components/dashboard/StatusCard";
import { CtgChart } from "@/components/dashboard/CtgChart";
import { useMobile } from "./context/MobileContext";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export default function Home() {
  const today = getToday();
  const { isMobile } = useMobile();

  if (isMobile) {
    return (
      <main className="h-full">
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

          <h2 className="text-3xl font-bold tracking-tight">Welcome back Dr Lee 👋</h2>

          <Popover>
            <PopoverTrigger>
              <Button variant="outline">
                <BookHeart className="h-[16px] w-[16px] text-red-500 mr-1" />
                <span className="font-semibold">View patient's info</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="mx-4 w-1/2">
              <div className="text-xl font-semibold">Hannah Chia</div>
              <div className="grid grid-cols-4 gap-4">
                <div>
                  <div className="text-gray-500 text-sm">Patient ID</div>
                  <div className="text-lg">P0001</div>
                </div>
                <div>
                  <div className="text-gray-500 text-sm">Age</div>
                  <div className="text-lg">28</div>
                </div>
                <div>
                  <div className="text-gray-500 text-sm">Gravida</div>
                  <div className="text-lg">1</div>
                </div>
                <div>
                  <div className="text-gray-500 text-sm">Parity</div>
                  <div className="text-lg">0</div>
                </div>
                <div>
                  <div className="text-gray-500 text-sm">Gest Weeks</div>
                  <div className="text-lg">40 + 2</div>
                </div>
                <div>
                  <div className="text-gray-500 text-sm">Admission</div>
                  <div className="text-lg">7-Jul-2024 03:41</div>
                </div>
                <div>
                  <div className="text-gray-500 text-sm">Ruptured Membrane</div>
                  <div className="text-lg">7-Jul-2024 23:59</div>
                </div>
                <div>
                  <div className="text-gray-500 text-sm">Risk Factor</div>
                  <div className="text-lg">NIL</div>
                </div>
              </div>
            </PopoverContent>
          </Popover>

          <div id="dashboard-content" className="flex flex-col w-full space-y-4">
            <div className="col-span-2">
              <div id="status-panel" className="flex flex-row gap-3">
                <StatusCard bgColor="bg-blue-200" icon={<HeartPulse className="h-5 w-5 text-blue-500" />} title="Heart Rate" value="80 BPM" />
                <StatusCard bgColor="bg-sky-200" icon={<Stethoscope className="h-5 w-5 text-sky-500" />} title="Blood Pressure" value="120/80 mmHg" />
                <StatusCard bgColor="bg-fuchsia-200" icon={<Waves className="h-5 w-5 text-fuchsia-500" />} title="SpO2" value="98%" />
              </div>
            </div>
          </div>
          <CtgChart />
          <LabourProgressChart />
        </div>
      </main>
    );
  }

  return (
    <main className="h-full">
      <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <div id="top-bar" className="flex w-full justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Welcome back Dr Lee 👋</h2>
          <div className="flex flex-row gap-2">
            <Button variant="outline" className="gap-2">
              <Calendar size={20} />
              {today}
            </Button>
            <ModeToggle />
          </div>
        </div>

        <div id="dashboard-content" className="grid grid-cols-3 gap-3">
          <div className="col-span-2">
            <PatientDetailsCard />
          </div>
          <div className="row-span-4">
            <CtgChart />
          </div>
          <div className="col-span-2">
            <LabourProgressChart />
          </div>
          <div className="col-span-2">
            <div id="status-panel" className="flex flex-row gap-3">
              <StatusCard bgColor="bg-blue-200" icon={<HeartPulse className="h-8 w-8 text-blue-500" />} title="Heart Rate" value="80 BPM" />
              <StatusCard bgColor="bg-sky-200" icon={<Stethoscope className="h-8 w-8 text-sky-500" />} title="Blood Pressure" value="120/80 mmHg" />
              <StatusCard bgColor="bg-fuchsia-200" icon={<Waves className="h-8 w-8 text-fuchsia-500" />} title="SpO2" value="98%" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
