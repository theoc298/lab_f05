import {Container} from "react-bootstrap";
import SearchForm from "../../component/SearchForm.tsx";
import PackingVacancyTable from "../../component/PackingVacancyTable.tsx";
import * as mockData from "./response.json"
import {CarparkDos} from "../../../domain/CarparkDos.ts";
import {useEffect, useState} from "react";
import TableLoadingSpinner from "../../component/TableLoadingSpinner0.tsx";
import {getLandingData} from "../../../api/PackingVacancyApi.ts";
import * as PackingVacancyApi from "../../../api/PackingVacancyApi.ts"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./LandingPage.css"

export default function LandingPage(){
    const [landingData, setLandingData]
        = useState<CarparkDos|undefined>(undefined);
    const [district, setDistrict]
        = useState('');
    const [vehicleType, setVehicleType]
        = useState('privateCar');
    const getLandingData = async ()=>{
        setLandingData(await PackingVacancyApi.getLandingData(vehicleType))
    }

    useEffect(()=>{
        getLandingData();
    },[])

    const handleDistrictChange = (event) => {
        setDistrict(event.target.value);
    };

    const handleVehicleTypeChange = (event) => {
        setVehicleType(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        getLandingData();
    };
    return(
        <>
            <Container>
                <h2 className="Header" style={{display:"flex", margin:"10px 10px", backgroundColor:""}}>
                    Packing Vacancy
                </h2>
                <Form className="form" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3"
                                >
                        <Form.Label style={{marginRight: "100px"}}>District</Form.Label>
                        <Form.Control placeholder="e.g. Kwun Tong" value={district} onChange={handleDistrictChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label style={{marginRight: "60px", whiteSpace: "nowrap"}}>Vehicle Type</Form.Label>
                        <Form.Select value={vehicleType} onChange={handleVehicleTypeChange}>
                            <option value="privateCar">Private Car</option>
                            <option value="LGV">LGV</option>
                            <option value="HGV">HGV</option>
                            <option value="Coach">Coach</option>
                            <option value="Motorcycle">Motorcycle</option>
                        </Form.Select>
                    </Form.Group>
                    <Button variant="primary" type="submit" style={{display: "flex", marginLeft: "10px", marginBottom:"20px"}}>
                        Search
                    </Button>
                </Form>
                <br/>
                {
                    landingData?
                        <PackingVacancyTable landingData={landingData} vehicleType={vehicleType} district={district}/>:
                        <TableLoadingSpinner/>
                }
            </Container>
        </>
    )
}