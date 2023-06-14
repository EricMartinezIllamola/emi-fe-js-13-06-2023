let boton = document.getElementsByTagName("button")[0];
let parrafo = document.getElementsByTagName("p")[0];
let selector = document.getElementById("selector");

boton.addEventListener("click", mostrar);

function mostrar() {
    let value = selector.value;
    let text = selector.options[selector.selectedIndex].text;
    parrafo.innerHTML = text;
}