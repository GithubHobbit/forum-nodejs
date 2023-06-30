import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import { sequelize } from './models/index.js'

dotenv.config()

const app: Express = express()
const port = process.env.PORT

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World')
})

sequelize
  .sync()
  .then(() => console.log('good'))
  .catch((err: unknown) => console.log(err))

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
