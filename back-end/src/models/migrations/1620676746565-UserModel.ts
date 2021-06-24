import {MigrationInterface, QueryRunner, Table, TableIndex} from "typeorm";

export class UserModel1620676746565 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'users',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'firstName',
          type: 'varchar',
        },
        {
          name: 'lastName',
          type: 'varchar',
        },
        {
          name: 'email',
          type: 'varchar',
          isUnique: true,
        },
        {
          name: 'password',
          type: 'varchar',
        },
        {
          name: 'isAdmin',
          type: 'bool',
        }
      ],
    }), true);

    await queryRunner.createIndex('users', new TableIndex({
      name: 'idx_users_email',
      isUnique: true,
      columnNames: ['email'],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropIndex('users', 'idx_users_email');
    await queryRunner.dropTable('users', true);
  }
}
