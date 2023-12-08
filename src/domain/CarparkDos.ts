export interface CarparkDos {
    results: Result[];
}
export interface Result {
    park_Id:         string;
    name: string;
    displayAddress:  string;
    renditionUrls?:  RenditionUrls;
    latitude:        number;
    longitude:       number;
}
export interface RenditionUrls {
    carpark_photo?: string;
}
