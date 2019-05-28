'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')
Route.get('/productos', 'ProductoController.index').as('Producto.index')
Route.get('/productos/create', 'ProductoController.create').as('Producto.create')
Route.get('/productos/edit/:id', 'ProductoController.edit').as('Producto.edit')
Route.get('/productos/delete/:id', 'ProductoController.delete').as('Producto.delete')
Route.post('/productos/store', 'ProductoController.store').as('Producto.store')
Route.post('/productos/update/:id', 'ProductoController.update').as('Producto.update')