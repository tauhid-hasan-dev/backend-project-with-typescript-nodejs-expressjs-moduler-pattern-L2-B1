
import express, { Application } from 'express'
import cors from 'cors'

import globalErrorHandler from './middlewares/globalErrorHandler'

import routes from './routes'
/* import ApiError from './errors/ApiError' */

const app: Application = express()

// cors
app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// testing unhandled rejection

/* app.use('/', ()=>{
    Promise.reject(new Error ('Unhandled Promise Rejection'))
}) */

app.use('/api/v1/', routes)

app.use(globalErrorHandler)

export default app
