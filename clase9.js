var x = 4, y = '4'
/**
 * Si comparamos x e y usando el operador de comparacion ==
 * Nos dara true ya que javascript compara el caracter sin importar su tipo
 * Sin embargo si usamos el operador === en este caso si nos dará false
 * ya que una variable es de tipo entero y otra es un string
 */

 x == y // true
 x === y // false

var andres = {
    nombre: 'Andres'
}

/**
 * A pesar de que estos parecen ser el mismo objeto la verdad es 
 * que son totalmente diferentes
 */
var otraPersona = {
    nombre: 'Andres'
}
/**
 * Para que sean iguales al compararlos
 */
var otraPersona = andres

/**
 * si modificamos una u otra las dos se veran afectadas 
 * ya que ambas variables apuntan a la misma referencia en 
 * memoria
 */


