/*
PATRON STORE
Vamos a crear una function encargada de manipular las plantillas
   - Vamos a poder insertar elmentos
   - Vamos a poder ver el elemento
   - Vamos a poder remplazar
*/
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
   function setState(newState){
      state = newState;
   }

   function addTemplate(newTemplate) {
      // Insertar este nuevo elemento en el array state
      const newState = [...state, newTemplate]
      setState(newState)
   }

   return {
      getState,
      addTemplate,
      setState
   }
}


const templateStore = createStore();

// Para crear una variable de manera global en todos mis archivos
window.templateStore = templateStore;