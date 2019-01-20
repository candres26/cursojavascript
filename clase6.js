var andres = {
    nombre: 'Andres',
    apellido: 'Reyes',
    edad: 34
}

var isabel = {
    nombre: 'Isabel',
    apellido: 'Reyes',
    edad: 7
}

function imprimirNombreEnMayusculas(nombre){
    //La variable nombre que esta recibiendo la funcion esta definida localmente por tanto si quisieramos acceder a ella desde afuera nos diria undefined
    nombre = nombre.toUpperCase()
    console.log(nombre)
}

imprimirNombreEnMayusculas(isabel.nombre) //En este caso la variable nombre que le estamos pasando a la funcion es la que esta definida globalmente, es decir la que existe en el objeto global en este caso window
imprimirNombreEnMayusculas(andres.nombre)

//La anterior es una forma de utilizar el objeto pero no es la más prolija

function imprimirNombreObjetoMayuscula(persona){
    var nombre = persona.nombre.toUpperCase()
    console.log(nombre)
    //console.log(persona.nombre.toUpperCase())
}

/*Pero que pasa si yo no deseo utiizar los demás atributos del objeto
Entonces en ese caso utilizamos las llaves { atributo } para traer del objeto los atributos que me interesan
*/
/*
function imprimirNombreObjetoMayuscula({ nombre }){
    var nombre = nombre.toUpperCase()
    console.log(nombre)
    //console.log(nombre.toUpperCase())
}
 */
imprimirNombreObjetoMayuscula(isabel)
imprimirNombreObjetoMayuscula(andres)

/**
 * Pero que pasa si no quiero utilizar variables en el llamado
 * de la funcion, en ese caso javascript me permite definir el atributo del objeto 
 * en el mismo llamado de la funcion de la siguiente manera 
 */

 imprimirNombreObjetoMayuscula({ nombre: 'Pepito' })