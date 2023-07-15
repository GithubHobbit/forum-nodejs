import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Topic } from './Topic.js'

@Entity()
export class Forum {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ length: 60 })
  title!: string

  @Column({ length: 200 })
  description!: string

  @OneToMany(() => Topic, (topic) => topic.forum)
  topics!: Topic[]
}
