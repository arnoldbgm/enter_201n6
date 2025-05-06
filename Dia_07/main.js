

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