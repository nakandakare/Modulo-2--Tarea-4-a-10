// Requerimos FileSystem.
const fs = require('fs').promises;

// Creamos una funcion reutilizable para generar el archivo.
const generarArchivo = (fileName, dato) => fs.writeFile(`./salida/${fileName}`, dato);

module.exports = generarArchivo;
