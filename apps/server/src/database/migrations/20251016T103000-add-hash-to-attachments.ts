import { type Kysely } from 'kysely';

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .alterTable('attachments')
    .addColumn('hash', 'varchar(64)')
    .execute();

  await db.schema
    .createIndex('attachments_hash_idx')
    .on('attachments')
    .column('hash')
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema
    .dropIndex('attachments_hash_idx')
    .execute();

  await db.schema
    .alterTable('attachments')
    .dropColumn('hash')
    .execute();
}
