// funciones tradicionales 
function saludar(){
    //todas las lineas de codigo que sabe hacer esta funcion
    document.writeln('<p>Hola mundo 🌎</p>')
}

//funcion con parametros
function saludarPersona(nombre, apellido){
    //todas las limeas de codigo que sabe hacer esta funcion
    document.writeln(`<p>Hola ${nombre}, ${apellido}</p>`)
}
//funciones que retornan un valor
function mostrarCancion(nombreCancion){
    //todas las limeas de codigo que sabe hacer esta funcion
    const cancion = 'La cancion ingresada es: '+ nombreCancion
    console.log(cancion)
    return cancion
}
//expresion de funcion
//const sumar =function (numero1, numero2){
//   
//   return numero1 + numero2
//}


//arrow functions o funciones en forma de flecha
const sumar = (numero1, numero2) => {
    return numero1 + numero2
}

//llamar o invocar a la funcion
saludar()
const nombre = prompt('Ingresa tu nombre')
const apellido = prompt('Ingresa tu apellido')

saludarPersona('Matias','Saade')
saludarPersona(nombre, apellido)


const textoGenerado = mostrarCancion('Crimen')

document.writeln(`<p>El texto generado fue: ${textoGenerado}</p>`)
document.writeln(mostrarCancion('flaca'))

const numero1 = parseInt(prompt('Ingresa un numero'))
const numero2 = parseInt(prompt('Ingresa un segundo numero'))

const resultado = sumar(numero1, numero2)
console.log(resultado)

document.writeln(`<p>Resultado :${sumar(12, 5)}</p>`)
