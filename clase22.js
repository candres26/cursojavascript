function Persona (nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function (){
    this.altura >= 1.8?console.log('Soy alto'):console.log('No soy muy alto')
}

var sacha = new Persona('Sacha', 'Lifszyc',1.70)
var erika = new Persona('Erika', 'Luna', 1.69)
var arturo = new Persona('Arturo', 'Martinez', 1.90)