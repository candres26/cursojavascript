var andres = {
    nombre: 'Andres',
    apellido: 'Reyes',
    edad: 7,
    peso: '75'
}

console.log(`Al inicio del año ${andres.nombre} pesa ${andres.peso} kg`)

const INCREMENTO_PESO =  0.2

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO

const adelgazar = persona => persona.peso -= INCREMENTO_PESO

for( var i = 1; i <= 365; i++ ){
    var random = Math.random()
    
    if (random < 0.25) {
        aumentarDePeso(andres)
    } else if (random < 0.5) {
        adelgazar(andres)
    }
}


console.log(`Al final del año ${andres.nombre} pesa ${andres.peso.toFixed(1)} kg`)



