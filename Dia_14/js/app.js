let plantillas = []

/*
   Quiero crear una instancia de Template

   new Template(titulo, mensaje, hasthag)
*/

/*
   1. Capturar los elementos con los querySelector
   2. Crear la instancia => new Template(tituloDOM, mensajeDOM, hasDOM)
   3. Lo inserto a mi arreglo plantillas.
*/


const btnSave = document.querySelector("#save-template-btn")

btnSave.addEventListener("click", function () {

   // 💚  Capturar los elements e insertarlos a mi arreglo
   const inputTitle = document.querySelector("#template-title").value.trim()
   const inputHashtag = document.querySelector("#template-hashtag").value.trim()
   const inputMessage = document.querySelector("#template-message").value.trim()

   const newTemplate = new Template(inputTitle, inputMessage, inputHashtag)

   // VAmos a insertar las plantillas
   // 1. Push
   // plantillas.push(newTemplate)

   // 2. Spread operator
   plantillas = [...plantillas, newTemplate]

   // 💚 Renderizar el arreglo dentro de mi contenedor div
   const containerTemplate = document.querySelector("#templates-container")
   // Limpiar el contenedor
   containerTemplate.innerHTML = ""
   // Vamos a renderizarlo
   plantillas.forEach((elmt) => {
      
   })



})