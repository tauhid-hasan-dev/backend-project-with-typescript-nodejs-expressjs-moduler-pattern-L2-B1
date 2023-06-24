import { z } from 'zod';
import { cowBreeds, cowCategories, cowLocations } from './cow.constant';

const createCowZodSchema = z.object({
    body: z.object({
        name: z.string({
            required_error: 'name is required',
        }),
        age: z.number({
            required_error: 'age is required',
        }),
        price: z.number({
            required_error: 'price is required',
        }),
        location: z.enum([...cowLocations] as [string, ...string[]], {
            required_error: 'location is required',
        }),
        breed: z.enum([...cowBreeds] as [string, ...string[]], {
            required_error: 'breed is required',
        }),
        weight: z.number({
            required_error: 'weight is required',
        }),
        label: z.string({
            required_error: 'label is required',
        }),
        category: z.enum([...cowCategories] as [string, ...string[]], {
            required_error: 'category is required',
        }),
        seller: z.string({
            required_error: 'seller is required',
        }),
    })

});

export const CowValidation = {
  createCowZodSchema
};
