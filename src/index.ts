import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import { error, forum, topic } from './routes/index.js'
import path from 'path'
import { dataSource } from './models/data-source.js'
import bodyParser from 'body-parser'

// Конфигурация
dotenv.config()
const app: Express = express()
const port = process.env.PORT

// Конфигурация получаемых POST запросов
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// EJS шаблонизатор
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '..', 'src', 'views'))

// Статика
app
  .use(
    '/bootstrap/css',
    express.static(__dirname + '/../node_modules/bootstrap/dist/css')
  )
  .use(
    '/bootstrap/js',
    express.static(__dirname + '/../node_modules/bootstrap/dist/js')
  )
  .use('/static', express.static(__dirname + '/../src/static'))

// Роуты
app.use(/^[/]$/, (_, res) => {
  // Редирект '/' на основной дефолтный адрес - '/forum'
  res.redirect('/forums')
})
app.use('/forums', forum).use('/topics', topic).use('/errors', error)

// Запускаем БД
dataSource
  .initialize()
  .then(() => console.log('Database initialize'))
  .catch((error) => console.log(error))

// Запуск приложения
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
