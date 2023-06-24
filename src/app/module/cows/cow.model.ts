import { Schema, model } from "mongoose";
import { CowModel, ICow } from "./cow.interface";
import { cowBreeds, cowCategories, cowLocations } from "./cow.constant";
import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";

const cowSchema = new Schema<ICow, CowModel>({
    name:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    location: {
        type: String,
        enum: cowLocations,
        required: true
    },
    breed: {
        type: String,
        enum: cowBreeds,
        required: true
    },
    weight:{ type: Number, required: true},
    label: { type: String, required: true},
    category:
        { 
        type: String, 
        enum: cowCategories, 
        required: true
        },
    seller:{ type: String, required: true},
  },
  {
    timestamps: true,  
  }
  );

  // Duplicate error(seller)
  cowSchema.pre('save', async function(next){
    const isExit = await Cow.findOne({seller: this.seller});
    if(isExit){
        throw new ApiError(httpStatus.CONFLICT, 'This Cow is already exits')
    }
    next()
  })

  export const Cow = model<ICow, CowModel>('Cow', cowSchema);

  