/* 🚀 EXCEPCIONES => 
   Es una forma de interrumpir el flujo del codigo   
 
   Usaremos el try y el catch
   try => Ejecutar el codigo
   catch => Si hay un error, se deja de ejecutar el try y se ejecuta el catch

 */

function dividir(a, b) {
   try {
      if (typeof a !== "number") {
         throw new Error("No se puede enviar Strings")
      }

      if (typeof b !== "number") {
         throw new Error("No se puede enviar Strings")
      }

      if (b === 0) {
         throw new Error("No se puede enviar cero como denominador")
      }

      return a / b;
   } catch (error) {
      console.error(error)
   }
}



function saludar(nombre, edad) {
   try {
      if (typeof nombre !== "string") {
         throw new Error("Debes de enviar un string")
      }
      console.log(edad)
      return `Hola mi nombre es ${nombre} mi edad es ${edad}`
   } catch (error) {
      console.error(error)
   }
}


/*
   🚀 RETO 01:
   Crear una funcion que valide la edad de un usuario
   Esta debe estar dentro un try catch, se debe de generar errores
   personalizados para el caso de que el numero que se reciba no sea un numero
   Es decir si nos estan enviando un string
      * Debes de ingresar un numero
   Si la edad es menor a cero, se debe de lanzar un error personalizado:
      * La edad es invalida

   function validarEdad(edad){
      //AQUI VA TU CODIGO
   }
*/

/*
   🚀 RETO 02:
   Crear una funcion que valide el nombre de usuario 
   Esta debe estar dentro un try catch, se debe de generar errores
   personalizados
   Situaciones:
   1. Si el nombre es menor a 3 caracteres
      * El nombre es muy corto
   2. Si el nombre es mayor a 20 caracteres
      * El nombre es muy largo
   3. Si el nombre no es un string
      * Debes de enviar un string
   4. Si el nombre es un string vacio
      * El nombre no puede estar vacio

   Final: 
      Se debe de retornar el nombre
   function validarNombre(nombre){
      //AQUI VA TU CODIGO
   }

*/

function validarNombre(nombre) {
   try {
      if (nombre.length < 3) {
         throw new Error("El nombre es muy corto")
      }

      if (nombre.length > 20) {
         throw new Error("El nombre no debe ser mayor a 20 caracteres")
      }

      if (typeof nombre !== "string") {
         throw new Error("El nombre debe ser un string")
      }

      if((nombre.trim()).length === 0){
         throw new Error("El nombre no puede estar vacio")
      }

      return nombre;

   } catch (error) {
      console.error(error)
   }
}