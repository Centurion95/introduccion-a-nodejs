const ejecutarFuncion = () => {

    console.log('**************************************')
    console.log('1-Basicos')
    console.log('**************************************')


    let variableNumerica = 1 //una variable SI puede cambiar
    const constanteNumerica = 100 //una constante NO CAMBIA 

    let variableAlfanumerica = 'esto es un string' //una variable SI puede cambiar
    const constanteAlfanumerica = 'Lorem ipsum dolorem' //una constante NO CAMBIA 


    console.log(variableNumerica)
    console.log(constanteNumerica)

    console.log(variableAlfanumerica)
    console.log(constanteAlfanumerica)


    console.log('**************************************')


    //cambiamos los valores de las variables..
    variableNumerica = 2
    // constanteNumerica = 200 //esto daría error

    variableAlfanumerica = 'cambiado'
    // constanteAlfanumerica = 'cambiamos el texto' //esto daría error



    //concatenando cadenas...
    console.log('cambio de numero: ' + variableNumerica)
    console.log('cambio de string: ' + variableAlfanumerica)

    console.log('**************************************')



    //operaciones aritmeticas
    const suma = 1 + 2
    console.log('suma: ' + suma)

    const numero1 = 50
    const numero2 = 25

    const resta = numero1 - numero2
    //tambien podemos hacer log de esta forma (sin 'concatenar'):
    console.log('resta: ', resta)

    const multiplicacion = numero1 * numero2
    console.log('multiplicacion: ', multiplicacion)

    const division = numero2 / numero1
    console.log('division: ', division)
}



module.exports = { ejecutarFuncion }