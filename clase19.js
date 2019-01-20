var andres = {
    nombre: 'Andres',
    apellido: 'Reyes',
    altura: 1.84
}

var cipriano = {
    nombre: 'Cipriano',
    apellido: 'Castro',
    altura: 1.75
}

var oscar = {
    nombre: 'Oscar',
    apellido: 'Gonzalez',
    altura: 1.73
}

var jaime = {
    nombre: 'Jaime',
    apellido: 'Trujillo',
    altura: 1.84
}

var eduardo = {
    nombre: 'Eduardo',
    apellido: 'Briñez',
    altura: 1.78
}

const esAlta = jugador => jugador.altura >= 1.8

var supervolley = [andres, cipriano, oscar, jaime, eduardo]

var personasAltas = supervolley.filter(esAlta)

const pasarAlturaACms = persona => ({
    ...persona,
    altura: persona.altura * 100
})

var personasCms = supervolley.map(pasarAlturaACms)

console.log(personasCms)