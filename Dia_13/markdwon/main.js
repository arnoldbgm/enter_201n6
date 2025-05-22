const textMarkdown = "Titulo 1 h1";

// Para convertir markdown a html de una forma sencilla
// Usamos el cdn de marked
const textoConvertido = marked.parse(textMarkdown)


/*
   HU 1.
   1. Capturar el valor del input
   2. Agrego un evento (input)
   3. Asociar una funcion donde se convierte el valor del
   input a html
      3.1 Conversion del valor del input a HTML
      3.2 Renderizado del HTML dentro de vista previa

*/

const markdownInput = document.querySelector("#markdown-input")
const markdownPreview = document.querySelector("#markdown-preview")

markdownInput.addEventListener("input", renderizarHtml)

function renderizarHtml(event) {
   let markdownText = markdownInput.value;
   let htmlText = marked.parse(markdownText)
   markdownPreview.innerHTML = ""
   markdownPreview.innerHTML = htmlText
}