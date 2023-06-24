import {  Model } from 'mongoose';

export type ILocations = "Dhaka" | "Chattogram" | "Barishal" | "Rajshahi" | "Sylhet" | "Comilla" | "Rangpur" | "Mymensingh";
export type IBreeds = "Brahman" | "Nellore" | "Sahiwal" | "Gir" | "Indigenous" | "Tharparkar" | "Kankrej";


export type ICow = {
    name: string,
    age: number,
    price: number,
    location: ILocations,
    breed: IBreeds,
    weight: number,
    label: string,
    category: string,
    seller:string
}


export type CowModel = Model<ICow, Record<string, unknown>>;