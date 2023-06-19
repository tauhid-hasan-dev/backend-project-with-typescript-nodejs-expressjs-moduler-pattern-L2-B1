import { Schema, model } from "mongoose";
import { IUser, UserModel } from "./user.interface";

const userSchema = new Schema<IUser, UserModel>({
    password:{
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['seller', 'buyer'],
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
  });

  export const User = model<IUser, UserModel>('User', userSchema);