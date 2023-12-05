import {CarparkDos} from "../domain/CarparkDos.ts";
import axios from "axios";

export const getLandingData = async (vehicleType: string): Promise<CarparkDos> =>{
    const response = await axios.get<CarparkDos>(
        `https://api.data.gov.hk/v1/carpark-info-vacancy?vehicleTypes=${vehicleType}`)
    return response.data;
}