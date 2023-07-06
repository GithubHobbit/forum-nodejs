// import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm/browser'
import pkg from 'typeorm'
const { Column, Entity, PrimaryGeneratedColumn } = pkg

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number
  @Column({
    length: 80,
  })
  username!: string
  @Column()
  password!: string
}
