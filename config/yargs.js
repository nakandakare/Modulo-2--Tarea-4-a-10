const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    }).option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .check((argv, _option) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un numero';
        }

        if (argv.b > 20 || argv.b < 1) {
            throw 'Debes colocar un valor de base entre 1 y 20';
        }

        return true;
    }).argv

module.exports = argv;