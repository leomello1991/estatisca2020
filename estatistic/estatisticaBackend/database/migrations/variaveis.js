'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VariaveisSchema extends Schema {
  up () {
    this.create('variaveis', (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('nome', 255).notNullable().unique().index()
      table.string('valor', 80).defaultTo(null)
      table.timestamps()
    })
  }

  down () {
    this.drop('variaveis')
  }
}


module.exports = VariaveisSchema
