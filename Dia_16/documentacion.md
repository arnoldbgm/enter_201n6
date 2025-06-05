---
repository:
  name: Dia_16
  owner: unknown
  url: ""
generated:
  timestamp: 2025-06-04T23:28:46.885Z
  tool: FlatRepo
statistics:
  totalFiles: 6
  totalLines: 504
  languages:
    markdown: 1
    html: 1
    javascript: 4
  fileTypes:
    .md: 1
    .html: 1
    .js: 4
---

===  README.md
```markdown
# Whatsapp-templates
```
=== EOF: README.md

===  index.html
```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Gestor de Plantillas WhatsApp</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="bg-gradient-to-br from-green-50 to-emerald-100 min-h-screen">
    <div class="container mx-auto max-w-6xl px-4 py-8">
      <!-- Header -->
      <header class="text-center mb-10">
        <div class="flex justify-center items-center gap-3 mb-4">
          <div class="bg-green-500 p-3 rounded-full shadow-lg">
            <i class="fab fa-whatsapp text-white text-3xl"></i>
          </div>
          <h1 class="text-4xl font-bold text-gray-800">Gestor de Plantillas</h1>
        </div>
        <p class="text-gray-600 text-lg">
          Administra y organiza tus plantillas de mensajes de WhatsApp
        </p>
      </header>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Formulario para crear plantillas -->
        <div class="bg-white rounded-xl shadow-xl p-8 border border-gray-100">
          <div class="flex items-center gap-3 mb-6">
            <div class="bg-blue-500 p-2 rounded-lg">
              <i class="fas fa-plus text-white"></i>
            </div>
            <h2 class="text-2xl font-semibold text-gray-800">
              Nueva Plantilla
            </h2>
          </div>

          <form class="space-y-6">
            <!-- Campo Título -->
            <div>
              <label
                for="template-title"
                class="block text-sm font-medium text-gray-700 mb-2"
              >
                <i class="fas fa-heading text-blue-500 mr-2"></i>
                Título de la Plantilla
              </label>
              <input
                type="text"
                id="template-title"
                placeholder="Ej: Bienvenida a nuevos clientes"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 bg-gray-50 hover:bg-white"
              />
            </div>

            <!-- Campo Hashtag -->
            <div>
              <label
                for="template-hashtag"
                class="block text-sm font-medium text-gray-700 mb-2"
              >
                <i class="fas fa-hashtag text-green-500 mr-2"></i>
                Hashtag (Categoría)
              </label>
              <input
                type="text"
                id="template-hashtag"
                placeholder="Ej: #bienvenida #ventas #soporte"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-300 bg-gray-50 hover:bg-white"
              />
            </div>

            <!-- Campo Mensaje -->
            <div>
              <label
                for="template-message"
                class="block text-sm font-medium text-gray-700 mb-2"
              >
                <i class="fas fa-comment-dots text-purple-500 mr-2"></i>
                Mensaje de la Plantilla
              </label>
              <textarea
                id="template-message"
                rows="6"
                placeholder="Escribe aquí el contenido de tu plantilla de WhatsApp..."
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-300 bg-gray-50 hover:bg-white resize-none"
              ></textarea>
              <div class="flex justify-between mt-2">
                <span class="text-xs text-gray-500">
                  <i class="fas fa-info-circle mr-1"></i>
                  Usa variables como {nombre}, {empresa}, etc.
                </span>
                <span class="text-xs text-gray-400" id="char-count"
                  >0/1000 caracteres</span
                >
              </div>
            </div>

            <!-- Botones de acción -->
            <div class="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                type="button"
                id="save-template-btn"
                class="flex-1 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition duration-300 flex items-center justify-center gap-2 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <i class="fas fa-save"></i>
                <span>Guardar Plantilla</span>
              </button>
              <button
                type="button"
                id="clear-form-btn"
                class="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-300 flex items-center justify-center gap-2 font-medium shadow-md hover:shadow-lg"
              >
                <i class="fas fa-eraser"></i>
                <span>Limpiar</span>
              </button>
            </div>
          </form>
        </div>

        <!-- Vista previa -->
        <div class="bg-white rounded-xl shadow-xl p-8 border border-gray-100">
          <div class="flex items-center gap-3 mb-6">
            <div class="bg-green-500 p-2 rounded-lg">
              <i class="fas fa-eye text-white"></i>
            </div>
            <h2 class="text-2xl font-semibold text-gray-800">Vista Previa</h2>
          </div>

          <!-- Simulador de WhatsApp -->
          <div class="bg-gray-100 rounded-lg p-4 max-w-sm mx-auto">
            <div
              class="bg-green-500 text-white p-3 rounded-t-lg flex items-center gap-3"
            >
              <div
                class="w-8 h-8 bg-white rounded-full flex items-center justify-center"
              >
                <i class="fas fa-user text-green-500 text-sm"></i>
              </div>
              <div>
                <div class="font-medium text-sm">Tu Empresa</div>
                <div class="text-xs opacity-90">en línea</div>
              </div>
            </div>

            <div class="bg-white p-4 rounded-b-lg min-h-[200px]">
              <div id="preview-content" class="text-gray-400 text-sm italic">
                La vista previa aparecerá aquí mientras escribes...
              </div>
            </div>
          </div>

          <!-- Info adicional -->
          <div class="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h4 class="font-medium text-blue-800 mb-2">
              <i class="fas fa-lightbulb mr-2"></i>
              Consejos para plantillas efectivas:
            </h4>
            <ul class="text-sm text-blue-700 space-y-1">
              <li>• Mantén los mensajes concisos y directos</li>
              <li>• Usa variables para personalizar contenido</li>
              <li>• Incluye llamadas a la acción claras</li>
              <li>• Organiza con hashtags por categoría</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Sección de plantillas guardadas -->
      <div
        class="mt-12 bg-white rounded-xl shadow-xl p-8 border border-gray-100"
      >
        <div
          class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8"
        >
          <div class="flex items-center gap-3">
            <div class="bg-purple-500 p-2 rounded-lg">
              <i class="fas fa-folder-open text-white"></i>
            </div>
            <h2 class="text-2xl font-semibold text-gray-800">
              Plantillas Guardadas
            </h2>
          </div>

          <!-- Filtros y búsqueda -->
          <div class="flex flex-col sm:flex-row gap-3">
            <div class="relative">
              <input
                type="text"
                placeholder="Buscar plantillas..."
                class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 w-full sm:w-64"
                id="search-templates"
              />
              <i class="fas fa-search absolute left-3 top-3 text-gray-400"></i>
            </div>
            <select
              class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              id="filter-hashtag"
            >
              <option value="">Todos los hashtags</option>
              <option value="bienvenida">#bienvenida</option>
              <option value="ventas">#ventas</option>
              <option value="soporte">#soporte</option>
            </select>
          </div>
        </div>

        <!-- Lista de plantillas -->
        <div id="templates-container" class="space-y-4">
          <!-- Plantilla de ejemplo 1 -->
          <div
            class="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-purple-300 transition duration-300 hover:shadow-md"
          >
            <div class="flex flex-col lg:flex-row lg:items-start gap-4">
              <div class="flex-1">
                <div class="flex items-start justify-between mb-3">
                  <div>
                    <h3 class="text-lg font-semibold text-gray-800 mb-1">
                      Mensaje de Bienvenida
                    </h3>
                    <div class="flex gap-2 mb-2">
                      <span
                        class="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full"
                        >#bienvenida</span
                      >
                      <span
                        class="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                        >#nuevos-clientes</span
                      >
                    </div>
                  </div>
                  <div class="text-xs text-gray-500">
                    <i class="fas fa-calendar mr-1"></i>
                    Creado hace 2 días
                  </div>
                </div>

                <div
                  class="bg-white p-4 rounded-lg border border-gray-200 mb-4"
                >
                  <p class="text-gray-700 text-sm leading-relaxed">
                    ¡Hola {nombre}! 👋<br /><br />
                    Bienvenido/a a {empresa}. Estamos emocionados de tenerte
                    como parte de nuestra comunidad.<br /><br />
                    Si tienes alguna pregunta, no dudes en contactarnos.
                    ¡Estamos aquí para ayudarte!<br /><br />
                    Saludos cordiales,<br />
                    El equipo de {empresa}
                  </p>
                </div>
              </div>

              <div class="flex flex-row lg:flex-col gap-2 lg:ml-4">
                <button
                  class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 flex items-center gap-2 text-sm"
                >
                  <i class="fas fa-copy"></i>
                  <span class="hidden sm:inline">Copiar</span>
                </button>
                <button
                  class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300 flex items-center gap-2 text-sm"
                >
                  <i class="fas fa-edit"></i>
                  <span class="hidden sm:inline">Editar</span>
                </button>
                <button
                  class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300 flex items-center gap-2 text-sm"
                >
                  <i class="fas fa-trash"></i>
                  <span class="hidden sm:inline">Eliminar</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Estado vacío -->
        <div id="empty-templates-state" class="text-center py-16 hidden">
          <i class="fas fa-folder-open text-6xl text-gray-300 mb-4"></i>
          <p class="text-gray-500 text-xl mb-2">No hay plantillas guardadas</p>
          <p class="text-gray-400">¡Crea tu primera plantilla para comenzar!</p>
        </div>
      </div>

      <!-- Estadísticas -->
      <div
        class="mt-8 bg-white rounded-xl shadow-xl p-6 border border-gray-100"
      >
        <h3
          class="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2"
        >
          <i class="fas fa-chart-bar text-indigo-500"></i>
          Estadísticas de Plantillas
        </h3>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div class="text-center p-4 bg-blue-50 rounded-lg">
            <i class="fas fa-file-alt text-2xl text-blue-600 mb-2"></i>
            <h4 class="text-sm font-medium text-gray-700">Total</h4>
            <p class="text-xl font-bold text-blue-600" id="total-templates">
              3
            </p>
          </div>
          <div class="text-center p-4 bg-green-50 rounded-lg">
            <i class="fas fa-tags text-2xl text-green-600 mb-2"></i>
            <h4 class="text-sm font-medium text-gray-700">Categorías</h4>
            <p class="text-xl font-bold text-green-600" id="total-categories">
              6
            </p>
          </div>
          <div class="text-center p-4 bg-purple-50 rounded-lg">
            <i class="fas fa-clock text-2xl text-purple-600 mb-2"></i>
            <h4 class="text-sm font-medium text-gray-700">Recientes</h4>
            <p class="text-xl font-bold text-purple-600" id="recent-templates">
              1
            </p>
          </div>
          <div class="text-center p-4 bg-orange-50 rounded-lg">
            <i class="fas fa-star text-2xl text-orange-600 mb-2"></i>
            <h4 class="text-sm font-medium text-gray-700">Más Usadas</h4>
            <p class="text-xl font-bold text-orange-600" id="most-used">2</p>
          </div>
        </div>
      </div>
    </div>

    <script src="./js/models/models.js"></script>
    <script src="./js/persistence.js"></script>
    <script src="./js/store.js"></script>
    <script src="./js/app.js"></script>
  </body>
</html>
```
=== EOF: index.html

===  js\store.js
```javascript
function createStore(initialStore = []) {
  // Vamos a crear el estado principal de mi Store
  let state = initialStore;
  // Observers => Funciones que se encargaran de los cambios
  const listeners = [];

  // Vamos a usar un metodo para mostrar el valor del state
  function getState() {
    return state;
  }

  // Esta funcion se va encargar de manipular el nuevo estado
  function setState(newState) {
    state = newState;
    // cuando el estado cambie vamos a llamar a las funciones que fueron suscritas
    // para eso se require iterar el arreglo listeners
    listeners.forEach(function (listener) {
      listener(state);
    });
  }

  function addTemplate(newTemplate) {
    // Insertar este nuevo elemento en el array state
    //  ... => Spread operator, que nos permite copiar el contenido de un array
    const newState = [...state, newTemplate];
    setState(newState);
  }

  function suscribe(listener) {
    listeners.push(listener);
    // aseguramos que no se suscriban 2 listener iguales
    return () => {
      // buscar el listener
      const index = listeners.indexOf(listener);
      // retorna la posicion (index)
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }

  return {
    getState,
    addTemplate,
    setState,
    suscribe,
  };
}

const templateStore = createStore(getPersistenceData());

// Para crear una variable de manera global en todos mis archivos
window.templateStore = templateStore;
```
=== EOF: js\store.js

===  js\persistence.js
```javascript
// Guardar template
function savePersistenceData(state, key = "templates") {
  localStorage.setItem(key, JSON.stringify(state));
}

function getPersistenceData(key = "templates") {
  const templates = localStorage.getItem(key);

  // if (templates === null) {
  //   return [];
  // } else {
  //   return JSON.parse(templates);
  // }
  return templates === null ? [] : JSON.parse(templates);
}

function deletePersistenceData() {
  localStorage.clear();
}
```
=== EOF: js\persistence.js

===  js\app.js
```javascript
let plantillas = [];

/*
   Quiero crear una instancia de Template

   new Template(titulo, mensaje, hasthag)
*/

/*
   1. Capturar los elementos con los querySelector
   2. Crear la instancia => new Template(tituloDOM, mensajeDOM, hasDOM)
   3. Lo inserto a mi arreglo plantillas.
*/

const btnSave = document.querySelector("#save-template-btn");

btnSave.addEventListener("click", function () {
  // 💚  Capturar los elements e insertarlos a mi arreglo
  const inputTitle = document.querySelector("#template-title").value.trim();
  const inputHashtag = document.querySelector("#template-hashtag").value.trim();
  const inputMessage = document.querySelector("#template-message").value.trim();

  const newTemplate = new Template(inputTitle, inputMessage, inputHashtag);
  window.templateStore.addTemplate(newTemplate);
  // eliminamos el llamado a esta funcion porque ahora es parte de nuestro listener
  //   renderizarUI();
});

function eliminarPlantilla(index) {
  plantillas = plantillas.filter((elmt, i) => i !== index);

  // Volver a renderizar
  renderizarUI();
}

function renderizarUI(state) {
  console.log("renderUI");
  // 💚 Renderizar el arreglo dentro de mi contenedor div
  const containerTemplate = document.querySelector("#templates-container");
  // Limpiar el contenedor
  containerTemplate.innerHTML = "";
  // Vamos a renderizarlo
  state.forEach((elmt, index) => {
    containerTemplate.innerHTML += `
         <div class="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-purple-300 transition duration-300 hover:shadow-md">
               <div class="flex flex-col lg:flex-row lg:items-start gap-4">
                  <div class="flex-1">
                        <div class="flex items-start justify-between mb-3">
                           <div>
                              <h3 class="text-lg font-semibold text-gray-800 mb-1">${elmt.titulo} - ${index}</h3>
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
                        <button onclick="eliminarPlantilla(${index})" class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300 flex items-center gap-2 text-sm">
                           <i class="fas fa-trash"></i>
                           <span class="hidden sm:inline">Eliminar</span>
                        </button>
                  </div>
               </div>
         </div>
      `;
  });
}

window.templateStore.suscribe(renderizarUI);
window.templateStore.suscribe(savePersistenceData);

renderizarUI(window.templateStore.getState());
```
=== EOF: js\app.js

===  js\models\models.js
```javascript
class Template {
  constructor(titulo, mensaje, hashtag) {
    this.titulo = titulo;
    this.mensaje = mensaje;
    this.hashtag = hashtag;
  }
}
```
=== EOF: js\models\models.js

