//Requerimos FileSystem.
const fs = require('fs').promises;

//Creamos una funcion reutilizable para generar el archivo.
const generarArchivo = (fileName, dato) => {
    return fs.writeFile(fileName, dato);
}

module.exports = generarArchivo;