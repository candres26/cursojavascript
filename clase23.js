function Persona (nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

/**
 * Al utilizar arrow function el this ya me apunta al objeto que estoy
 * creando sino al objeto que se encuentra afuera de la funcion en este caso 
 * apuntará al objeto window
 * Persona.prototype.saludar = () => {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    }
 */
Persona.prototype.saludar = () => {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function() {
    return this.altura >= 1.8?console.log('Soy alto'):console.log('No soy muy alto')
}

var sacha = new Persona('Sacha', 'Lifszyc',1.70)
var erika = new Persona('Erika', 'Luna', 1.69)
var arturo = new Persona('Arturo', 'Martinez', 1.90)