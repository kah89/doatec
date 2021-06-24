import {BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToOne, CreateDateColumn, JoinColumn} from "typeorm";
import { IsNotEmpty } from "class-validator";
import { User } from "./user";

@Entity({
  name: 'messages',
  orderBy: {createdAt: 'DESC'},
})
export class Message extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @OneToOne(() => User)
  @JoinColumn()
  fromUser: User;

  @OneToOne(() => User)
  @JoinColumn()
  toUser: User;

  @Column()
  @IsNotEmpty()
  content: string;
}
