document.getElementById("email").addEventListener("keyup", validarEmail);

function mostrarError(id, mensaje) {
    document.getElementById(id).innerHTML=mensaje;
}

function validarEmail() {
    let email = document.formulario.email.value;
    if (email === "") {
        mostrarError("errorEmail", "ERROR: Campo vacio")
    }
    else {
        mostrarError("errorEmail", "")
        var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (regex.test(email) === false) {
            mostrarError("errorEmail", "ERROR: Formato no valido")
        }
        else {
            mostrarError("errorEmail", "");
        }
    }
}