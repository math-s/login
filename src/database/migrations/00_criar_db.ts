import Knex from 'knex';

export async function up(knex: Knex){
  return knex.schema.createTable('person', table => {
    table.increments('id').primary();
    table.string('nome', 50).notNullable();
    table.timestamps();
  })
}

export async function down(knex: Knex){
  return knex.schema.dropTable('person');
}