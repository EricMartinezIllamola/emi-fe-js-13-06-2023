document.getElementsByTagName("button")[0].addEventListener("click", agregarElemento);
let turno = 1;

let lista = document.createElement("ul");
document.body.appendChild(lista);

function agregarElemento() {
    let li = document.createElement("li");
    lista.appendChild(li);
    li.textContent = turno;
    turno = turno + 1;
}