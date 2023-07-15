import { Router } from 'express'
import { ForumController } from '../controllers/index.js'

export const forum = Router()
  .get('/', ForumController.getAll)
  .use('/create', ForumController.create)
  .get('/:forumId/', ForumController.getOne)
