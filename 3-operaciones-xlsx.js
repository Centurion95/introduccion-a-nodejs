// para esto vamos a necesitar instalar la librería xlsx
// npm i xlsx
const XLSX = require("xlsx")

const ejecutarFuncion_escribirXLSX = async () => {
    console.log('**************************************')
    console.log('3-función 13 - escribirXLSX')
    console.log('**************************************')

    // estas son las filas y columnas que vamos a insertar en el excel a crear
    const rows = [
        {
            "id": 1,
            "name": "ejemplo111",
        },
        {
            "id": 2,
            "name": "ejemplo222",
        }, {
            "id": 3,
            "name": "ejemplo333",
        },
    ]

    /*
    // tambien se puede hace con un array of arrays..
    const worksheet = XLSX.utils.aoa_to_sheet([
        ["id", "name"],
        [1, "ejemplo111"],
        [2, "ejemplo222"],
        [3, "ejemplo333"]
    ])
    */

    /* generate worksheet and workbook */
    const worksheet = XLSX.utils.json_to_sheet(rows)
    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, "nombre_hoja")

    /* fix headers */
    XLSX.utils.sheet_add_aoa(worksheet, [["mi_id", "mi_nombre"]], { origin: "A1" })

    // /* calculate column width */
    const max_width = rows.reduce((w, r) => Math.max(w, r.name.length), 10)
    worksheet["!cols"] = [{ wch: max_width }]

    /* create an XLSX file and try to save to ___.xlsx */
    XLSX.writeFile(workbook, "mi_excel_creado.xlsx")

    console.log('Archivo creado >>> mi_excel_creado.xlsx')
}


const ejecutarFuncion_leerTXTlinea_por_linea = async () => {
    console.log('Vamos a empezar a leer linea por linea.. >>> mi_excel_creado.xlsx')

    var workbook = XLSX.readFile("mi_excel_creado.xlsx")
    workbook = workbook.Sheets['nombre_hoja']
    // console.log('workbook', workbook)

    const mi_array_of_arrays = XLSX.utils.sheet_to_json(workbook, { header: 1 });
    // console.log(mi_array_of_arrays, { depths: null, colors: true });

    mi_array_of_arrays.forEach((fila) => {
        // console.log(fila);
        console.log(fila[0]);
        console.log(fila[1]);
    })

    //con esto podemos crear objetos, realizar controles y cruces con otras fuentes/BD..
}


module.exports = {
    ejecutarFuncion_escribirXLSX,
    ejecutarFuncion_leerTXTlinea_por_linea,
}