import {Result} from "../../domain/CarparkDos.ts";

type Props ={
    result: Result
    vehicleType: string
}
export default function PackingVacancyTableRow({result}:Props){
    const handleMapButtonClick = ()=>{
        console.log(result.longitude + " " + result.latitude);
        const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${result.latitude}%2C${result.longitude}`
        window.open(googleMapsUrl, '_blank');
    };

    return(
        <>
            <tr>
                <td>
                    <img width="64px" src={result.renditionUrls?.carpark_photo} alt="carPark_Photo"/>
                </td>
                <td>{result.name}</td>
                <td>{result.displayAddress}</td>
                <td>{(result.privateCar?.space ?? 0 )+ (result.HGV?.space ?? 0)+ (result.LGV?.space??0)
                    + (result.coach?.space??0) + (result.motorCycle?.space??0)}</td>
                <td>
                    <button type="button" className="btn btn-primary"
                            onClick={handleMapButtonClick}>Map</button>
                </td>
            </tr>
        </>
    )
}