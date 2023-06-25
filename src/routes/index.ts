import express from 'express'
import { UserRoutes } from '../app/module/users/user.route';
import { CowRoutes } from '../app/module/cows/cow.route';

const router = express.Router();

/* const  */

router.use('/', UserRoutes);
router.use('/', CowRoutes);

export default router