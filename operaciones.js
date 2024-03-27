const fs = require('fs')

const registrar = (nombre, edad, especie, raza, color, enfermedad) => {
    console.log(`Cita correctamente agendada para ${nombre}.`)
    const mostrarCitas = JSON.parse(fs.readFileSync('citas.json', 'utf8'))
    mostrarCitas.push({ Nombre: nombre, Edad: edad, Especie: especie, Raza: raza,Color: color, Enfermedad: enfermedad })
    fs.writeFileSync('citas.json', JSON.stringify(mostrarCitas))
}

const leer = () => {
    const mostrarCitas = JSON.parse(fs.readFileSync('citas.json', 'utf8'))
    mostrarCitas.forEach((cita, i) => {
        console.log(
            `Nombre: ${cita.Nombre}\n`,
            `Edad: ${cita.Edad}\n`,
            `Especie: ${cita.Especie}\n`,
            `Raza: ${cita.Raza}\n`,
            `Color: ${cita.Color}\n`,
            `Enfermedad: ${cita.Enfermedad}\n`
        )
    });
}

module.exports = { registrar, leer };