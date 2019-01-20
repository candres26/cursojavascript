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
    var { nombre } = persona
    console.log(nombre.toUpperCase())
}

imprimirNombreObjetoMayuscula(isabel)
imprimirNombreObjetoMayuscula(andres)

function cumpleanos( persona ){
    /**
     * Si lo hacemos de esta forma los valores del objeto se veran modificados
     * ya que javascript trata los objetos por referencia
     */
    //persona.edad += 1
    /**
     * Si no queremos que esto pase podemos copiar el contenido
     * del objeto en uno nuevo y devolverlo con return
     */
    return{
        ...persona,
        edad: persona.edad + 1
    }
}

