//Requerimos la funcion para generar archivos.
const generarArchivo = require('./utils/generarArchivo');

//Creamos una funcion reutilizable con validaciones para imprimir el resultado. 
const concatenarMultiplicacion = (base = 5, cantMax = 10) => {
    let resultados;
    for (let i = 1; i <= cantMax; i++) {
        resultados += `${base} x ${i} = ${base * i}\n`
    }
    return resultados;
};

//Generamos y guardamos el archivo Txt tratando como Promesas.
const generarArchivoAsync = async (base = 5, data) => {
    try {
        await generarArchivo(`tabla-${base}.txt`, data);
        console.log('Archivo generado con exito!')
    } catch (err) {
        console.log('Error al generar el archivo', err);
    }
};

//Obtenemos la base por consola con validacion.
const obtenerBasePorConsola = () => {
    let argv = process.argv;
    if (argv[2]) return argv[2].split('=')[1];
};

const base = obtenerBasePorConsola();
const resultados = concatenarMultiplicacion(base);

generarArchivoAsync(base, resultados);

//monstramos el resultado por consola
console.log(resultados);