$("#miniatura1").click(cambiarImagen1);
// $("#miniatura2").click(cambiarImagen2);
// $("#miniatura3").click(cambiarImagen3);

// function cambiarImagen1() {
//     let temporal = $("#grande").style.background();
//     $("#grande").style.background() = $("#miniatura").style.background();
//     $("#miniatura1").style.background() = temporal;
// }

function cambiarImagen1() {
    let grande = $("#grande").css("backgroundImage");
    console.log(grande);
    let miniatura = $("#miniatura1").css("background-image");
}