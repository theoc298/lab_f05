import Table from "react-bootstrap/esm/Table";
import {CarparkDos} from "../../domain/CarparkDos.ts";
import PackingVacancyTableRow from "./PackingVacancyTableRow.tsx";
import {CombinedData, Result} from "../../domain/CombinedData.ts";

type Props = {
    landingDataResult: Result[]
    vehicleType: string
    district: string
}
export default function PackingVacancyTable({landingDataResult, vehicleType, district}:Props){

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
                        landingDataResult.map((result)=>(
                            <PackingVacancyTableRow result={result} vehicleType={vehicleType} key={result.park_Id}/>
                        ))
                    }
                </tbody>
            </Table>
        </>
    )
}