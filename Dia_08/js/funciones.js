export function saludoAmigo() {
   console.log("Hola amigo")
}

/*Crear una funcion para determinar el area de un cuadrado */

// export function areaCuadrado(lado){
//    let area = lado * lado;
//    return area;
// }

export const areaCuadro = (lado) => {
   let area = lado * lado;
   return area;
}

/* RETO 
   Crear 2 funciones para calcular el area de:
    - Triangulo  => base * altura / 2
    - Circulo   => pi * radio^2  

   🌟 IMPORTATE => pi = 3.14
   🌟 IMPORTATE => Usar funciones flecha y parametros
*/

/*
   RETO 02
   01. Crear una funcion que me cuente, cuantas palabras tiene la
   siguiente frase:
     "Hola soy un texto de prueba para contar palabras"
   Se debe retonar el numero de palabras por frase

   02. Crear una funcion que cuente, cuantas letras tiene el 
   siguiente nombre:
      "JeanCarlos"
   Se debe retornar el numero de letras por nombre

   🌟 IMPORTATE => Usar funciones flecha y parametros
*/
/*
   texto = "Hola soy un texto de prueba"
   ["Hola", "soy", "un", "texto", "de", "prueba"]
*/
export const contarPalabras = (texto) => {
   let textoSinEspacios = texto.split(" ")
   return textoSinEspacios.length
}

/*
 texto = "juanito"
 ["j", "u", "a", "n", "i", "t", "o"]
*/
export const contarLetras = (texto) => {
   let textoCortado = texto.split("")
   return textoCortado.length
}

/*
   🍏 RETO03
   Crear una funcion que reciva un arreglo de numeros:
   [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
   y sumaras a todos los elementos del arreglo 6
   Una vez ya suamado, filtraras los numeros que sean
   mayores a 10 y con este pasara a sumar todos los
   elementos que sean mayores a 10 y retornaras el resultado

   [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
   [7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
   [11, 12, 13, 14, 15, 16]
   [11 + 12 + 13 + 14 + 15 + 16] = resultado

   🌟 IMPORTATE => Usar funciones flecha y parametros
   🌟 Usar map , filter y reduce
*/

export const sumarArreglo = (arreglo) => {
   const arrModificado  = arreglo.map((elmt) => elmt + 6) // Retoranar un nuevo arreglo
   const arrFiltrado = arrModificado.filter((elmt) => elmt > 10) // Retorna un nuevo arreglo
   const sumaTotal = arrFiltrado.reduce((acc, elmt) => acc + elmt , 0) // Retorna un valor
   return sumaTotal;
}