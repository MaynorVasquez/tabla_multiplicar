const fs = require('fs');
const colors = require('colors');

const crearArchivo = (base = 1, listar, hasta) => {

    return new Promise((resolve, reject) => {

        let salida ='';
        let consola = '';
    
        for (let i = 1; i <= hasta; i++ ){
            salida += (`${i} X ${base} = ${i * base}\n`);
            consola += (`${colors.blue(i)} ${'X'.green} ${colors.blue(base)} ${'='.green} ${colors.blue(i * base)}\n`);
        }
        if(listar === true){
            console.log(consola);
        }
            fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
            resolve(`tabla-${base}.txt`);
    });


}

module.exports = {
    crearArchivo
}