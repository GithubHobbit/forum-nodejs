import { Router } from 'express'
import { TopicController } from '../controllers/index'

export const topic = Router()
  .use('/create', TopicController.create)
  .use('/:topicId', TopicController.getOne)
