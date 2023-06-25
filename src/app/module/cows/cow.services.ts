

import { IPaginationOptions } from "../../../interfaces/pagination";
import { ICow } from "./cow.interface";
import { Cow } from "./cow.model";

const createCow = async(payload:ICow): Promise<ICow> => {
    const result = await Cow.create(payload);
    return result;
}

const getAllCow = async(paginationOptions : IPaginationOptions) => {
   const result = await Cow.find()
}

export const CowServices = {
    createCow,
    getAllCow
}