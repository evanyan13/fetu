import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface StatusCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  bgColor: string;
}

const StatusCard = (props: StatusCardProps) => {
    return (
        <Card className={`p-6 flex flex-col items-start justify-between h-52 w-72 rounded-lg ${props.bgColor}`}>
          <div className="flex bg-white rounded-2xl flex-shrink-0 mt-2 h-14 w-14 justify-center items-center">
            {props.icon}
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-2xl font-bold">{props.value}</div>
            <div className="text-gray-600">{props.title}</div>
          </div>
        </Card>
    );
}

export default StatusCard