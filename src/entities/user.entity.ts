import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number
  @Column()
  username: string
  @Column()
  email: string
  @Column()
  address: string
  @Column()
  phone_number: string
  @Column()
  state: string
  @Column()
  country: string
  @Column()
  role: string
  @Column()
  gender: string
  @Column()
  password: string
}
