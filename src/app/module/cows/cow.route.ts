import express from 'express'
import { CowValidation } from './cow.validation';
import validateRequest from '../../../middlewares/validateRequest';


const cowRouter = express.Router();

cowRouter.post('/cows', validateRequest(CowValidation.createCowZodSchema), /* CowController.createCow */);

export default cowRouter;