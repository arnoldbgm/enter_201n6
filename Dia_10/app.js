/*
   🍏 Manipulacion del DOM
   getlElementById
*/

// let tituloDOM = document.getElementById("titulo")

// /*Cuando capturamos un elemento de texto */

// console.log(tituloDOM.innerText)
// tituloDOM.innerText = "Calc DOM"

// querySelector

let tituloDOM = document.querySelector("#titulo")

/*Queremos capturar el valor de un input */

let input1 = document.getElementById("num1")
let input2 = document.getElementById("num2")
// Capturo el valor del input
// El valor de los inputs siempre llega en String

// Para usar los eventos
// 1. Capturar la etiqueta 
const btnSumar = document.getElementById("sumar")


// 2. Añadimos el addEventListener y el evento

let txtResult = document.getElementById("resultado")

const btnMultiplicar = document.getElementById("multiplicar")

let tbHistorial = document.getElementById("historial-body")

let historial = []



/*
   🍏 RETO 01
   Dar funcionamiento a los botones de: 
   -resta
   -multiplicacion
   -division
   -Limpiar

    🌟 RETO EXTRA:
   Si el resultado es negativo que se muestre en rojo
   Si el resultado es positivo que se muestre en verde
   Validar cuando es la division por 0 que me lanze un 
       alert
   Validar que los inputs no esten vacios
*/

btnMultiplicar.addEventListener("click", function () {
   // Validacion de inputs vacios
   if (input1.value === "" || input2.value === "") {
      alert("Los inputs no pueden estar vacios")
      return;
   }

   let val1 = Number(input1.value)
   let val2 = Number(input2.value)
   let total = val1 * val2;
   txtResult.innerText = total
   // Si el resultado es negativo rojo
   // Si es positivo verde
   if (total < 0) {
      txtResult.style.color = "red";
   } else {
      txtResult.style.color = "green";
   }
})

/*
 Los arreglos van a ser muy utilies porque me van a
 permitir guardar varios valores en una variable
*/

// En la parte superior cree un arreglo vacio
// let historial = []

// Cada operacion que haga se va a guardar en el
// arrego historial, como un objeto

/*

let historial = [
   { operacion: "suma", resultado: 5 },
   { operacion: "resta", resultado: 2 },
   { operacion: "multiplicacion", resultado: 10 },
   { operacion: "division", resultado: 0.5 }
]
*/

btnSumar.addEventListener("click", function () {
   // Para hacer la suma y que se muestre en un alert
   let val1 = Number(input1.value)
   let val2 = Number(input2.value)
   let total = val1 + val2
   txtResult.innerText = total

   // Vamos a guardar el resultado en el arreglo
   // Pero antes debemos de convertirlo a un objeto
   let objeto = {
      operacion: "suma",
      resultado: total
   }
   // Vamos insertar el objeto en el arreglo
   historial.push(objeto);
   console.log(historial);

   // Vamos a rendizar el arreglo historial 
   //< en nuestro HTML

   // Para insertar el elmento en el HTML
   // Vamos a usar el innerHTML
   // tbHistorial.innerHTML = `
   //             <tr>
   //                <td class="px-3 py-2">1</td>
   //                <td class="px-3 py-2">suma</td>
   //                <td class="px-3 py-2">${total}</td>
   //                <td class="px-3 py-2">
   //                   <button class="text-red-500 hover:text-red-700">
   //                      Eliminar
   //                   </button>
   //                </td>
   //             </tr>
   // `

   // Para mostrar el historial, nosotros debemos usar
   // nuestro arreglo historial
   // Lo vamos a usar con un forEach

  dibujarHistorial();
})

// Vamos a crear una funcion para eliminar un registro especifico
function elimnarRegistro(index) {
   historial.splice(index, 1);
   console.log("Este es el nuevo historial")
   console.log(historial)
   dibujarHistorial();
}

/* Teoria Callback */
function dibujarHistorial() {
   // 1. Limpiamos el HTML (voy a eliminar el contenido)
   tbHistorial.innerHTML = ""
   // 2. Recorrer el arreglo
   historial.forEach((elmt, index) => {
      tbHistorial.innerHTML += `
               <tr>
                  <td class="px-3 py-2">${index + 1}</td>
                  <td class="px-3 py-2">${elmt.operacion}</td>
                  <td class="px-3 py-2">${elmt.resultado}</td>
                  <td class="px-3 py-2">
                      <button onclick="elimnarRegistro(${index})" class="text-red-500 hover:text-red-700">
                         Eliminar
                      </button>
                  </td>
               </tr>
      `
   })
}
