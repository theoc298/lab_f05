
export interface CombinedData {
    results: Result[];
}
export interface Result {
    park_Id:         string;
    name: string;
    displayAddress:  string;
    renditionUrls?:  RenditionUrls;
    latitude:        number;
    longitude:       number;
    privateCar?: Hgv[];
    LGV?:        Hgv[];
    HGV?:        Hgv[];
    motorCycle?: Hgv[];
    coach?:      Hgv[];
}
export interface Hgv {
    vacancy:      number;
}
export interface RenditionUrls {
    carpark_photo?: string;
}