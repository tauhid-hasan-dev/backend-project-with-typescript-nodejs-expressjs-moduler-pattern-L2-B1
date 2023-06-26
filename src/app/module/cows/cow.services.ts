
import { SortOrder } from "mongoose";
import { PaginationHelper } from "../../../helpers/paginationHelper";
import { IGenericResponse } from "../../../interfaces/common";
import { IPaginationOptions } from "../../../interfaces/pagination";
import { ICow, ICowFilter } from "./cow.interface";
import { Cow } from "./cow.model";
import { cowsSearchableFields } from "./cow.constant";

const createCow = async(payload:ICow): Promise<ICow> => {
    const result = await Cow.create(payload);
    return result;
}


const getAllCow = async(filters : ICowFilter, paginationOptions : IPaginationOptions): Promise<IGenericResponse<ICow[]>> => {

   const {searchTerm} = filters;

   const andConditions = [];

   // dynamic searching
   if(searchTerm){
    andConditions.push({
        $or: cowsSearchableFields.map((field)=> {
            return {
                [field]: {
                    $regex: searchTerm,
                    $options: 'i'
                }
            }
        })
    })
   }
   
    const {page , limit, skip, sortBy, sortOrder} = PaginationHelper.calculatePagination(paginationOptions);
   
   // dynamic sort condition (it will return a object with key-value pair)
   const sortConditions : {[key: string]: SortOrder} = {}

   if(sortBy && sortOrder){
    sortConditions[sortBy] = sortOrder;
   }

   const whereConditions = andConditions.length > 0 ? { $and: andConditions } : {};
   
   const result = await Cow.find(whereConditions).sort(sortConditions).skip(skip).limit(limit);

   // calculating total with countDocuments() method
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