class Persona{
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar(fn){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
        if(fn){
            fn(nombre, apellido, false)
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
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador@`)
    }
}

// var sacha = new Persona('Sacha', 'Lifszyc',1.70)
// var erika = new Persona('Erika', 'Luna', 1.69)
// var arturo = new Desarrollador('Arturo', 'Martinez', 1.90)
