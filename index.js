const { registrar, leer } = require('./operaciones.js')

const argumento = process.argv.slice(2);

const operacion = argumento[0];
const nombre = argumento[1];
const edad = argumento[2];
const especie = argumento[3];
const raza = argumento[4];
const color = argumento[5];
const enfermedad = argumento[6];

if (operacion === 'registrar') {
    registrar(nombre, edad, especie, raza, color, enfermedad)
}

if (operacion === 'leer') {
    leer()
}