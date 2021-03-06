/* eslint-disable no-console */
// Imports.
const colors = require('colors');
const argv = require('./config/yargs');
const generarArchivo = require('./utils/generarArchivo');

// Creamos una funcion reutilizable con validaciones para imprimir el resultado.
const concatenarMultiplicacion = (base = 5, cantMax = 10) => {
  let salida = '';
  let consola = '';
  for (let i = 1; i <= cantMax; i += 1) {
    salida += `${base} x ${i} = ${base * i}\n`;
    consola += `${base} ${'x'.yellow} ${i} = ${base * i}\n`;
  }
  return { consola, salida };
};

// Generamos y guardamos el archivo Txt tratando como Promesas.
const generarArchivoAsync = async (base = 5, data) => {
  try {
    await generarArchivo(`tabla-${base}.txt`, data);
    console.log('Archivo generado con exito!');
  } catch (err) {
    console.log('Error al generar el archivo', err);
  }
};

// Obtenemos la base por consola con validacion.
const obtenerBasePorConsola = () => {
  if (argv.base) return argv.base;

  return null;
};

// imprimimos el resultado si listar es true.
const listarResultado = (dato, base, listar) => {
  if (listar) {
    console.log('========================='.america);
    console.log(colors.random(`      Tabla de ${base}`));
    console.log('========================='.america);
    console.log(dato);
  }
};

const base = obtenerBasePorConsola();
const resultados = concatenarMultiplicacion(base);

generarArchivoAsync(base, resultados.salida);

// monstramos el resultado por consola condicionalmente con argumento listar de consola.
listarResultado(resultados.consola, base, argv.l);
