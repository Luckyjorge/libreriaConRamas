const { leerJSON } = require('../data');
const Producto = require('./Producto');

module.exports = {
    productos: leerJSON(),
    filtrar: require('./filtrar'),
    listar: require('./listar'),
    agregar: require('./agregar'),
    editar: require('./editar'),
    buscar: require('./buscar')
};