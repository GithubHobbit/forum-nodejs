import { Request, Response } from 'express'
import { dataSource, Forum, Topic } from '../models/index.js'
import ForumService from '../services/Forum.service.js'
import { forum } from '../routes/forum.js'

class ForumController {
  async createForumView(req: Request, res: Response) {
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

  async getTopicsView(req: Request, res: Response) {
    const topicRepository = dataSource.getRepository(Topic)
    const topics = await topicRepository.find({
      where: {
        forum: {
          id: +req.params.forumId,
        },
      },
    })

    return res.render('topics_view.ejs', { topics })
  }

  async forumsView(req: Request, res: Response) {
    const forumRepository = dataSource.getRepository(Forum)
    const forums = await forumRepository
      .createQueryBuilder('forum')
      .leftJoin(Topic, 'topic', 'topic.forumId = forum.id')
      .select(['forum.*', 'COUNT(topic.forum.id) AS topic_cnt'])
      .groupBy('forum.id')
      // .getQuery()
      .getRawMany()

    // const forums: Forum[] = await forumRepository.find()
    // console.log(forums)
    return res.render('forums_view.ejs', { forums })
  }
}

export default new ForumController()
