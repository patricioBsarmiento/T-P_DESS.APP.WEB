function validaApellido() {
    validacion = document.getElementById("apellido")
    letras = validacion.value;
    parent = validacion.parentElement;
    texto = document.createElement('DIV');
    texto.setAttribute("id", "txtApellido")
    texto.innerHTML = '<span> Falta apellido </span>';
    if (letras == null || letras == "" || /^[0-9]+$/.test(letras)) {
        validacion.setAttribute("class", "error")
        if (document.getElementById("txtApellido") === null) {
            parent.appendChild(texto)
        }

    } else {
        element = document.getElementById("txtApellido")
        if (element !== null) {
            parent.removeChild(element)
        }
        validacion.setAttribute("class", "texto")
    }
}

function validaNombre() {
    validacion = document.getElementById("nombre")
    letras = validacion.value;
    parent = validacion.parentElement;
    texto = document.createElement('DIV');
    texto.setAttribute("id", "txtNombre")
    texto.innerHTML = '<span> Falta nombre </span>';
    if (letras == null || letras == "" || /^[0-9]+$/.test(letras)) {
        validacion.setAttribute("class", "error")

        if (document.getElementById("txtNombre") === null) {
            parent.appendChild(texto)
        }
    } else {
        element = document.getElementById("txtNombre")
        if (element !== null) {
            parent.removeChild(element)
        }
        validacion.setAttribute("class", "texto")
    }
}

function tecla(id) {
    validacion = document.getElementById(id)
    validacion.setAttribute("class", "onkeydown")
}

function validaEmail() {
    email = document.getElementById("email")
    emailConf = document.getElementById("email_conf")
    valorEmail = email.value;
    valorEmailConf = emailConf.value;
    parent = email.parentElement;
    texto = document.createElement('DIV');
    texto.setAttribute("id", "txtEmail")
    texto.innerHTML = '<span> Los correos electrónicos no son iguales </span>';
    if (valorEmail !== valorEmailConf) {
        email.setAttribute("class", "error")
        emailConf.setAttribute("class", "error")

        if (document.getElementById("txtEmail") === null) {
            parent.appendChild(texto)
        }
    } else {
        element = document.getElementById("txtEmail")
        if (element !== null) {
            parent.removeChild(element)
        }
        email.setAttribute("class", "texto")
        emailConf.setAttribute("class", "texto")
    }
    emailValido = document.createElement('DIV');
    emailValido.setAttribute("id", "txtemailValido")
    emailValido.innerHTML = '<span> El correo no es válido, verifique que tenga @ y finalice en .com </span>';
    if (!email.checkValidity() || !(/\.[a-z]{3}$/.test(valorEmail))) {
        email.setAttribute("class", "error")

        if (document.getElementById("txtemailValido") === null) {
            parent.appendChild(emailValido)
        }
    } else {
        element = document.getElementById("txtemailValido")
        if (element !== null) {
            parent.removeChild(element)
        }
        email.setAttribute("class", "texto")
    }
}



function mouse(id) {
    validacion = document.getElementById(id)
    validacion.setAttribute("class", "onmouseover")
}

function confirmacion() {

    validacion = document.getElementById("numero1");
    validacion2 = document.getElementById("numero2");
    letras = validacion.value;
    letras2 = validacion2.value;
    if (letras == null || letras == "" || /^[0-9]+$/.test(letras)) {
        validacion.setAttribute("class", "error")
        alert("Escriba apellido correctamente")

    }
    if (letras2 == null || letras2 == "" || /^[0-9]+$/.test(letras2)) {
        validacion2.setAttribute("class", "error")
        alert("Escriba nombre correctamente")
    }
    validacion3 = document.getElementById("numero3")
    letras3 = validacion3.value
    if (/[A-Za-z]+$/.test(letras3)) {
        validacion3.setAttribute("class", "error")
        alert("Escriba en numero el DNI")
    }
    validacion4 = document.getElementById("numero4")
    letras3 = validacion4.value
    if (letras3 != null || letras3 != "f" || letras3 != "m" || letras3 == "") {
        validacion4.setAttribute("class", "error")
        alert("Escriba f o m")
    }

}

function precioEquipo() {
    selectEquipos = document.getElementById('equipos')
    selectUbicacion = document.getElementById('idUbicacion')
    inputPrecio = document.getElementById('precio')
    inputCantidadEntradas = document.getElementById('cantidad')

    equipo = selectEquipos.value;
    valorUbicacion = selectUbicacion.value;
    precio = 0;
    multiplicUbicacion = 1;

    if (equipo == "barcelona") {
        precio = 200
    }
    if (equipo == "madrid") {
        precio = 150
    }
    if (equipo == "coruña") {
        precio = 170
    }

    if (valorUbicacion == "platea") {
        multiplicUbicacion = 5;
    }

    inputPrecio.value = precio * parseInt(inputCantidadEntradas.value) * multiplicUbicacion;
}

function cuotas(tarjeta) {
    if (tarjeta == "master") {
        alert('6 cuotas s/ interés')
    }
    if (tarjeta == "visa") {
        alert("3 cuotas sin interés")
    }
    if (tarjeta == "amex") {
        alert("12 cuotas sin interés")
    }
}