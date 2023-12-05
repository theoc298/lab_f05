import Table from "react-bootstrap/esm/Table";
import {CarparkDos} from "../../domain/CarparkDos.ts";
import PackingVacancyTableRow from "./PackingVacancyTableRow.tsx";

type Props = {
    landingData: CarparkDos
    vehicleType: string
    district: string
}
export default function PackingVacancyTable({landingData, vehicleType, district}:Props){
    const filteredData = landingData.results.filter((result)=>{
       return (
           result.displayAddress.toLowerCase().includes(district.toLowerCase())
       );
    });
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
                        filteredData.map((result)=>(
                            <PackingVacancyTableRow result={result} vehicleType={vehicleType} key={result.park_Id}/>
                        ))
                    }
                </tbody>
            </Table>
        </>
    )
}