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

var supervolley = [andres, cipriano, oscar, jaime, eduardo]

for(var i = 0; i < supervolley.length; i++){
    var jugador = supervolley[i]
    console.log(`${jugador.nombre} mide ${jugador.altura} cms`)
}