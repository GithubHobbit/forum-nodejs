import { Request, Response } from 'express'
import { dataSource, Forum, Topic } from '../models/index.js'
import ForumService from '../services/Forum.service.js'

class ForumController {
  async create(req: Request, res: Response) {
    if (req.method == 'GET') {
      return res.render('create_forum_view.ejs')
    }

    if (req.method == 'POST') {
      let body = req.body
      if (!body.title || !body.description) {
        return res.render('create_forum_view.ejs', {
          old_values: { title: body.title, description: body.description },
        })
      }

      let forum = new Forum()
      forum.title = 'Тестовый форум2'
      forum.description = 'Описание тестового форума2'
    }
  }

  async getAll(req: Request, res: Response) {
    const forumRepository = dataSource.getRepository(Forum)
    const forums = await forumRepository
      .createQueryBuilder('forum')
      .leftJoin(Topic, 'topic', 'topic.forumId = forum.id')
      .select(['forum.*', 'COUNT(topic.forum.id) AS topic_cnt'])
      .groupBy('forum.id')
      // .getQuery()
      .getRawMany()

    return res.render('forums_view.ejs', { forums })
  }

  async getOne(req: Request, res: Response) {
    let forumId: number = +req.params.forumId
    const topicRepository = dataSource.getRepository(Topic)
    const topics = await topicRepository.find({
      where: {
        forum: {
          id: forumId,
        },
      },
    })

    return res.render('topics_view.ejs', { topics })
  }
}

export default new ForumController()
