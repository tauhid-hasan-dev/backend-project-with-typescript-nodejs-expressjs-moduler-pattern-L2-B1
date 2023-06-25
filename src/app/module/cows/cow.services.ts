

import { PaginationHelper } from "../../../helpers/paginationHelper";
import { IGenericResponse } from "../../../interfaces/common";
import { IPaginationOptions } from "../../../interfaces/pagination";
import { ICow } from "./cow.interface";
import { Cow } from "./cow.model";

const createCow = async(payload:ICow): Promise<ICow> => {
    const result = await Cow.create(payload);
    return result;
}


const getAllCow = async(paginationOptions : IPaginationOptions): Promise<IGenericResponse<ICow[]>> => {

   const {page , limit, skip} = PaginationHelper.calculatePagination(paginationOptions)

   const result = await Cow.find().sort().skip(skip).limit(limit);

   const total = await Cow.countDocuments()

   return {
        meta : {
            page, 
            limit,
            total,
        },
        data: result
   };
}

export const CowServices = {
    createCow,
    getAllCow
}