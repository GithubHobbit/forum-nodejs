import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import { sequelize } from './models/index.js'
import { forum } from './routes/index.js'
import path from 'path'
import { fileURLToPath } from 'url'

dotenv.config()

const app: Express = express()
const port = process.env.PORT

app.set('view engine', 'ejs')
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
app.set('views', path.join(__dirname, '..', 'src', 'views'))

app.use('/', forum)

sequelize
  .sync()
  .then(() => console.log('Database synchronized'))
  .catch((err: unknown) => console.log(err))

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
