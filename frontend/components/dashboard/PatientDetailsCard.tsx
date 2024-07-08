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
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div>
                            <div className="text-gray-500 text-sm">Patient ID</div>
                            <div className="text-lg">P0001</div>
                        </div>
                        <div>
                            <div className="text-gray-500 text-sm">Age</div>
                            <div className="text-lg">28</div>
                        </div>
                        <div>
                            <div className="text-gray-500 text-sm">Admission</div>
                            <div className="text-lg">7-Jul-2024 23:49</div>
                        </div>
                        <div>
                            <div className="text-gray-500 text-sm">Purity</div>
                            <div className="text-lg">1</div>
                        </div>
                        <div>
                            <div className="text-gray-500 text-sm">Labour Onset</div>
                            <div className="text-lg">Spontaneous</div>
                        </div>
                        <div>
                            <div className="text-gray-500 text-sm">Ruptured Membrane</div>
                            <div className="text-lg">8-Jul-2024 00:13</div>
                        </div>
                    </div>
            </CardContent>
        </Card>
    )
}

export default PatientDetailsCard