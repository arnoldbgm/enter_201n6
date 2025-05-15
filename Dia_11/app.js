// Importaciones
import { renderizarUI } from "./utils/utils.js";

// Capturar a los nodos que usaremos
let inputTarea = document.querySelector("#todo-input")
let btnAddTarea = document.querySelector("#add-todo-btn")
let todoList = document.querySelector("#todo-list")

// Creacion de mi arreglo de tareas
let tareas = [];

btnAddTarea.addEventListener("click", function(){
   let text = inputTarea.value
   let objeto = {
      descripcion: text,
      estado: "Pendiente"
   }
   tareas.push(objeto)
   renderizarUI(tareas, todoList)
   inputTarea.value = "";
})