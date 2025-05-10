/*
   🚀 Bucles
   While (mientras):
    - Este bucle se va ejecutar mientras la condicion que posee sea verdadera.
    num = 5; 
    mientras ( num < 10){
      console.log(num);
      num = num + 1;  
    }
*/

let num = 5;

// while => mientras

while (num < 10) {
   // Mientras num sea menor a 10 se ejecutara este bucle
   console.log(`Este es el valor de num ${num}`);
   num = num + 1;
}

console.log("El bucle ya termino")


/*
   🍏 RETO 01:
   - Crear un bucle que impria los numeros del 1 al 10.

   🍏 RETO 02:
   - Crear un bucle para una tabla de multiplicar del numero 5.
     Ejemplo:
      Se debe de imprimir en consola:
      5 x 1 = 5
      5 x 2 = 10
      5 x 3 = 15
      5 x 4 = 20
      ....
      5 x 10 = 50  

*/

// RETO 01

let contador = 1;

while (contador <= 10) {
   console.log(contador)
   // contador++    contador = contador + 1;
   contador++;
}

// Reto 02
//  5  x  1 = 5
//  5  x  numBase = 5
let numBase = 1;
while (numBase <= 10) {
   console.log(`5 x ${numBase} = ${numBase * 5}`)
   numBase++;
}

// Math de Js
/**
   Math es un objeto global de Js, este tiene propieades y metodos
   para realizar operaciones matematicas.

   Valor de Pi 3.14 
      Math.PI

   Redondear un numero
      Math.round( NUMERO )

   Numero aleatorio
      Math.random()

*/

console.log(Math.PI)

console.log(Math.round(83.5))



/*
 🍏 RETO 04
  Videojuego Numero aleatorio entre 1 y 10
   - Cree un numero aleatorio entre 1 y 10
   - Se mostrara una alerta con el mensaje "Hola bievenido a mi juego"
   - Se mostrara un prompt con el mensaje "Adivina el numero entre 1 y 10"
   - Si el numero es igual numero aleatorio se mostrara un alert con el mensaje 
   "Ganaste"
   - Si el numero es diferente se mostrara un alert con el mensaje "Perdiste"
*/

// Generar un numero entre 0 y 10

/*
   🍏 Continuacion
   Crear un bucle que solicite al usuario un numero entre 1 y 10 
   hasta que el usuario adivine el numero aleatorio.
    - While
      Mientras que aletaroio sea diferente a numUsuario
         => Se tiene que mostrar un prompt al usuario, pidiendo
         que vuelva a adivinar el numero.
      alert("Ganaste")
*/

// Control + Shift + r = Recargar el archivo y borrar cache

let numAleatorio = Math.round(Math.random() * 10) + 1;
alert("Hola bienvenido a mi juego");
let numUsuario = Number(prompt("Adivina el numero entre 1 y 10"));

while( numAleatorio !== numUsuario ){

   numUsuario = Number(prompt("Adivina nuevamente el numero entre 1 y 10"));
}


/*
   🍏 Continuacion
   Vamos agregar una respuesta si estamos muy cerca del numero aleatorio.
   Nos dira caliente o frio.
   Si estamos a 2 numeros de distancia nos dira caliente.
   Si estamos a mas de 2 numeros nos dira frio.

   numAleatorio = 5

   numUsuario = 3 

   proximidad =  numAleatorio - numUsuario
   proximidad = 5 - 3
   proximidad = 2 

   si ( proximidad <= 2){
      alert("Caliente")
   }
*/