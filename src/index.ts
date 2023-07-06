import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import { forum } from './routes/index.js'
import path from 'path'
import { fileURLToPath } from 'url'
import { AppDataSource } from './models/data-source.js'
// import 'reflect-metadata'

// Конфигурация
dotenv.config()
const app: Express = express()
const port = process.env.PORT

// EJS шаблонизатор
app.set('view engine', 'ejs')
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
app.set('views', path.join(__dirname, '..', 'src', 'views'))

// Статика
app.use(
  '/bootstrap/css',
  express.static(__dirname + '/../node_modules/bootstrap/dist/css')
)
app.use(
  '/bootstrap/js',
  express.static(__dirname + '/../node_modules/bootstrap/dist/js')
)
app.use('/static', express.static(__dirname + '/../src/static'))

// Роуты
app.use('/', forum)

// Запускаем БД
AppDataSource.initialize()
  .then(() => {
    console.log('Database initialize')
  })
  .catch((error) => console.log(error))

// Запуск приложения
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
