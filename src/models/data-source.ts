// import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { User } from './entity/User.js'
import { Forum } from './entity/Forum.js'
import { Topic } from './entity/Topic.js'
import { Message } from './entity/Message.js'

export const dataSource = new DataSource({
  type: 'sqlite',
  database: 'bd.sqlite3',
  synchronize: true,
  logging: false,
  entities: [User, Forum, Topic, Message],
  migrations: [],
  subscribers: [],
})
