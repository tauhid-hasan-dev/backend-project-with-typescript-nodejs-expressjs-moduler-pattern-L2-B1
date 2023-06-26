
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response  } from "express";
import catchAsync from "../../../shared/catchAsync";
import { CowServices } from "./cow.services";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import pick from "../../../shared/pick";
import { paginationFields } from "../../../constants/pagination";

const createCow = catchAsync(
    async(req:Request, res: Response, next)=> {
        const cow = req.body;
        const result = await CowServices.createCow(cow)
        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Cow created successfully',
            data: result,
          });
    }
)

const getAllCow = catchAsync(
    async(req:Request, res: Response, next)=> {
        
        const paginationOptions = pick(req.query, paginationFields);

        const filters = pick(req.query, ['searchTerm', 'location', 'maxPrice', 'minPrice']);
        console.log(paginationOptions);
        console.log(filters)

        const result = await CowServices.getAllCow(
            filters,
            paginationOptions
            );

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Cows retrieved successfully',
            meta: result.meta,
            data: result.data,
        });
    }
)



export const CowController = {
    createCow,
    getAllCow
}