function validaApellido() {
    validacion = document.getElementById("txtApellido")
    letras = validacion.value;
    parent = validacion.parentElement;
    texto = document.createElement('DIV');
    texto.setAttribute("id", "Apellido")
    texto.innerHTML = '<span> Falta apellido </span>';
    if (letras == null || letras == "" || /^[0-9]+$/.test(letras)) {
        validacion.setAttribute("class", "error")
        if (document.getElementById("Apellido") === null) {
            parent.appendChild(texto)
        }

    } else {
        element = document.getElementById("Apellido")
        if (element !== null) {
            parent.removeChild(element)
        }
        validacion.setAttribute("class", "texto")
    }
}

function validaNombre() {
    validacion = document.getElementById("txtNombre")
    letras = validacion.value;
    parent = validacion.parentElement;
    texto = document.createElement('DIV');
    texto.setAttribute("id", "Nombre")
    texto.innerHTML = '<span> Falta nombre </span>';
    if (letras == null || letras == "" || /^[0-9]+$/.test(letras)) {
        validacion.setAttribute("class", "error")

        if (document.getElementById("Nombre") === null) {
            parent.appendChild(texto)
        }
    } else {
        element = document.getElementById("Nombre")
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

}

function precioEquipo() {
    selectEquipos = document.getElementById('cboEquipos')
    selectUbicacion = document.getElementById('cboUbicacion')
    inputPrecio = document.getElementById('precio')
    inputCantidadEntradas = document.getElementById('cantidad')

    equipo = selectEquipos.value;
    valorUbicacion = selectUbicacion.value;
    precio = 0;
    multiplicUbicacion = 1;

    if (equipo == "1") {
        precio = 200
    }
    if (equipo == "2") {
        precio = 150
    }
    if (equipo == "3") {
        precio = 170
    }

    if (valorUbicacion == "Platea") {
        multiplicUbicacion = 5;
    }

    inputPrecio.value = precio * inputCantidadEntradas.value * multiplicUbicacion;
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
function validaciones_genericas(){
    inputtexto = document.getElementById('txtApellido')
    inputtexto2 = document.getElementById('txtNombre')
    inputCantidad= document.getElementById('cantidad')
    radioMaster = document.getElementById('master');
    radioVisa = document.getElementById('visa');
    radioAmex = document.getElementById('amex');
    valortexto1 = inputtexto.value;
    valortexto2 = inputtexto2.value;
    if (!(/[A-Za-z]+$/.test(valortexto1))){
        alert("Escriba solo texto para el campo apellido")
        return false;
    }
    if (!(/[A-Za-z]+$/.test(valortexto2))){
        alert("Escriba solo texto para el campo nombre")
        return false;
    }
    if (!inputtexto.checkValidity()){
        alert("Escriba solo 25 caracteres campo apellido")
        return false;
    }
    if (!inputtexto2.checkValidity()){
        alert("Escriba solo 25 caracteres campo nombre")
        return false;
    }
    if (!inputCantidad.validity){
        alert("Escriba solo 25 caracteres ")
        return false;
    }
    if (!(radioMaster.checked || radioAmex.checked || radioVisa.checked)){
        alert("Debe seleccionar una tarjeta");
        return false;
    }
    return true;
}