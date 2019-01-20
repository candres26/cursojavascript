var nombre = 'Andres'

function imprimirNombreEnMayusculas(nombre){
    //La variable nombre que esta recibiendo la funcion esta definida localmente por tanto si quisieramos acceder a ella desde afuera nos diria undefined
    nombre = nombre.toUpperCase()
    console.log(nombre)
}

imprimirNombreEnMayusculas(nombre) //En este caso la variable nombre que le estamos pasando a la funcion es la que esta definida globalmente, es decir la que existe en el objeto global en este caso window