import express from 'express'
import { UserRoutes } from '../app/module/users/user.route';
import { CowRoutes } from '../app/module/cows/cow.route';

const router = express.Router();

const moduleRoutes = [
    {
        path: '/',
        route: UserRoutes
    },
    {
        path: '/',
        route: CowRoutes
    },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router