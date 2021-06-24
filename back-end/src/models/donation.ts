import {BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { Length } from "class-validator";
import { User } from "./user";
import { Computer } from "./computer";

export enum Status {
  PENDING_APPROVAL,
  PENDING_COLLECTION,
  COLLECTED,
  UNDER_MAINTENANCE,
  PENDING_DONATION,
  DONATED,
}

@Entity({
  name: 'donations',
  orderBy: {id: 'DESC'},
})
export class Donation extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => User)
  @JoinColumn()
  giver: User;

  @OneToOne(() => Computer)
  @JoinColumn()
  computer: Computer;

  @Column({
    type: 'set',
    enum: Status,
    default: Status.PENDING_APPROVAL,
  })
  status: Status;

  @Column()
  collectionDate: Date;

  @Column()
  @Length(10)
  address: string;
}
