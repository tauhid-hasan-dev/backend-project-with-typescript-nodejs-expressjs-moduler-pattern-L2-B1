/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response  } from "express";
import catchAsync from "../../../shared/catchAsync";
import { CowServices } from "./cow.services";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";

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

export const CowController = {
    createCow
}