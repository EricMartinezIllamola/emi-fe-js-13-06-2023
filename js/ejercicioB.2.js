color = prompt("Introduzca el color de fondo de los parrafos:");

function colorParrafos(color) {
    let parrafos = document.getElementsByTagName("p");
    for (let index = 0; index < parrafos.length; index++) {
        const element = parrafos[index];
        element.style.background = color;
    }
}


// document.getElementsByTagName("p").forEach(
//     function (indice, elemento) {
//         (elemento) => colorParrafos(elemento, indice);
//     })

// function colorParrafos(color) {
//     document.getElementsByTagName("p")[indice].style.background = color;
// }
