import {BaseEntity, Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import bcrypt from "bcrypt";

@Entity({
  name: 'users',
})
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({unique: true})
  email: string;

  @Column()
  password: string;

  @Column({default: false})
  isAdmin: boolean;

  async comparePassowrd(password: string): Promise<boolean> {
    const entityPassword = this.password;
    return await bcrypt.compare(password, entityPassword);
  }

  async updatePassword(password: string): Promise<void> {
    this.password = await bcrypt.hash(password, 10);
    await this.save();
  }

  static async createAdmin(firstName: string, lastName: string, email: string, password: string): Promise<User> {
    const admin = new User();
    admin.firstName = firstName;
    admin.lastName = lastName;
    admin.email = email;
    admin.password = await bcrypt.hash(password, 10);
    admin.isAdmin = true;
    await admin.save();

    return admin;
  }
}
