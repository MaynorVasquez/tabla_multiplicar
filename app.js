const { crearArchivo } = require('./helpers/multiplicador');
const argv = require('./config/yargs');

console.clear();
// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');
// console.log(base);

// const base = 3;

  crearArchivo(argv.base, argv.listar, argv.hasta)
                .then(msg => console.log(msg, ' Archivo creado'))
                .catch(err => console.log(err));


