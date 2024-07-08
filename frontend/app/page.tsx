import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import { getToday } from '@/lib/utils';
import { LabourProgressChart } from '@/components/dashboard/LabourProgressChart';
import { ModeToggle } from '@/components/dashboard/ModeToggle';
import PatientDetailsCard from '@/components/dashboard/PatientDetailsCard';

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

        <div id="dashboard-content" className='grid gap-3'>
          <PatientDetailsCard />
          <LabourProgressChart />
        </div>

      </div>
    </main>
  );
}
