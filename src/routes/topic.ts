import { Router } from 'express'
import topicController from '../controllers/topic.controller'

export const topic = Router().use(
  '/topic/create',
  topicController.createTopicView
)
