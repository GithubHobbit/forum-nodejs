import { dataSource } from './data-source.js'
import { Forum } from './entity/Forum.js'
import { Message } from './entity/Message.js'
import { Topic } from './entity/Topic.js'
import { User } from './entity/User.js'

// AppDataSource.initialize()
//   .then(() => {
//     console.log('Database initialize')
//   })
//   .catch((error) => console.log(error))

export { dataSource, User, Message, Topic, Forum }
