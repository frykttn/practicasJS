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
    return cancion
}


//expresion de funcion
const sumar = function(numero1, numero2){
     //todas las lineas de codigo que sabe hacer esta funcion
    document.writeln(`<p>Resultado: ${numero1 + numero2}</p>`)

}

//arrow functions o funciones en forma de flecha

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

sumar(numero1, numero2)
sumar(5, 20)
