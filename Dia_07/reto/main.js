/*
   🏦 Biblioteca Central de Magascar
   Nos han contactado para que hagamos una biblioteca de libros, pero no cualquier biblioteca, 
   sino una biblioteca de libros y comics.
   La biblioteca tiene que tener un sistema de gestión de libros y comics, donde se puedan
   añadir libros, añadir comics y ver todos los libros y comics que hay en la biblioteca.

   ✅ La biblioteca nos pide que creemos una clase llama Libro y otra llamada Comic
   ✅Las propiedades que tienen en comun son:
   ✅- titulo
   ✅- editorial
   ✅- autor
   ✅- tipo (libro o comic)
   ✅- paginas

   ✅Tambien tienen que tener un metodo que nos devuelva un string con la siguiente
   estructura:
   ✅"Titulo: ${titulo}, Editorial: ${editorial}, Autor: ${autor}, Tipo: ${tipo}, Paginas: ${paginas}"  

   Usado el prompt nosotros debemos de introducir los datos de los libros y comics y guardarlos en un array

   ✅ 🌟 El array debe llamarse biblioteca 

   Las opciones que tenemos que implementar son:
   1. Añadir libro
   2. Añadir comic
   3. Ver todos los libros
   4. Ver todos los comics
   5. Ver todos los libros y comics
   6. Salir

*/

class Materia {
   constructor(titulo, editorial, autor, tipo, paginas) {
      this.titulo = titulo;
      this.editorial = editorial;
      this.autor = autor;
      this.tipo = tipo;
      this.paginas = paginas;
   }
   mostrarInformacion() {
      return `Titulo: ${this.titulo}, Editorial: ${this.editorial}, Autor: ${this.autor}, Tipo: ${this.tipo}, Paginas: ${this.paginas}`;
   }
}

let biblioteca = [];

let opcion = prompt(`Bienvenido a la biblioteca de Madagascar
                     \nEscoja una opcion:
                     \n1. Añadir libro
                     \n2. Añadir comic
                     \n3. Ver todos los libros
                     \n4. Ver todos los comics
                     \n5. Ver todos los libros y comics
                     \n6. Salir`);


// Crearemos un bucle para que el usuario pueda eligir la opcion que quiera

while (opcion != 6) {
   if (opcion == 1) {
      let titulo = prompt("Introduce el titulo del libro: ");
      let editorial = prompt("Introduce la editorial del libro: ");
      let autor = prompt("Introduce el autor del libro: ");
      let tipo = "libro";
      let paginas = prompt("Introduce el numero de paginas del libro: ");

      // Crear la instancia del libro
      const libro = new Materia(titulo, editorial, autor, tipo, paginas)
      // Añadir el libro al array biblioteca
      biblioteca.push(libro);
      alert("Libro añadido correctamente")
   }

   else if (opcion == 2) {
      let titulo = prompt("Introduce el titulo del comic: ");
      let editorial = prompt("Introduce la editorial del comic: ");
      let autor = prompt("Introduce el autor del comic: ");
      let tipo = "comic";
      let paginas = prompt("Introduce el numero de paginas del comic: ");

      // Crear la instancia del comic
      const comic = new Materia(titulo, editorial, autor, tipo, paginas)
      // Añadir el comic al array biblioteca
      biblioteca.push(comic);
      alert("Comic añadido correctamente")
   }

   else if (opcion == 3) {
      const data = biblioteca.filter((elemt) => elemt.tipo == "libro")
      // Dar formato a la salida
      const salida = data.map((elemt) => {
         return elemt.mostrarInformacion()
      })

      alert(`Estos son los libros ${salida}`)
   }


   opcion = prompt(`Bienvenido a la biblioteca de Madagascar
      \nEscoja una opcion:
      \n1. Añadir libro
      \n2. Añadir comic
      \n3. Ver todos los libros
      \n4. Ver todos los comics
      \n5. Ver todos los libros y comics
      \n6. Salir`);
}