import { AppDataSource } from './data-source.js'

AppDataSource.initialize()
  .then(() => {
    console.log('Database initialize')
  })
  .catch((error) => console.log(error))

export { AppDataSource }

// export { sequelize } from './db.js'
// export { User, Forum, Topic, Message } from '../models/models.js'
