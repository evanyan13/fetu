import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import { getToday } from '@/lib/utils';
import { LabourProgressChart } from '@/components/LabourProgressChart';

export default function Home() {
  const today = getToday();

  return (
    <main className="h-full">
      <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <div id="top-bar" className="flex w-full justify-between">
          <h2 className="text-3xl font-bold tracking-tight">
              Hi, Welcome back 👋
          </h2>
          <Button variant="outline" className="gap-2 text-gray-700">
            <Calendar size={20} />
            { today }
          </Button>
        </div>
        <div id="labour-progression-chart">
          <LabourProgressChart />
        </div>
      </div>
    </main>
  );
}
