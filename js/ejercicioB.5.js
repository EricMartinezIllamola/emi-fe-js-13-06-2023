$("#miniatura1").click(cambiarImagen1);
$("#miniatura2").click(cambiarImagen2);
$("#miniatura3").click(cambiarImagen3);

function cambiarImagen1() {
    let big = $("#grande").css("backgroundImage");
    let small = $("#miniatura1").css("backgroundImage");
    $("#grande").css("backgroundImage", small);
    $("#miniatura1").css("backgroundImage", big);
}

function cambiarImagen2() {
    let big = $("#grande").css("backgroundImage");
    let small = $("#miniatura2").css("backgroundImage");
    $("#grande").css("backgroundImage", small);
    $("#miniatura2").css("backgroundImage", big);
}

function cambiarImagen3() {
    let big = $("#grande").css("backgroundImage");
    let small = $("#miniatura3").css("backgroundImage");
    $("#grande").css("backgroundImage", small);
    $("#miniatura3").css("backgroundImage", big);
}