// import { sequelize, Forum } from "../models/index.js";

import { AppDataSource } from '../models/index.js'
import { User } from '../models/entity/User.js'

class ForumService {
  async getData() {
    const user = new User()
    user.username = 'alex'
    user.password = '123'

    await AppDataSource.manager.save(User)
  }
}

export default new ForumService()
