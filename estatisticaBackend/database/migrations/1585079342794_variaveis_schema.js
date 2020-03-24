'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VariaveisSchema extends Schema {
  up () {
    this.create('variaveis', (table) => {
      table.increments('id')
      table.string('variavel')
      table.integer('user_id').unsigned().references('id').inTable('user')
      table.timestamps()
    })
  }

  down () {
    this.drop('variaveis')
  }
}

module.exports = VariaveisSchema
