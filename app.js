//Librerias.
const colors = require('colors');
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true
    }).option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
    })
    .check((argv, _option) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un numero';
        }

        if (argv.b > 20 || argv.b < 1) {
            throw 'Debes colocar un valor de base entre 1 y 20';
        }

        return true;
    }).argv;
//Requerimos la funcion para generar archivos.
const generarArchivo = require('./utils/generarArchivo');

//Creamos una funcion reutilizable con validaciones para imprimir el resultado. 
const concatenarMultiplicacion = (base = 5, cantMax = 10) => {
    let resultados = '';
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
    if (argv.base) return argv.base;
};

//imprimimos el resultado si listar es true.
const listarResultado = (dato, listar) => {
    if (listar) {
        console.log(colors.random(`Tabla de ${base}`));
        console.log(dato);
    }
}

const base = obtenerBasePorConsola();
const resultados = concatenarMultiplicacion(base);

generarArchivoAsync(base, resultados);

//monstramos el resultado por consola condicionalmente con argumento listar de consola.
listarResultado(resultados, argv.l);