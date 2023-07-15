import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { User } from './User.js'
import { Forum } from './Forum.js'
import { Message } from './Message.js'

@Entity()
export class Topic {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ length: 60 })
  title!: string

  @Column({ length: 200 })
  description!: string

  @ManyToOne(() => User, (user) => user.topics)
  author!: User

  @ManyToOne(() => Forum, (forum) => forum.topics)
  forum!: Forum

  @OneToMany(() => Message, (message) => message.topic)
  messages!: Topic[]

  @CreateDateColumn()
  created_at!: Date
}
