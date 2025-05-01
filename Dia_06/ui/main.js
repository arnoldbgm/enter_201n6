/*
   🏦 Banco Ripley:
   Queremos tener un sistema de gestion de ingresos de dinero, por cada cliente, que nos visite
   REQUISITOS:
    ✅ El sistema cuando inicie, una alerta con la bienvenida al cliente
    ✅ Pedir el nombre del cliente usando un prompt
    ✅ Mostrara un menu con las siguientes opciones:
         1. Ingresar dinero
         0. Salir
    ✅ Si elige la opcion 1, se le pedira el monto a ingresar, este no debe ser negativo, ademas
      este se debe de almacenar en un array, el cual se llamara ingresos
    - Si elige la opcion 0, se mostrara un mensaje de despedida y me dira:
         ✅ "Gracias por su visitia, vuelva pronto"
         "Se debe mostrar todos los ingresos"
         "Sus ingresos suman:"  💵 Total ingresos
         "Los ingresos menores a 1000 son:" 💵 Ingresos menores a 1000
*/

alert("Bienvenido al sistema de gestión del Banco Ripley");

let nombreCliente = prompt("Por favor, ingrese su nombre:");

let optCliente = prompt("Opciones: \n1. Ingresar dinero\n0. Salir");

let ingresos = [];  // [10, 20]

while (optCliente !== "0") {
   if (optCliente === "1") {
      let montoIngresado = Number(prompt("Ingresa el monto de dinero:")) // 10 , 20
      if (montoIngresado >= 0) {
         ingresos.push(montoIngresado);
      } else {
         alert("El no puede ser negativo")
      }
   }

   optCliente = prompt("Opciones: \n1. Ingresar dinero\n0. Salir");
}

const totalIngresos = ingresos.reduce((acc, elmt) => acc + elmt, 0)
const ingresosMenores = ingresos.filter((elmt) => elmt < 1000)

alert("Gracias por su visitia, vuelva pronto")
alert(`Sus ingresos son: ${ingresos}
      \nEl total de ingresos es: ${totalIngresos}
      \n Los ingresos menores a 1000 son: ${ingresosMenores}`)