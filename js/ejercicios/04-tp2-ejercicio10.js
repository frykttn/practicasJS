//Realiza un script que pida un numero de filas y columnas y escriba en una tabla. Dentro de cada una de las celdas debera escribirse un numero consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7x5 los numeros iran del 35 al 1.

//pedir al usuario las filas y columnas
const filas = parseInt(prompt('Ingresa un numero de filas'))
const columnas = parseInt(prompt('Ingresa un numero de columnas'))

console.log(filas, columnas)

//dibujar la tabla
document.writeln(`<table class='table table-striped'><tbody>`);
for (let indiceFilas=0; indiceFilas < filas; indiceFilas++) {


document.writeln(`
    <tr>
      <td class='p-2'>35</td>
            </tr>`)}
document.writeln(`</tbody></table>`);


//dibujar el valor de las celdas
