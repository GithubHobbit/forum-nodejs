import { Request, Response } from 'express'
import { AppDataSource } from '../models/index.js'
import ForumService from '../services/Forum.service.js'

class ForumController {
  async getData(req: Request, res: Response) {
    return res.render('forums_page.ejs', { content: 'Hello World' })
  }
}

export default new ForumController()
