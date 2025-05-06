# 🚀 POO (Programación Orientada a Objetos)
## Paradigma
Al hablar de paradigma a lo que nos referimos a un modelo , o un enfoque de trabajo.

> A que nos vamos a enfocar exclusivamente en trabajar usando lo que son objetos

## Objeto
Es una entidad con propiedades (caracteristicas), metodos (funciones). Es como el plano de una casa.

---
### Propieades
Son las caracteristicas que tiene un objeto
Ejm: Una persona => nombre, edad, genero

### Funciones
Son las acciones que puede hacer el objeto
Ejm: Persona => caminar, correr, saludar, leer

> [!Important] Siempre debemos de colocar una coma ` , ` al terminar de colocar un metodo o una propiedad


### ¿Como crear un objeto tradicional?
```js
/*🍏 Objeto sin POO */
const ferrari = {
   // Propiedades
   color: "rojo",
   marca: "ferrari",
   modelo: "f40",
   numeroAsientos: 2,
   numeroNeumaticos: 4,
   tranmision: "manual",

   // Metodos - Funciones 
   // metodo: encender
   encender: function (){
      /*Aca ira toda la logica de mis acciones */
      console.log("El auto se encendio");
   },
   // metodo: acelerar
   acelerar: function(){
      console.log("El auto esta acelerando")
   }
}
// Acede a una propiedad del objeto
console.log(ferrari.color)
console.log(ferrari.modelo)
console.log(ferrari.tranmision)
// Acede a un metodo del objeto
ferrari.encender()
ferrari.acelerar()
```
### 📖 Clases
Una clase es un modelo o plano para crear uno o muchos objetos con la misma estructura, en js nosotros usamos la palabra `class`

> Una clase es un modelo abstracto, no tiene forma como tal

<img src="https://media.istockphoto.com/id/517164278/es/foto/la-masa-de-levadura.jpg?s=612x612&w=0&k=20&c=LhXE4H1PHX2FnsYkj-zfPgDPkwmUEy9D1OHtAFod1rI=">


#### Uso del constructor

Nostros debemos de llamar a `constructor (parametros) {}`


```js
/*🍏 Objeto con POO */
class Auto {
   // Para dar forma se necesita de un constructor
   constructor(color, marca, modelo, numeroAsientos, numeroNeumaticos, transmision) {
      // Propieades
      // Recuerda usar la palabra reserva this 
      this.color = color;
      this.marca = marca;
      this.modelo = modelo;
      this.numeroAsientos = numeroAsientos;
      this.numeroNeumaticos = numeroNeumaticos;
      this.transmision = transmision;
   }
}

// Instanciar un objeto
// Siempre iniciamos con la palabra new
const auto01 = new Auto("rojo", "Ferrari", "F40", 3, 4, "automatico")
const auto02 = new Auto("azul", "Volkwagen", "Vocho", 4, 4, "manula")
const auto03 = new Auto("verde", "Chevrolet", "Camaro", 2, 4, "automatico")


console.log(auto01.color)
console.log(auto03.modelo)
```