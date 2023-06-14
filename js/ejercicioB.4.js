let NombreError = EmailError = true;

document.getElementById("nombre").addEventListener("keyup", validarNombre);
document.getElementById("email").addEventListener("keyup", validarEmail);

function mostrarError(id, mensaje) {
    document.getElementById(id).innerHTML=mensaje;
}

function validarNombre() {
    let nombre = document.formulario.nombre.value;
    if (nombre === "") {
        mostrarError("errorNombre", "ERROR: Campo vacio")
    }
    else {
        mostrarError("errorNombre", "")
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(nombre) === false) {
            mostrarError("errorNombre", "ERROR: Formato no valido")
        }
        else {
            mostrarError("errorNombre", "");
            NombreError = false;
        }
    }
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
            EmailError = false;
        }
    }
}

function validation() {
    if (!NombreError && !EmailError) {
        return true;
    }
    else {
        validarNombre();
        validarEmail();
        return false;
    }
}