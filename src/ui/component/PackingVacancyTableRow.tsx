import { Result } from "../../domain/CombinedData";


type Props ={
    result: Result
    vehicleType: string
}
export default function PackingVacancyTableRow({result, vehicleType}:Props){
    const handleMapButtonClick = ()=>{
        console.log(result.longitude + " " + result.latitude);
        const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${result.latitude}%2C${result.longitude}`
        window.open(googleMapsUrl, '_blank');
    };
    // const privateCarVacancy = (result.privateCar ? result.privateCar[0].vacancy : 0 );
    // const LGVVacancy = (result.LGV ? result.LGV[0].vacancy : 0 );
    // const HGVVacancy = (result.HGV ? result.HGV[0].vacancy : 0 );
    // const motorCycleVacancy = (result.motorCycle ? result.motorCycle[0].vacancy : 0 );
    // const coachVacancy = (result.coach ? result.coach[0].vacancy : 0 );

    return(
        <>
            <tr>
                <td>
                    <img width="64px" src={result.renditionUrls?.carpark_photo} alt="carPark_Photo"/>
                </td>
                <td>{result.name}</td>
                <td>{result.displayAddress}</td>
                <td>
                    {
                        (result.privateCar && result.privateCar[0]?.vacancy || 0) +
                        (result.LGV && result.LGV[0]?.vacancy || 0) +
                        (result.HGV && result.HGV[0]?.vacancy || 0) +
                        (result.motorCycle && result.motorCycle[0]?.vacancy || 0) +
                        (result.coach && result.coach[0]?.vacancy || 0)
                    }
                </td>

                <td>
                    <button type="button" className="btn btn-primary"
                            onClick={handleMapButtonClick}>Map</button>
                </td>
            </tr>
        </>
    )
}