import { Knex } from "knex";

const tableName = "movie";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(tableName, (table) => {
    table.string("Title").notNullable(); 
    table.string("Year");
    table.string("Rated");
    table.string("Runtime"); 
    table.text("Plot"); 
    table.string("imdbRating"); 
    table.string("imdbID").notNullable().primary();  // Fixed the primary key definition
    table.integer('likes').defaultTo(0); 
    table.integer('dislikes').defaultTo(0);
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(tableName);
}
