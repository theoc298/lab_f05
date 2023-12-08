import Table from "react-bootstrap/esm/Table";
import PackingVacancyTableRow from "./PackingVacancyTableRow.tsx";
import {Result} from "../../domain/CombinedData.ts";

type Props = {
    landingDataResult: Result[]
    vehicleType: string
    district: string
}
export default function PackingVacancyTable({landingDataResult, vehicleType}:Props){
    const filterDistrict = (landingDataResult: Result[], vehicleType:string) =>{
        return landingDataResult.filter((result) => {

            switch (vehicleType) {
                case 'privateCar':
                    return result.privateCar !== undefined && result.privateCar[0]?.vacancy !==0;
                case 'LGV':
                    return result.LGV !== undefined && Array.isArray(result.LGV) && result.LGV[0]?.vacancy !==0;
                case 'HGV':
                    return result.HGV !== undefined && Array.isArray(result.HGV) && result.HGV[0]?.vacancy !==0;
                case 'motorCycle':
                    return result.motorCycle !== undefined && result.motorCycle[0]?.vacancy !==0;
                case 'coach':
                    return result.coach !== undefined && result.coach[0]?.vacancy !==0;
                default:
                    return false;
            }
        });
    }

    return(
        <>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Total Vacancy</th>
                    <th>Google Map</th>
                </tr>
                </thead>
                <tbody>
                    {
                        filterDistrict(landingDataResult, vehicleType).map((result) => (
                            <PackingVacancyTableRow result={result} vehicleType={vehicleType} key={result.park_Id} />
                        ))
                        // landingDataResult.map((result)=>(
                        //     <PackingVacancyTableRow result={result} vehicleType={vehicleType} key={result.park_Id}/>
                        // ))
                    }
                </tbody>
            </Table>
        </>
    )
}