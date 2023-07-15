import { Router } from 'express'
import ForumController from '../controllers/forum.controller.js'

const forumRouter = Router()
  .get('/', ForumController.forumsView)
  .use('/create', ForumController.createForumView)
  .use('/:forumId', ForumController.getTopicsView)

export const forum = Router()
  // Редирект '/' на основной дефолтный адрес - '/forum'
  .use(/^[/]$/, (_, res) => {
    res.redirect('/forum')
  })
  .use('/forum', forumRouter)
