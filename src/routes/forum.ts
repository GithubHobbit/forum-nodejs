import express from 'express'
import ForumController from '../controllers/forum.controller.js'

const forumRouter = express.Router()
forumRouter.get('/', ForumController.getData)

export const forum = express
  .Router()
  .use(/^[/]$/, (_, res) => {
    res.redirect('/forum') // Редирект на основной дефолтный адрес - /forum
  })
  .use('/forum', forumRouter)
