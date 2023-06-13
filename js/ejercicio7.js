let NombreError = ApellidosError = EmailError = true;

function mostrarError(id, mensaje) {
    document.getElementById(id).innerHTML = mensaje;
}

function validarNombre() {
    let nombre = document.formulario.nombre.value;
    if (nombre === "") {
        mostrarError("errorNombre", "ERROR: Campo vacio")
    } else {
        NombreError = false;
        mostrarError("errorNombre", "");
    }
}

function validarApellidos() {
    let nombre = document.formulario.apellidos.value;
    if (nombre === "") {
        mostrarError("errorApellidos", "ERROR: Campo vacio")
    } else {
        NombreApellidos = false;
        mostrarError("errorApellidos", "");
    }
}

function validarEmail() {
    let nombre = document.formulario.email.value;
    if (nombre === "") {
        mostrarError("errorEmail", "ERROR: Campo vacio")
    } else {
        NombreError = false;
        mostrarError("errorEmail", "");
    }
}

function validation() {
    if (!NombreError && !EmailError && !ApellidosError) {
        return true;
    }
    else {
        validarNombre();
        validarApellidos();
        validarEmail();
        return false;
    }
}