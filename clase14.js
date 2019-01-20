var andres = {
    nombre: 'Andres',
    apellido: 'Reyes',
    edad: 7,
    peso: 75
}

console.log(`Al inicio del año ${andres.nombre} pesa ${andres.peso} kg`)

const INCREMENTO_PESO =  0.3

const DIAS_DEL_ANO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO

const adelgazar = persona => persona.peso -= INCREMENTO_PESO

const comeMucho = () => Math.random() < 0.3

const realizaDeporte = () => Math.random() < 0.4

const META = andres.peso - 3

var dias = 0

while (andres.peso > META) {
    if(comeMucho()){
        aumentarDePeso(andres)
    }

    if (realizaDeporte()) {
        adelgazar(andres)
    }

    dias += 1
}

console.log(`Pasaron ${dias} días hasta que ${andres.nombre} adelgazó 3kg`)



