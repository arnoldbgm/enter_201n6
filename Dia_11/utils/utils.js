export function renderizarUI(tareas, todoList){
   // 1. Limpieza
   todoList.innerHTML = ""
   // 2. Recorrido del Arreglo
   tareas.forEach((elemt)=> {
      todoList.innerHTML += `     
            <div
               class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 transition duration-300">
               <input type="checkbox" class="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500">
               <span class="flex-1 text-gray-700">${elemt.descripcion}</span>
               <div class="flex gap-2">
                  <button class="text-blue-500 hover:text-blue-700 transition duration-300" title="Editar tarea">
                     <i class="fas fa-pencil-alt"></i>
                  </button>
                  <button class="text-red-500 hover:text-red-700 transition duration-300" title="Eliminar tarea">
                     <i class="fas fa-trash"></i>
                  </button>
               </div>
            </div>
      `
   })
}