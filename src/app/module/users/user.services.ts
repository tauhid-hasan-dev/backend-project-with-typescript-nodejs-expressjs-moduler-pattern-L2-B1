
import  config  from "../../../config";
import ApiError from "../../../errors/ApiError";
import { IUser } from "./user.interface"
import { User } from "./user.model"

const createUser = async(user:IUser):Promise<IUser | null> => {
   if(!user.password){
    user.password = config.default_user_pass as string;
   }
   const createdUser = await User.create(user)

   if(!createUser){
    throw new ApiError(400,'Failed! User could not be created')
   }
   return createdUser;
}

const getSingleUser = async(id: string ): Promise<IUser | null>=> {
    const result = await User.findById(id);
    return result;
  }

export const UserServices = {
    createUser,
    getSingleUser
}