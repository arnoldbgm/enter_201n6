/* 
   🚀 RETO 01 : Manipulacion del App State
   En este reto, vamos a practicar la manipulacion del estado
   de variables, funciones y clases en JavaScript.

   - Crear una clase global llamda Gasto
      class Gasto {
      constructor(nombre, cantidad) {
         this.nombre = nombre;
         this.cantidad = cantidad;
      }
   ** IMPORTANTE: Esta debe estar disponible para todos los
   archivos de la aplicacion.

   - Crear un arreglo llamado gastos, este solo debe de estar
   disponible en el archivo handle.js y app.js

   - Dentro de tu archivo app.js, crear una instancia de la 
   clase Gasto, con el nombre de "Comida" y una cantidad de 1000.
   
   OJO:
      const NOMBRE_VARIABLE = new NombreClase(parametros_constructor)   

   - Agregar el gasto creado al arreglo gastos.
   - Mostrar por consola el arreglo gastos.

   ☢️ Reto extra: 
   Crea una funcion que reciba un arreglo de gastos y retorne
   el total de todos los gastos.

*/

const comida = new Gasto("Comida", 1000)

gastos.push(comida)

const cine = new Gasto("Cine", 650)

gastos.push(cine)

console.log(gastos)