

const argv = require('yargs')
                   .option(
                        'b', {
                            alias: 'base',
                            type: 'number',
                            demandOption: true,
                            describe: 'Es la base de la tabla de multiplicar'
                        }
                    )
                    .option(
                        'l', {
                            alias: 'listar',
                            type: 'boolean',
                            default : false,
                            describe: 'Muestra la tabla de multiplicar'
                        }
                    )
                    .option(
                        'h', {
                            alias: 'hasta',
                            type: 'number',
                            default: 10,
                            describe: 'Coloca un limite de la tabla a multiplicar'
                        }
                    )
                    .check((argv,options) =>{
                        if(isNaN(argv.b)){
                            throw 'La base no es un número';
                        } else if(isNaN(argv.h)){
                            throw 'El limite de la tabla debe de ser un número';
                        }
                        return true;
                    })
                    .argv;

module.exports = argv;