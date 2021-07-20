const { argv } = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar',
  })
  .option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'Muestra la tabla en consola',
  })
  .check((_argv) => {
    if (Number.isNaN(_argv.b)) {
      throw new Error('La base tiene que ser un numero');
    }

    if (_argv.b > 20 || _argv.b < 1) {
      throw new Error('Debes colocar un valor de base entre 1 y 20');
    }

    return true;
  });

module.exports = argv;
