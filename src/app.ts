import express, { Application } from 'express'
import cors from 'cors'
import router from './app/module/users/user.route'
import globalErrorHandler from './middlewares/globalErrorHandler'

const app: Application = express()

// cors
app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// application routes
app.use('/api/v1', router)


app.use(globalErrorHandler)

export default app
