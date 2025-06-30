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


//expresion de funcion

//arrow functions o funciones en forma de flecha

//llamar o invocar a la funcion
saludar()
const nombre = prompt('Ingresa tu nombre')
const apellido = prompt('Ingresa tu apellido')

saludarPersona('Matias','Saade')
saludarPersona(nombre, apellido)