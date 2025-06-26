// Crear una script para generar piramide siguiente con los numeros del 1 al numero que indique el usuario, no mayor de 50.
// 1
// 12
// 123
// 1234
// 12345
// 123456
// _.

const numeroRepeticiones = parseInt(prompt("ingresa numero del 1 al 50"));
for (let fila = 0; fila < numeroRepeticiones; fila++ ){
  for (let columna = 0; columna <= fila; columna++) {
    document.writeln(columna + 1);
  }

  document.writeln("<br>");
}
