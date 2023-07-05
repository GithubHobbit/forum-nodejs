import { Request, Response } from 'express'
import { Forum } from '../models/index.js'

class ForumController {
  async getAll(req: Request, res: Response) {
    let forums = Forum.findAll()
  }
}
