import {MigrationInterface, QueryRunner, Table, TableIndex, TableForeignKey} from "typeorm";

export class MessageModel1620779203334 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'messages',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'createdAt',
          type: 'timestamp',
          default: 'now()',
        },
        {
          name: 'fromUserID',
          type: 'int',
          isNullable: true,
        },
        {
          name: 'toUserID',
          type: 'int',
          isNullable: true,
        },
        {
          name: 'content',
          type: 'text',
        },
      ],
    }), true);

    await queryRunner.createIndex('messages', new TableIndex({
      name: 'idx_messages_created_at',
      columnNames: ['createdAt'],
    }));

    await queryRunner.createForeignKey('messages', new TableForeignKey({
      columnNames: ['fromUserID'],
      referencedColumnNames: ['id'],
      referencedTableName: 'users',
      onDelete: 'SET NULL',
    }));

    await queryRunner.createForeignKey('messages', new TableForeignKey({
      columnNames: ['toUserID'],
      referencedColumnNames: ['id'],
      referencedTableName: 'users',
      onDelete: 'SET NULL',
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('messages');
    await queryRunner.dropIndices(table, table.indices);
    await queryRunner.dropForeignKeys(table, table.foreignKeys);
    await queryRunner.dropTable(table);
  }
}
