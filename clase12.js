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

var isabel = {
    nombre: 'Isabel',
    apellido: 'Reyes',
    edad: 7,
    ingeniero: false,
    cocinero: false,
    cantante: true,
    dj: false,
    guitarrista: false,
    estudiante: true
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
/* 
var esMayorDeEdad = function (persona){
    return persona.edad >= MAYORIA_DE_EDAD
}
*/

/**
 * Si asignamos la funcion a una variable de la forma como
 * se encuentra en la parte de arriba
 * 
 * var nombreDeVariable = function(){
 *      bloque de codigo de la funcion
 * } 
 * 
 * se dice que esta funcion es una funcion anonima
 */

 // Otra forma seria usando arrow function
 /**
  * cuando la arrow function lo unico que hace es devolver algo
  * podemos borrar la palabra return y las {}
  *  
  */

/*
const esMayorDeEdad = (persona) => {
    return persona.edad >= MAYORIA_DE_EDAD
}
*/

 // Cuando la funcion recibe solo un parametro podemos quitar los '(' ')'

const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD

/**
 * Para desestructurar mas el objeto debemos
 * const esMayorDeEdad = ({ edad }) =>  edad >= MAYORIA_DE_EDAD
 */
function imprimirSiEsMayorDeEdad(persona){
    if(esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} no es mayor de edad`)
    }
}

function permitirAcceso(persona){
    if(!esMayorDeEdad(persona)){
        console.log('ACCESO DENEGADO')
    }
}

var esMenorDeEdad = persona => esMayorDeEdad(persona)