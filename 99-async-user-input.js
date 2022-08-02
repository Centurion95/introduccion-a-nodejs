var nombre
var apellido

const ejecutarFuncion = async () => {

    console.log('**************************************')
    console.log('2-Input del usuario')
    console.log('**************************************')

    // ¿como solicitamos input de datos al usuario?
    // https://node.readthedocs.io/en/latest/api/readline/#rlquestionquery-callback
    const readline = require('readline')

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    console.log('**************************************')
    // var nombre
    // var apellido
    // rl.question("Ingrese su primer nombre:", function (answer) {
    //     nombre = answer
    //     rl.close();
    // })

    // rl.question("Ingrese su primer apellido:", function (answer) {
    //     apellido = answer
    //     rl.close();
    // })

    await question1(rl)
    await question2(rl)
    rl.close()

    console.log('Su nombre completo es: ' + nombre + ' ' + apellido)

}

const question1 = (rl) => {
    return new Promise((resolve, reject) => {
        rl.question('Ingrese su primer nombre:', (answer) => {
            nombre = answer
            resolve()
        })
    })
}

const question2 = (rl) => {
    return new Promise((resolve, reject) => {
        rl.question('Ingrese su primer apellido:', (answer) => {
            apellido = answer
            resolve()
        })
    })
}

module.exports = { ejecutarFuncion }