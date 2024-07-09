import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const PatientDetailsCard = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    Hannah Chia
                </CardTitle>
            </CardHeader>
            <CardContent>
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
            </CardContent>
        </Card>
    )
}

export default PatientDetailsCard