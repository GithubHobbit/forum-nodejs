import { Request, Response } from 'express'
import { Forum, Topic, dataSource } from '../models'

class TopicController {
  async createTopicView(req: Request, res: Response) {
    if (req.method === 'GET') {
      const forums = await dataSource.manager.find(Forum)
      return res.render('create_topic_view.ejs', { forums })
    }

    if (req.method === 'POST') {
      const { title, description, forumId } = req.body
      if (!title || !description) {
        const forums = await dataSource.manager.find(Forum)
        return res.render('create_topic_view.ejs', {
          old_values: req.body,
          forums,
        })
      }

      const new_topic = new Topic()
      new_topic.title = title
      new_topic.description = description
      new_topic.forum = forumId

      const topicRep = dataSource.getRepository(Topic)
      const result = await topicRep.save(new_topic)
      console.log(result)

      return res.redirect('/forums')
    }
  }
}

export default new TopicController()
