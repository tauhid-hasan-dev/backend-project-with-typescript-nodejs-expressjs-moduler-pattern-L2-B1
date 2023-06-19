import {Request , Response, NextFunction } from "express";
import { UserServices } from "./user.services"
import httpStatus from "http-status";

const createUser = async(req: Request, res:Response, next:NextFunction )=> {
    try{
        const user = req.body;
        const result = await UserServices.createUser(user);
         
        res.status(httpStatus.OK).json({
            statusCode : httpStatus.OK,
            success: true,
            message: 'User created successfully',
            data: result
        })

    }catch(error){
     next(error)
    }
}

export const UserController = {
    createUser,
}