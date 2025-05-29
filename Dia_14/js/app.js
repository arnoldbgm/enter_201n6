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

   console.log(plantillas)

   // 💚 Renderizar el arreglo dentro de mi contenedor div
   const containerTemplate = document.querySelector("#templates-container")
   // Limpiar el contenedor
   containerTemplate.innerHTML = ""
   // Vamos a renderizarlo
   plantillas.forEach((elmt) => {
      containerTemplate.innerHTML += `
         <div class="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-purple-300 transition duration-300 hover:shadow-md">
               <div class="flex flex-col lg:flex-row lg:items-start gap-4">
                  <div class="flex-1">
                        <div class="flex items-start justify-between mb-3">
                           <div>
                              <h3 class="text-lg font-semibold text-gray-800 mb-1">${elmt.titulo}</h3>
                              <div class="flex gap-2 mb-2">
                                    <span class="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">${elmt.hashtag}</span>
                              </div>
                           </div>
                           <div class="text-xs text-gray-500">
                              <i class="fas fa-calendar mr-1"></i>
                           </div>
                        </div>
                        
                        <div class="bg-white p-4 rounded-lg border border-gray-200 mb-4">
                           <p class="text-gray-700 text-sm leading-relaxed">
                              ${elmt.mensaje}
                           </p>
                        </div>
                  </div>
                  
                  <div class="flex flex-row lg:flex-col gap-2 lg:ml-4">
                        <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 flex items-center gap-2 text-sm">
                           <i class="fas fa-copy"></i>
                           <span class="hidden sm:inline">Copiar</span>
                        </button>
                        <button class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300 flex items-center gap-2 text-sm">
                           <i class="fas fa-edit"></i>
                           <span class="hidden sm:inline">Editar</span>
                        </button>
                        <button class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300 flex items-center gap-2 text-sm">
                           <i class="fas fa-trash"></i>
                           <span class="hidden sm:inline">Eliminar</span>
                        </button>
                  </div>
               </div>
         </div>
      `
   })



})