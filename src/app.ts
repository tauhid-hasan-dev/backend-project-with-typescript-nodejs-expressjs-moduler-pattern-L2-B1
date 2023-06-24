
import express, { Application } from 'express'
import cors from 'cors'
import  { UserRoutes } from './app/module/users/user.route'
import globalErrorHandler from './middlewares/globalErrorHandler'
import { CowRoutes } from './app/module/cows/cow.route'
/* import ApiError from './errors/ApiError' */

const app: Application = express()

// cors
app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/* app.use('/', ()=>{
    Promise.reject(new Error ('Unhandled Promise Rejection'))
}) */

// application routes
app.use('/api/v1', UserRoutes)
app.use('/api/v1', CowRoutes)


app.use(globalErrorHandler)

export default app
