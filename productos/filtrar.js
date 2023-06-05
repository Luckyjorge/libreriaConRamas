const {leerJSON, escribirJSON} = require("../data");
const productos_db = leerJSON();
const filtrar = function(marca){
    const productosFiltrados = productos_db.filter(producto => producto.marca === marca);

    return productosFiltrados;
  }

module.exports = filtrar;