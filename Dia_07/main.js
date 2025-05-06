

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


/*
   🍏RETO 01:
   Crear una clase llamada "Alumno" que contenga las siguientes propiedades:
   - Nombre
   - Apellido
   - Edad
   - Carrera
   - Hobby
   - Promedio

   // Crear al menos 3 instancias de cada clase con diferentes valores.
   // Imprimir en consola el nombre, apellido, carrera y promedio de cada alumno.
   Ejm en terminal:
         Nombre: Juan Perez, de la carreara de Ingenieria, promedio 9.5

   🌟TIP => Usar backticks  ``  para mostrar en la terminal
   No olvides de usar el constructor para dar forma a tu objeto, ni te olvide la palabra this

*/


class Alumno {
   constructor(nombre, apellido, edad, carrera, hobby, promedio) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.carrera = carrera;
      this.hobby = hobby;
      this.promedio = promedio;
   }

   // Puedes agregar metodos
   saludar() {
      console.log(`Nombre: ${this.nombre} ${this.apellido}, de la carrera de ${this.carrera}, promedio ${this.promedio}`)
   }
}

// Instanciar un objeto
const juan = new Alumno("Juan", "Perez", 20, "Ingenieria", "Futbol", 9.5)
const maria = new Alumno("Maria", "Lopez", 22, "Arquitectura", "Dibujo", 8.7)
const pedro = new Alumno("Pedro", "Gomez", 21, "Medicina", "Musica", 9.0)

// Invocar un metodo o llamar
maria.saludar()