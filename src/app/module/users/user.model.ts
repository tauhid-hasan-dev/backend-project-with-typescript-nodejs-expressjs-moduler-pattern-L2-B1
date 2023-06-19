import { Schema, model } from "mongoose";
import { IUser, UserModel } from "./user.interface";
import { userRoles } from "./user.constant";

const userSchema = new Schema<IUser, UserModel>({
    password:{
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: userRoles,
        required: true
    },
    name:{
        firstName: { type: String, required: true},
        lastName: { type: String, required: true},
    },
    phoneNumber:{ type: String, required: true},
    address: { type: String, required: true},
    budget:{ type: Number, required: true},
    income:{ type: Number, required: true},
  },
  {
    timestamps: true, // Mongodb will create 2 date(create and update) automatically in schema 
  }
  );

  export const User = model<IUser, UserModel>('User', userSchema);