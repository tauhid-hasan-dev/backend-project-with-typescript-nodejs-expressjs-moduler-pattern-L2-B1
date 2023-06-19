import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import router from './app/module/users/user.route'

const app: Application = express()

// cors
app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// application routes
app.use('/api/v1', router)

// Testing
app.get('/', (req: Request, res: Response) => {
  res.send('This is  a Backend for Online Cow Selling  for Eid Ul Adha...')
})

export default app
