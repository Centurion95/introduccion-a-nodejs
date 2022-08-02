const ejecutarFuncion = () => {

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
    rl.question("Ingrese su primer nombre:", function (answer) {
        console.log('Bienvenido al sistema: ' + answer)
        rl.close();
    })



}


module.exports = { ejecutarFuncion }