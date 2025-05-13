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

btnSumar.addEventListener("click", function () {
   // Para hacer la suma y que se muestre en un alert
   let val1 = Number(input1.value)
   let val2 = Number(input2.value)
   let total = val1 + val2
   txtResult.innerText = total
})


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
   if (input1.value === "" || input2.value === ""){
      alert("Los inputs no pueden estar vacios")
      return;
   }
   
   let val1 = Number(input1.value)
   let val2 = Number(input2.value)
   let total = val1 * val2;
   txtResult.innerText = total
   // Si el resultado es negativo rojo
   // Si es positivo verde
   if (total < 0){
      txtResult.style.color = "red";
   } else{
      txtResult.style.color = "green";
   }
})
