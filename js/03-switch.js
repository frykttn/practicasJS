// Cree un programa al estilo de un cajero automatico con las siguientes opciones:
//1- consultar el saldo
//2- ingresar dinero
//3- extraer dinero

/*
switch (opcion){
    case 1:
        |todas las lineas de codigo que quiero hacer si la opcion del usuario es 1
        |break;
    case 2:
        |todas las lineas de codigo que quiero hacer si la opcion del usuario es 1
        |break;
    case 3:
        |todas las lineas de codigo que quiero hacer si la opcion del usuario es 1
        |break;
    default:
        todas las lineas que quiero ejecutar si no se cumplio ningun caso anterior

}
 */

const opcion = prompt(
  "Seleccione una opcion : 1- Consultar el saldo, 2- Ingresar dinero, 3- Extraer dinero"
);
let saldo = 10000;

switch (opcion) {
  case "1":
    alert("su saldo es $" + saldo);
    break;
  case "2":
    const deposito = parseFloat(prompt("Ingrese el monto que desea depositar"));
    if (deposito > 1000 && deposito <= 2000000) {
      console.log(deposito);
      saldo = saldo + deposito;
      document.writeln(
        `Depositaste $${deposito}, tu saldo actual es: $${saldo}`
      );
    } else {
      alert("Ingresaste un monto invalido");
    }

    break;
  case "3":
    const montoExtraer = parseFloat(prompt("Ingresa el monto a extraer"));
    if(montoExtraer <= saldo){
        saldo = saldo - montoExtraer;
        document.writeln(`El monto a extraer es $${montoExtraer}, tu saldo actual es $${saldo}`)
    }else{
        alert('monto invalido')
    }
    break;
  default:
    alert("Ingresaste una opcion erronea");
}
