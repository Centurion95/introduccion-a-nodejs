//rc95 01/08/2022 20:13 - esto es un comentario en linea

/* 
 rc95 01/08/2022 20:13 - 
    y esto 
    es un 
    comentario
    en bloque 
 */

console.log('**************************************')
console.log('Hola Mundo!!! desde NodeJS')
console.log('**************************************')

console.log('')
console.log('Vamos a llamar a otro script...')
const script_1 = require('./1-basicos')
script_1.ejecutarFuncion()

console.log('')
console.log('Vamos a llamar a otro script...')
const script_2 = require('./2-operaciones-txt')
//nótese como un script puede tener varias funciones.. 
//y podemos utilizar todas aquellas que exportamos (module.exports)
script_2.ejecutarFuncion_1()
script_2.ejecutarFuncion_2()
script_2.ejecutarFuncion_escribirTXT()
script_2.ejecutarFuncion_leerTXTlinea_por_linea()

//esto va a ejecutarse a los 2 segundos de haber iniciado el script..
setTimeout(() => {
    console.log('ya pasaron 2 segundos...');
    script_2.ejecutarEjercicio_procesarTXT()

    setTimeout(() => {
        console.log('ahora pasaron otros 2 segundos...');

        const script_3 = require('./3-operaciones-xlsx')
        script_3.ejecutarFuncion_escribirXLSX()
        script_3.ejecutarFuncion_leerTXTlinea_por_linea()


        console.log('**************************************')
        console.log('Fin del programa')
        console.log('**************************************')
    }, 2000);


}, 2000);


