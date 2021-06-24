import {BaseEntity, Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import {Length} from "class-validator";

@Entity({
  name: 'computers',
})
export class Computer extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Length(8)
  title: string;

  @Column()
  description: string;
}
