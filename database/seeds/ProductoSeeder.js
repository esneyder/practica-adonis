'use strict'

/*
|--------------------------------------------------------------------------
| ProductoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

Factory.blueprint('App/Models/Producto', (faker) => {
  return {
    nombre: faker.sentence(),
    descripcion: faker.paragraph()
  } 
})

 
class ProductoSeeder {
  async run () {
    await Factory
      .model('App/Models/Producto')
      .createMany(50)
  }
}

module.exports = ProductoSeeder
