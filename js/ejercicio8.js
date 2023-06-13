function Fecha() {
    document.getElementsByTagName("span")[0].innerHTML = Date();
}

setInterval(Fecha, 1000);

// if (document.getElementsByTagName("span")[0].innerHTML != toString(Date())) {
//     document.getElementsByTagName("span")[0].innerHTML = Date();
// }