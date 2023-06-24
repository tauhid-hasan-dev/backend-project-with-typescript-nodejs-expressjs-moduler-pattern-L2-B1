import express from 'express'
import { CowValidation } from './cow.validation';
import validateRequest from '../../../middlewares/validateRequest';
import { CowController } from './cow.controller';


const cowRouter = express.Router();

cowRouter.post('/cows', validateRequest(CowValidation.createCowZodSchema), CowController.createCow);

export const CowRoutes = cowRouter;