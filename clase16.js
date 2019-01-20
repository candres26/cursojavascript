var signo = prompt('¿Cuál es tu signo?')

switch (signo) {
    case 'aries':
    case 'Aries':
        console.log('2019 Será un año viajero, dónde el extranjero va a atraerles mucho, en todo los sentidos.')
        break;
    case 'tauro':
    case 'Tauro':
        console.log('Año de cambios, inestabilidad, imprevistos y adaptaciones constantes. Será duro pero te superarás a ti mismo. Lo más importante el trabajo,el dinero y los estudios. Evolución espiritual y religiosa.')
        break;
    case 'geminis':
    case 'Geminis':
    case 'géminis':
    case 'Géminis':
        console.log('Lo más importante en 2019 serán: el amor y la vida social, el trabajo, la transformación y la reinvención personal y profesional, la evolución espiritual.')
        break;
    case 'cancer':
    case 'Cancer':
    case 'cáncer':
    case 'Cáncer':
        console.log('2019 va a ser un año de retos, año muy duro. Eres capaz de afrontarlos y superarlos.')
        break;
    case 'Leo':
    case 'leo':
        console.log('Lo más importante para Leo en el año 2019 será la profesión y el trabajo, el amor, cambio de imagen y reinvención de ti mismo. Los hijos y la creatividad. Aprender a dejar	fluir	las	emociones	y tomarse el año relajadamente.')
        break;
    case 'Virgo':
    case 'virgo':
        console.log('En 2019 será un año feliz. Lo más importante será los hijos, la familia, la diversión, nueva visión de la religión y la espiritualidad, nueva visión del amor y la sexualidad, interés por el ocultismo y transformación personal.')
        break;
    case 'Libra':
        console.log('2019 será difícil y muy movido. Lo mejor del año tu profesión, aunque tendrás mucho trabajo y estrés.')
        break;
    case 'Escorpio':
    case 'escorpio':
        console.log('Lo mejor de 2019 será el dinero, la comunicación con los demás, la intelectualidad, la espiritualidad, cambios en la la diversión y la creatividad. Lo peor, el amor, los estudios, el trabajo y los hijos y sus líos.')
        break;
    case 'Sagitario':
    case 'sagitario':
        console.log('Lo mejor en 2019 será el dinero, lo feliz, alegre y optimista que te sentirás, la creatividad, la diversión, la familia, cambio de imagen, una gran evolución personal y la estabilidad emocional. Lo peor cambios laborales, demasiado trabajo, un exceso de espiritualidad.')
        break;
    case 'Capricornio':
    case 'capricornio':
        console.log('Lo mejor del año será el dinero y los negocios. La familia estará difícil. La salud bien. Lo más importante será la espiritualidad, los cambios profundos a nivel interior y encontrar el equilibrio emocional. El amor y las relaciones social, lo peor.')
        break;
    case 'Acuario':
    case 'acuario':
        console.log('Lo más importante será la espiritualidad y la evolución interior. El dinero y el trabajo se verán beneficiados de ese crecimiento personal. Mucha vida social, amigos nuevos. La familia y el hogar serán tu reto. Lo peor el amor.')
        break;
    case 'Piscis':
    case 'piscis':
        console.log('Lo más importante para Piscis en el año 2019 será el trabajo y la vida social. Imaginación y creatividad al máximo. Mejora la economía. Lo peor: tenderás a desconectar de la realidad.')
        break;
    default:
        console.log('Este signo no existe')
        break;
}