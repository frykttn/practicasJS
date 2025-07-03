const mostrarCanciones = (titulo) => {
  document.writeln(
    `<h2 class="mt-3">${titulo} - cantidad de elementos ${canciones.length}</h2>`
  );
  document.writeln('<ul class="list-group">');
  for (let i = 0; i < canciones.length; i++) {
    document.writeln(`<li class="list-group-item">${canciones[i]}</li>`);
  }
  document.writeln("</ul>");
};

// como declarar un array
// array vacio
const peliculas = [];

// array de canciones
const canciones = ["Batidora", 2010, true, "musica ligera", "mujer amante"];

// mostrar un array
console.log(peliculas);
console.log(canciones);
document.writeln(canciones);
const indice = 0;
document.writeln(`<p>Mostrar un solo elemento del array: ${canciones[3]}</p>`);
document.writeln(
  `<p>Mostrar el primer elemento del array: ${canciones[indice]}</p>`
);

mostrarCanciones("Mostrar el array de canciones");

// agregar elementos al array
document.writeln('<h2 class="mt-3"></h2>');
canciones.unshift(false, "like stone");
mostrarCanciones("Agregar un elemento al inicio del array");

canciones.push("Like a Rolling stone");
mostrarCanciones("Agregar un elemento al final de array");

canciones.splice(4, 0, "feel good inc");
mostrarCanciones("Agregar un elemento en el medio del array");

//borrar elementos del array
canciones.shift();
mostrarCanciones("Borrar un elemento del inicio del array");

//borrar un elemento del final del array
canciones.pop();
mostrarCanciones("Borrar un elemento del final del array");

canciones.splice(2, 1);
//canciones.splice(2,3) // desde la posicion 2 del array borro 3 elementos
//canciones.splice(2) //borrar todo desde la posicion 2 del array
//canciones.splice(canciones.length -1, 1)
mostrarCanciones("Borrar un elemento del medio del array");

//modificar elementos del array
canciones[3] = "Sobredosis de TV";
mostrarCanciones("Modificar un elemento del array");

// metodos extras para trabajar con arrays
const nombreCancion = prompt("Ingresa un nombre de cancion");
// find

const cancionAlmacenada = canciones.find(
  (cancion) => nombreCancion === cancion
);
console.log(cancionAlmacenada);

//if (cancionAlmacenada) {
//document.writeln("<p>La cancion buscada existe</p>");
//} else {
// document.writeln("<p>La cancion buscada no existe</p>");
//}
//operador ternario (condicion logica)? si se cumple la condicion hago esto : si no se cumple la condicon hago esto otro

const respuesta = cancionAlmacenada
  ? "La cancion existe"
  : "La cancion no existe";
document.writeln(`<p>${respuesta}</p>`);


const indiceCancion = canciones.findIndex((cancion)=> nombreCancion === cancion )


const indiceCancionBuscada = indiceCancion >-1
  ? "La cancion esta en la posicion"+ indiceCancion + 'del array de canciones'
  : "La cancion buscada no existe";
document.writeln(`<p>${respuesta}</p>`);

const cancionesFiltradas = canciones.filter((item)=> item.length >= 13 )

console.log(cancionesFiltradas)

document.writeln('<ul class="list-group">')
cancionesFiltradas.map((cancion, indice )=>document.writeln(`<li class="list-group-item">${cancion} - indice ${indice}</li>`))
document.writeln('</ul>')