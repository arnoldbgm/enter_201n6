/* 🍏 Prototipos */

/*Comparación Clases */
/*ECM6 (2015) sintaxis usando class */
// class Persona {
//    constructor(nombre, edad) {
//       this.nombre = nombre;
//       this.edad = edad;
//    }

//    /*Funciones*/
//    saludar() {
//       console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
//    }
// }

// /*Funciones Constructoras */
// function PersonaPrototipo(nombre, edad) {
//    this.nombre = nombre;
//    this.edad = edad;
// }

// // Agregar un metodo o una funcion al prototipo
// PersonaPrototipo.prototype.saludar = function () {
//    console.log(`Hola ${this.nombre} desde el prototipo`)
// }

// // Crear un instancia para una clase y un prototipo (La misma forma es para ambos)

// const juan = new Persona("Juan", 30)
// const juanProtipo = new PersonaPrototipo("Juan", 30)



// // EJM 02
// class Animal {
//    constructor(nombre, especie) {
//       this.nombre = nombre;
//       this.especie = especie;
//    }

//    saludar() {
//       console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
//    }
// }

// /* Prototipos */
// function AnimalPrototipo(nombre, especie){
//    this.nombre = nombre;
//    this.especie = especie;
// }

// AnimalPrototipo.prototype.despedida = function () {
//    console.log(`Adios, soy ${this.nombre}`)
// }

// const firularis = new Animal("Perro", "canino")
// const misifus = new AnimalPrototipo("Gato", "felino")

// const croco = new Animal("Cocodrilo", "reptil")

// class Animal {
//    despedia() {
//       console.log(`Adios, soy ${this.nombre}`)
//    }
// }

// AnimalPrototipo.prototype.despedida = function() {
//    console.log("Esta es la despedida")
// }

// /*
//    💚 01-Reto:
//    Crear un prototipo llamado "Superheroe", este debe tener los siguientes atributos:
//    - nombre
//    - edad
//    - superpoder
//    - ciudad
//    - enemigo
//    - debilidad
//    Contar con las siguientes funciones:
//    * Ejecutar un poder (debe imprimir en consola => Soy el superheroe [nombre] y tengo el poder de: [superpoder])   
//    * Ejecutar una debilidad (debe imprimir en consola => Soy el superheroe [nombre] y tengo la debilidad de: [debilidad])

//    Crear una instancia de un superheroe y ejecutar sus poderes y debilidades.
// */


// /* 💛 ECMAScript 6 ES6 
//    Es una de las mas grandes actualizaciones de Js, esta fue lanzada en 2015 y trajo consigo
//    grandes cambios a nivel de la sintaxis:
//     - Clases
//     - El prefijo let y const  => var, let y const
//     - Arrow functions => funciones flecha
//     - Template literals => comillas invertidas (backticks) ` `
//     - Modulos => import y export
// */

// /*Funciones flecha */
// function sumar(a, b){
//    return a + b;
// }

// const sumarFlecha = (a, b) => a + b; // No es necesario el return, ya que se entiende que es una sola linea de codigo

// const sumarFlecha2 = (a, b) => {
//    return a + b; // En este caso si es necesario el return, ya que son varias lineas de codigo
// }

// /*🍏 Modulo
//  Es un archivo que va coontener:
//       - Variables
//       - Funciones
//       - Clases
//       - Objetos
//  Puedes exportar lo que quieras y luego importarlo en otro archivo
//  ☢️ IMPORTANTE: Para poder usar modulos debes tener dentro de tu HTML
//    <script type="module" src="main.js"></script> 
// */

import { saludoAmigo }  from "./js/funciones.js";

import { areaCuadro } from "./js/funciones.js";

import { contarPalabras } from "./js/funciones.js";

import { contarLetras } from "./js/funciones.js";

import { sumarArreglo } from "./js/funciones.js";

saludoAmigo();

console.log(contarPalabras("Hola soy un texto de prueba para contar palabras"))

console.log(contarLetras("pantera"))

console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))