var nombre = 'Andres', apellido = 'Reyes'

nombreEnMayusculas = nombre.toUpperCase()
console.log(nombre.charAt(0))
console.log(nombre.length)

var nombreCompleto = `${nombre} ${apellido.toUpperCase()}` //Interpolación de variables
console.log(nombreCompleto)

//Obtener un substring de un string
var str = nombre.charAt(1) + nombre.charAt(2)

//Tambien puedo utilizar substr

var str2 = nombre.substr(1, 3)

console.log(str2)