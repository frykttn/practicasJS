//9- Escribe un programa que pida una frase y escriba las vocales que aparecen
//nota: Tener en cuenta la funcion lenght y substring o charAT (developer mozilla)

let frase = prompt("Ingresa una frase de hasta 4 caracteres").toLowerCase();
//hola = 4
console.log(frase.toLowerCase()); //esto transforma a un texto a minuscula
console.log(frase.toUpperCase()); //esto transforma un texto a mayuscula
console.log(frase.length);
console.log(frase.substring(0, 3));
console.log(frase.charAt(0));
console.log(frase.charAt(5));

if (frase.charAt(0) === 'a' ||
    frase.charAt(0) === 'e' ||
    frase.charAt(0) === 'i' ||
    frase.charAt(0) === 'o' ||
    frase.charAt(0) === 'u' 
) {
    document.writeln(frase.charAt(0))
}
    
if (frase.charAt(1) === 'a' ||
    frase.charAt(1) === 'e' ||
    frase.charAt(1) === 'i' ||
    frase.charAt(1) === 'o' ||
    frase.charAt(1) === 'u' 
) {
    document.writeln(frase.charAt(1))
}
    
if (frase.charAt(2) === 'a' ||
    frase.charAt(2) === 'e' ||
    frase.charAt(2) === 'i' ||
    frase.charAt(2) === 'o' ||
    frase.charAt(2) === 'u' 
) {
    document.writeln(frase.charAt(2))
}
    
if (frase.charAt(3) === 'a' ||
    frase.charAt(3) === 'e' ||
    frase.charAt(3) === 'i' ||
    frase.charAt(3) === 'o' ||
    frase.charAt(3) === 'u' 
) {
    document.writeln(frase.charAt(3))
}
    

    
 

    


