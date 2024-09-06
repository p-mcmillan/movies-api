import { Knex } from "knex";

const tableName = "movie";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.table(tableName, (table) => {
    table.string("Genre"); // Adding new column
    table.string("Actors"); // Adding new column
    table.string("Poster"); // Adding new column
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.table(tableName, (table) => {
    table.dropColumn("Genre"); // Dropping column
    table.dropColumn("Actors"); // Dropping column
    table.dropColumn("Poster"); // Dropping column
  });
}
