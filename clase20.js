var andres = {
    nombre: 'Andres',
    apellido: 'Reyes',
    altura: 1.84,
    cantidadDeLibros: 78
}

var cipriano = {
    nombre: 'Cipriano',
    apellido: 'Castro',
    altura: 1.75,
    cantidadDeLibros: 12
}

var oscar = {
    nombre: 'Oscar',
    apellido: 'Gonzalez',
    altura: 1.73,
    cantidadDeLibros: 178
}

var jaime = {
    nombre: 'Jaime',
    apellido: 'Trujillo',
    altura: 1.84,
    cantidadDeLibros: 97
}

var eduardo = {
    nombre: 'Eduardo',
    apellido: 'Briñez',
    altura: 1.78,
    cantidadDeLibros: 8
}

const esAlta = jugador => jugador.altura >= 1.8

var supervolley = [andres, cipriano, oscar, jaime, eduardo]

var personasAltas = supervolley.filter(esAlta)

const pasarAlturaACms = persona => ({
    ...persona,
    altura: persona.altura * 100
})

var personasCms = supervolley.map(pasarAlturaACms)

//var acum = 0
//
//for(var i = 0; i<supervolley.length; i++){
//    acum = acum + supervolley[i].cantidadDeLibros
//}

//Esta arrow function hace exactamente lo mismo que la forma anterior

var reducer = (acum, { cantidadDeLibros }) => acum + cantidadDeLibros

var totalDeLibros = supervolley.reduce(reducer, 0)

console.log(`En total todos tienen ${totalDeLibros} libros`)