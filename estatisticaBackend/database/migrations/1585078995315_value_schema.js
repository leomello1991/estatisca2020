'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ValueSchema extends Schema {
  up () {
    this.create('values', (table) => {
      table.increments('id')
      table.integer('variavel_id').unsigned().references('id').inTable('variavel')
      table.string('nome variavel').unsigned().references('name').inTable('variavel')
      table.decimal('valores'10,2)


      table.timestamps()
    })
  }

  down () {
    this.drop('values')
  }
}

module.exports = ValueSchema
