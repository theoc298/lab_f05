import {CarparkDos} from "../domain/CarparkDos.ts";
import axios from "axios";
import {CombinedData, Result} from "../domain/CombinedData.ts";
import {CarparkVacancy} from "../domain/CarparkVacancy.ts";

export const getLandingData = async (vehicleType: string): Promise<CombinedData> =>{
    const response1 = await axios.get<CarparkDos>(
        `https://api.data.gov.hk/v1/carpark-info-vacancy?vehicleTypes=${vehicleType}`)
    const response2 = await  axios.get<CarparkVacancy>(
        `https://api.data.gov.hk/v1/carpark-info-vacancy?data=vacancy&vehicleTypes=${vehicleType}`)

    const data1 = response1.data;
    const data2 = response2.data;

    const combinedDataResults: Result[] = [];

    for (const item1 of data1.results) {
        const matchedItem = data2.results.find(item2 => item2.park_Id === item1.park_Id);
        const mergedItem = Object.assign({}, item1, matchedItem);
        combinedDataResults.push(mergedItem);
    }
    console.log(combinedDataResults);
    const combinedData: CombinedData = {
        results:combinedDataResults
    };

    return combinedData;

}