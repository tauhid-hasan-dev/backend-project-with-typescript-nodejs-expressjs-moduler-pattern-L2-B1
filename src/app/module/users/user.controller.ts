import {Request , Response} from "express";
import { UserServices } from "./user.services"
import httpStatus from "http-status";

const createUser = async(req: Request, res:Response, )=> {
    try{
        const {user} = req.body;
        // console.log(user)
        const result = await UserServices.createUser(user);
         
        res.status(400).json({
            statusCode : httpStatus.OK,
            success: true,
            message: 'User created successfully',
            data: result
        })

    }catch(error){
        res.status(400).json({
            success: false,
            message: 'Failed to create user',
        })
    }
}

export const UserController = {
    createUser,
}