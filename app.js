let leerJSONDeTareas = require('./tareas.js');

let argumento0 = process.argv[0]; // argumento por defecto
let argumento1 = process.argv[1]; // argumento por defecto
let accion = process.argv[2]; // primer argumento del usuario
let tareaXArg = process.argv[3];

switch (accion) {
    case 'Listar':
        console.log('\nListado de tareas:\n');

        console.log('\n');
        break;

    case undefined:
        console.log('\nNecesito una acción \n *-Listar \n *-Crear \n *-Filtrar \n');
        break;

    default:
        console.log('No comprendo la acción que quieres ejecutar.');
}