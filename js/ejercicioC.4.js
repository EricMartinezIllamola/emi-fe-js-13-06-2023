$("#container").append("<form></form>");
$("form").append("<lable>Texto: </lable><input></input>");
$("form").append("<button>Enviar</button>");
$("#container").append("<ul></ul>");

$("button").click(() => $("ul").append($("<li></li>").text($("input")[0].value)));

// $("button").click(() => {
//     let li = document.createElement("li");
//     $("ul")[0].appendChild(li);
//     li.textContent = $("input")[0].value;
// });

// $("#container").append("<form></form>");
// $("form").append("<lable>Texto: </lable><input></input>");
// $("form").append("<button>Enviar</button>");
// let lista = document.createElement("ul");
// let container = $("#container")[0];
// container.appendChild(lista);


// $("button").click(() => {
//     let li = document.createElement("li");
//     lista.appendChild(li);
//     li.textContent = $("input")[0].value;
// })
