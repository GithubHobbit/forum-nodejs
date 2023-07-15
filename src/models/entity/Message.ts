import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { User } from '../index.js'
import { Topic } from './Topic.js'

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id!: number

  @Column('text')
  text!: string

  @ManyToOne(() => User, (user) => user.messages)
  author!: User

  @ManyToOne(() => Topic, (topic) => topic.messages)
  topic!: Topic

  @CreateDateColumn()
  created_at!: Date
}
