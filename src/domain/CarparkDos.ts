export interface CarparkDos {
    results: Result[];
}
export interface Result {
    park_Id:         string;
    name: string;
    displayAddress:  string;
    renditionUrls?:  RenditionUrls;
    privateCar?:     PrivateCar;
    LGV?:            Lgv;
    HGV?:            Hgv;
    coach?:          Coach;
    motorCycle?:     MotorCycle;
    latitude:        number;
    longitude:       number;
}
export interface RenditionUrls {
    carpark_photo?: string;
}
export interface PrivateCar {
    space:number;
}
export interface Lgv {
    space:  number;
}
export interface Hgv {
    space:  number;
}
export interface Coach {
    space:   number;
}
export interface MotorCycle {
    space:  number;
}
