
import express, { Application } from 'express'
import cors from 'cors'
import userRouter from './app/module/users/user.route'
import globalErrorHandler from './middlewares/globalErrorHandler'
/* import ApiError from './errors/ApiError' */

const app: Application = express()

// cors
app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/* app.use('/', ()=>{
    throw new ApiError(400, 'ore baba re')
}) */

// application routes
app.use('/api/v1', userRouter)


app.use(globalErrorHandler)

export default app
