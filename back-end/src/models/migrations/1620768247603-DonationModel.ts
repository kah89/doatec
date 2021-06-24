import {MigrationInterface, QueryRunner, Table, TableForeignKey, TableIndex} from "typeorm";

export class DonationModel1620768247603 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'donations',
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
          name: 'updatedAt',
          type: 'timestamp',
          default: 'now()',
        },
        {
          name: 'collectionDate',
          type: 'timestamp',
          isNullable: true,
        },
        {
          name: 'address',
          type: 'text',
        },
        {
          name: 'status',
          type: 'int',
          default: 0,
        },
        {
          name: 'giverID',
          type: 'int',
          isNullable: true,
        },
        {
          name: 'computerID',
          type: 'int',
          isNullable: true,
        },
      ],
    }), true);

    await queryRunner.createIndex('donations', new TableIndex({
      name: 'idx_donations_status',
      columnNames: ['status'],
    }));

    await queryRunner.createIndex('donations', new TableIndex({
      name: 'idx_donations_collection_date',
      columnNames: ['collectionDate'],
    }));

    await queryRunner.createIndex('donations', new TableIndex({
      name: 'idx_donations_created_at',
      columnNames: ['createdAt'],
    }));

    await queryRunner.createIndex('donations', new TableIndex({
      name: 'idx_donations_updated_at',
      columnNames: ['updatedAt'],
    }));

    await queryRunner.createForeignKey('donations', new TableForeignKey({
      columnNames: ['giverID'],
      referencedColumnNames: ['id'],
      referencedTableName: 'users',
      onDelete: 'SET NULL',
    }));

    await queryRunner.createForeignKey('donations', new TableForeignKey({
      columnNames: ['computerID'],
      referencedColumnNames: ['id'],
      referencedTableName: 'computers',
      onDelete: 'SET NULL',
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('donations');
    await queryRunner.dropIndices(table, table.indices);
    await queryRunner.dropForeignKeys(table, table.foreignKeys);
    await queryRunner.dropTable(table, true);
  }
}
