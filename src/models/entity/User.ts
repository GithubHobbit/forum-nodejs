// import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm/browser'
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { Topic } from './Topic.js'
import { Message } from './Message.js'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ length: 80 })
  username!: string

  @Column()
  password!: string

  @OneToMany(() => Topic, (topic) => topic.author)
  topics!: Message[]

  @OneToMany(() => Message, (message) => message.author)
  messages!: Topic[]
}
