import {Request , Response} from "express";
import { UserServices } from "./user.services"
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";

const createUser = catchAsync(async(req: Request, res:Response )=> {    
        const user = req.body;
        const result = await UserServices.createUser(user);

        sendResponse(res, {
                statusCode : httpStatus.OK,
                success: true,
                message: 'Users created successfully',
                data: result
        })       
})

export const UserController = {
    createUser,
}