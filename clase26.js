class Persona{
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar(fn){
        var { nombre, apellido } = this
        
        console.log(`Hola, me llamo ${nombre} ${apellido}`)
        if(fn){
            fn(nombre, apellido)
        }
    }

    soyAlto(){
        return this.altura >= 1.8?console.log('Soy alto'):console.log('No soy muy alto')
    }
}

class Desarrollador extends Persona{
    constructor(nombre, apellido, altura){
        super(nombre, apellido, altura)
    }

    saludar(fn){
        // var nombre = this.nombre
        // var apellido = this.apellido

        var { nombre, apellido } = this

        console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador@`)
        if(fn){
            fn(nombre, apellido, true)
        }
    }
}


function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen día ${nombre} ${apellido}`)
    if (esDev) {
        console.log(`Ah mirá, no sabia que eras desarrollador@`)
    }
}

var sacha = new Persona('Sacha', 'Lifszyc',1.70)
var erika = new Persona('Erika', 'Luna', 1.69)
var arturo = new Desarrollador('Arturo', 'Martinez', 1.90)

sacha.saludar()
erika.saludar(responderSaludo)
arturo.saludar(responderSaludo)