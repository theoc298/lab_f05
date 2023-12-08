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

    const readVacancy = (vehicleType: string) => {
        if (vehicleType === "privateCar"){
            if(result.privateCar && result.privateCar[0]?.vacancy === -1){
                return "No information"
            }
            return result.privateCar && result.privateCar[0]?.vacancy || 0
        }else if (vehicleType === "LGV"){
            if(result.LGV && result.LGV[0]?.vacancy === -1){
                return "No information"
            }
            return result.LGV && result.LGV[0]?.vacancy || 0
        }else if (vehicleType === "HGV"){
            if(result.HGV && result.HGV[0]?.vacancy === -1){
                return "No information"
            }
            return result.HGV && result.HGV[0]?.vacancy || 0
        }else if (vehicleType === "Coach"){
            if(result.motorCycle && result.motorCycle[0]?.vacancy === -1){
                return "No information"
            }
            return result.motorCycle && result.motorCycle[0]?.vacancy || 0
        }else {
            if(result.coach && result.coach[0]?.vacancy === -1){
                return "No information"
            }
            return result.coach && result.coach[0]?.vacancy || 0
        }
    }

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
                        readVacancy(vehicleType)
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