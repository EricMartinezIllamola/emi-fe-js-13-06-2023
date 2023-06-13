document.getElementsByTagName("button")[0].addEventListener("click", alert);

function alert() {
    let texto = document.getElementsByTagName("p")[0].innerHTML;
    console.log(texto);
}