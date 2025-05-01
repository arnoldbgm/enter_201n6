/*🚀 PROGRAMACIÓN FUNCIONAL */
/* Es un estilo de programación donde se trabaja 
con funciones puras, que no vayan a modificar directamente 
la informacion 
Donde no se usan variables globales, ni bucles
Usaremos funciones como map, filter y reduce
*/

/*1. Tener nuestra informacion en un array */
/*🏦 Ingresos que me depositaron en mi cuenta del banco*/
let ingresos = [1200, 1500, 800, 2000, 3000, 5000]

/*🏦 COMUNICADO: Todos los ingresos se van a duplicar */

/* [2400, 3000, 1600, 4000, 6000, 10000] */

/* Solucion sin PROGRAMCION FUNCIONAL */
// let ingresosDuplicados = []
// for(let i = 0; i < ingresos.length; i++){
//    ingresosDuplicados[i] = ingresos[i] * 2
// }

/* Solución usadon PROGRAMACIÓN FUNCIONAL */

/*💚 MAP => SIRVE
   - Crear un nuevo array a partir de otro
   - Recorrer un array y aplicar una funcion a cada elemento
   - No modifica el array original
*/

let ingresDuplicado = ingresos.map((elemt) => elemt * 2)
console.log(ingresDuplicado)

/* 🍏RETO 01
  FORMULA  de CELCIUS A FAHRENHEIT
  F° = (C° * 9/5) + 32
  Apartir del siguiente array de temperaturas en Celsius,
  convertirlas a Fahrenheit usando la funcion map
  let celcius = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
*/


/*
   TIENDA DE ROPA - BLACK FRIDAY
   - 20% de descuento en todas las prendas que cuesten mas de
   150 dolares

   let ropaPrecio = [50, 100, 150, 200, 250, 300, 400, 500]

   TAREA:
   - Crear un nuevo array con la lista de los precios actualizados
   recuerda aplicar el descuento
*/

let ropaPrecio = [50, 100, 150, 200, 250, 300, 400, 500]

let ropaActualizada = ropaPrecio.map((elemt) => {
                                                   if(elemt > 150){
                                                      return elemt - (elemt * 0.2)
                                                   } else{
                                                      return elemt
                                                   }
                                                })

console.log(`Precios actualizados: ${ropaActualizada}`)
console.log(`Precios originales: ${ropaPrecio}`)


/*
  🍏 RETO 02
  Estamos en las elecciones presidenciales del 2025, el la cola tengo persona de diferentes edades
  edades, quiero saber cuantas personas son mayores de edad (18 años o mas)

   let edades = [15, 18, 20, 25, 30, 17, 16, 19, 22, 14]

   TAREA:
   - Crear un nuevo array con las edades de las personas mayores de edad
   El array debe verse de la siguiente manera:
   ["Menor", "Mayor", "Mayor", "Mayor", "Mayor", "Menor", "Menor"]

*/