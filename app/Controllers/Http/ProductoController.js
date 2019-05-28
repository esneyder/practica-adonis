'use strict'
const Producto = use('App/Models/Producto');
class ProductoController {

    async index({view}){ 
        const productos = await Producto.all();

    return view.render('productos.index', { productos: productos.rows })
    }

    create({request, response, view}){
        return view.render('productos.created')
    }
    async store({request, response, view, session}){
        const producto = new Producto();
    
        producto.nombre = request.input('nombre');
        producto.descripcion = request.input('descripcion');
        await producto.save();
    
        session.flash({ notification: 'Successfully create!' });
        return response.route('Producto.index')
    }
    async edit({request, response, view, params}){
        const id = params.id;
        const producto = await Producto.find(id); 
        return view.render('productos.edit', { producto : producto})
    }

    async update({request, response, view, params, session}){
        const id = params.id;
        const producto = await Producto.find(id);
        producto.nombre = request.input('nombre');
        producto.descripcion = request.input('descripcion');
        await producto.save();
    
        session.flash({ notification: 'Successfully update!' });
        return response.route('Producto.index')
    }
    async delete({request, response, view, params, session}){
        const id = params.id;
        const producto = await Producto.find(id);
        await producto.delete();
    
        session.flash({ notification: 'Successfully delete!' });
        return response.route('Producto.index')
    }
}


module.exports = ProductoController
