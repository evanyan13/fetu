import { Button } from '@/components/ui/button';
import { Calendar, HeartPulse, Stethoscope, Waves } from 'lucide-react';
import { getToday } from '@/lib/utils';
import { LabourProgressChart } from '@/components/dashboard/LabourProgressChart';
import { ModeToggle } from '@/components/dashboard/ModeToggle';
import PatientDetailsCard from '@/components/dashboard/PatientDetailsCard';
import StatusCard from '@/components/dashboard/StatusCard';
import { CtgChart } from '@/components/dashboard/CtgChart';

export default function Home() {
  const today = getToday();

  return (
    <main className="h-full">
      <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">

        <div id="top-bar" className="flex w-full justify-between">
          <h2 className="text-3xl font-bold tracking-tight">
            Welcome back Dr Lee 👋
          </h2>
          <div className='flex flex-row gap-2'>
            <Button variant="outline" className="gap-2">
              <Calendar size={20} />
              {today}
            </Button>
            <ModeToggle />
          </div>
        </div>

        <div id="dashboard-content" className='grid grid-cols-3 gap-3'>
          <div className='col-span-2'>
            <PatientDetailsCard />
          </div>
          <div className='row-span-3'>
            <CtgChart />
          </div>
          <div className='col-span-2'>
            <LabourProgressChart />
          </div>
          <div className='col-span-2'>
            <div id="status-panel" className='flex flex-row gap-3'>
              <StatusCard
                bgColor="bg-blue-200"
                icon={<HeartPulse className="h-8 w-8 text-blue-500" />}
                title="Heart Rate"
                value="80 BPM"
              />
              <StatusCard
                bgColor="bg-sky-200"
                icon={<Stethoscope className="h-8 w-8 text-sky-500" />}
                title="Blood Pressure"
                value="120/80 mmHg"
              />
              <StatusCard
                bgColor="bg-fuchsia-200"
                icon={<Waves className="h-8 w-8 text-fuchsia-500" />}
                title="SpO2"
                value="98%"
              />
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
