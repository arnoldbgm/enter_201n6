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
   if (elemt > 150) {
      return elemt - (elemt * 0.2)
   } else {
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

/*💚 Filter => SIRVE
     - Filtrar elementos de un array que cumplan una condicion especifica
*/

let edades = [15, 18, 20, 25, 30, 17, 16, 19, 22, 14]

let edadesFiltradas = edades.filter((element) => element >= 18)

console.log(edadesFiltradas)
console.log(`El total de personas mayores de edad es: ${edadesFiltradas.length}`)

/*
  🦇 Ejercicio de filter
  Biblioteca de libros
  Filtre por el nombre de los libros, debo de filtrar los libros que tengan mas o igual 7 letras

  let libros = ["Harry Potter", "It", "Narnia", "Cien años de soledad", "Crónica de una muerte anunciada"]

*/

let libros = ["Harry Potter", "It", "Narnia", "Cien años de soledad", "Crónica de una muerte anunciada"]

let librosFiltrados = libros.filter((element) => element.length >= 7)

console.log(librosFiltrados)


/* 
 🍏 RETO 03
   TIENDA DE ROPA - BLACK FRIDAY
   - 15% de descuento en todas las prendas que cuesten mas de
   150 dolares

   let ropaPrecio = [50, 100, 150, 200, 250, 300, 400, 500]

   TAREA:
   - Crear un nuevo array con la lista de los precios actualizados
   recuerda aplicar el descuento
   - Filtren los nuevos precios y quiten los que sean menores de 200 dolares
   TERMINAL:
   - Muestren el arreglo filtrado
   - Muestren el total de prendas filtradas
*/


/*
 💚 REDUCE => SIRVE
  - Acumular valores de un array en un solo valor
  - Sumar todos los elementos de un array
  - No modifica el array original
*/

const precios = [100, 50, 200, 300, 400]

/*
   acc => acumulador, es el valor que se va acumular en cada iteracion
   element => elemento actual del array
*/

const total = precios.reduce((acc, element) => acc + element , 0)

console.log(`El total es ${total}`)


/*
   🍏 RETO 04
   Estamos en un colegio y tenemos con las calificaciones de los alumnos
   y queremos saber cuantos alumnos aprobaron el examen, cuanto es el promedio de
   toda la clase, cuantos alumnos reprobaron y cuanto es el promedio de los reprobados

   let califaciones = [15, 20, 10, 5, 18, 12, 8, 14, 16, 17, 16, 2, 3 ,8, 10, 5 , 2 , 8 ,9]

   RECUERDA: La nota minima para aprobar es de 11

   IMPORTANTE:
   - Como el profesor no quiere que exista tantos reprobados a todos los alumnos que tengan
   de 8 a 10 se les va a colocar 11 automáticamente

   TAREA:
   - Crear un nuevo array con las calificaciones de los alumnos aprobados
   - Crear un nuevo array con las calificaciones de los alumnos reprobados
   - Mostrar el promedio de todos los alumnos de la clase
   - Mostrar el promedio de los alumnos reprobados
*/