var andres = {
    nombre: 'Andres',
    apellido: 'Reyes',
    edad: 28,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    volibolista: true
}

function imprimirProfesiones(persona){
    console.log(`${ persona.nombre } es:`)
    
    if (persona.ingeniero) {
        console.log('Ingeniero')        
    }
    if (persona.cocinero) {
        console.log('Cocinero')        
    }
    if (persona.cantante) {
        console.log('Cantante')        
    }
    if (persona.dj) {
        console.log('Dj')        
    }
    if (persona.guitarrista) {
        console.log('Guitarrista')        
    }
    if (persona.volibolista) {
        console.log('Volibolista')        
    }
}

imprimirProfesiones(andres)

const  MAYORIA_DE_EDAD = 18

function esMayorDeEdad(persona){
    return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirSiEsMayorDeEdad(persona){
    if(esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} no es mayor de edad`)
    }
}

imprimirSiEsMayorDeEdad(andres)