const ejecutarFuncion_1 = () => {
    console.log('**************************************')
    console.log('2-función 1')
    console.log('**************************************')
}

const ejecutarFuncion_2 = () => {
    console.log('**************************************')
    console.log('2-función 2')
    console.log('**************************************')
}

const esto_no_se_va_a_exportar = () => {
    console.log('ESTO NO SE VA A EXPORTAR')
    //por lo tanto, no va a estar diponibles en los demás scripts..
}

const ejecutarFuncion_escribirTXT = () => {
    console.log('**************************************')
    console.log('2-función 3 - escribirTXT')
    console.log('**************************************')

    // fs = FileSystem - https://nodejs.org/dist/latest-v16.x/docs/api/fs.html
    let fs = require("fs");

    //escribir en un archivo (sobreescribe..)
    fs.writeFileSync("archivo_sobreescribido.txt", "File was overwritten..");

    //escribir en un archivo (agrega..)
    fs.appendFileSync("archivo_agregado.txt", Date() + " >>> Line apended\r\n");
    fs.appendFileSync("archivo_agregado.txt", Date() + " >>> Another one\r\n");
    fs.appendFileSync("archivo_agregado.txt", Date() + " >>> And another one\r\n");

    //para ambos casos, si el archivo no existe, lo crea....
}

const ejecutarFuncion_leerTXTlinea_por_linea = () => {
    console.log('**************************************')
    console.log('2-función 4 - procesarTXT')
    console.log('**************************************')

    // vamos a necesitar usar una librería para esto..   
    // para eso, debemos inicializar el package.json, ejecutando y configurando "npm init" 
    // luego ya podremos instalar:
    // npm install --save line-reader

    const lineReader = require('line-reader');

    lineReader.eachLine('archivo_agregado.txt', function (line) {
        console.log(line);
    });
}

const ejecutarEjercicio_procesarTXT = () => {
    console.log('**************************************')
    console.log('2-función 5 - leerTXTlinea_por_linea')
    console.log('**************************************')

    let fs = require("fs");
    fs.appendFileSync("archivo_procesar.txt", "ID;NOMBRE;FECHA_NACIMIENTO \r\n");
    fs.appendFileSync("archivo_procesar.txt", "1;Rodrigo Centurion;05/01/1995 \r\n");
    fs.appendFileSync("archivo_procesar.txt", "2;Juan Perez;25/12/1983 \r\n");
    fs.appendFileSync("archivo_procesar.txt", "3;Maria Gonzalez;31/05/1972 \r\n");

    const lineReader = require('line-reader');

    lineReader.eachLine('archivo_procesar.txt', function (line) {
        // console.log(line);

        const miArray = line.split(";");
        console.log(miArray[0]);
        console.log(miArray[1]);
        console.log(miArray[2]);

        //con esto podemos crear objetos, realizar controles y cruces con otras fuentes/BD..
    });
}



module.exports = {
    ejecutarFuncion_1,
    ejecutarFuncion_2,
    ejecutarFuncion_escribirTXT,
    ejecutarFuncion_leerTXTlinea_por_linea,
    ejecutarEjercicio_procesarTXT
}