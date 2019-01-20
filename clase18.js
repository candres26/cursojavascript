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

const esBaja = jugador => jugador.altura < 1.8

var supervolley = [andres, cipriano, oscar, jaime, eduardo]

var personasAltas = supervolley.filter(esAlta)

var personasBajas = supervolley.filter(esBaja)

console.log('Las jugadores altos del equipo son:')

for (var i = 0; i < personasAltas.length; i++) {
    var jugador = personasAltas[i]
    console.log(`${jugador.nombre} mide ${jugador.altura}cms`)
}

console.log('Y los jugadores bajos del equipo son:')

for (var i = 0; i < personasBajas.length; i++) {
    var jugador = personasBajas[i]
    console.log(`${jugador.nombre} mide ${jugador.altura}cms`)
}