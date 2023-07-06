// import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { User } from './entity/User.js'

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'bd.sqlite3',
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
})
