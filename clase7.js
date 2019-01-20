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

//La anterior es una forma de utilizar el objeto pero no es la más prolija

function imprimirNombreObjetoMayuscula(persona){
    /**
     * Cuando queremos almacenar el valor del atributo de un objeto
     * en una variable con el mismo nombre usamos las llaves { nombreAtributo } y el nombre del
     * atributo como nombre de variable al crearla  
     */
    var { nombre } = persona
    console.log(nombre.toUpperCase())
}

imprimirNombreObjetoMayuscula(isabel)
imprimirNombreObjetoMayuscula(andres)

var sacha = {
    nombre: 'Sacha',
    edad: 28
}

var dario = {
    nombre: 'Dario',
    edad: 27
}

function imprimirNombreYEdad(persona){
    var { nombre, edad } = persona

    console.log(`Hola, me llamo ${ nombre } y tengo ${ edad } años`)
}

imprimirNombreYEdad(sacha)
imprimirNombreYEdad(dario)