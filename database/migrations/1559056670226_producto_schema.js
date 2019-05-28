'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductoSchema extends Schema {
  up () {
    this.create('productos', (table) => {
      table.increments()
      table.timestamps()
      table.string('nombre', 80).notNullable().unique()
      table.string('descripcion', 180)
      table.string('imagen', 180)
    })
  }

  down () {
    this.drop('productos')
  }
}

module.exports = ProductoSchema
