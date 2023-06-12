const names = document.getElementById("nombre")
const lastName = document.getElementById("apellido")
const mail = document.getElementById("correo")
const phone = document.getElementById("telefono")
const note = document.getElementById("nota")
//
const boton = document.getElementById("boton")
const mensajePopUp = document.getElementById("mensajePopUp")
const modalCard = document.getElementById("modal-card")

boton.addEventListener("click", evaluar)



function nuevoUsuario(nombre, apellido, correo, telefono) {
    usuario = {
        'nombre': `${nombre}`,
        'apellido': `${apellido}`,
        'correo': `${correo}`,
        'telefono': `${telefono}`
    }
    return usuario
}

function usuarioCompleto(nombre, apellido, correo, telefono, nota) {
    userFull = [
        `${nombre}`,
        `${apellido}`,
        `${correo}`,
        `${telefono}`,
        `${nota}`
    ]
    return console.log(`Los datos completos del usuario son ${userFull}`);
}

function mensaje(nombre, apellido, telefono, correo ) {
    mensajePopUp.innerHTML = `
    <h5>Contacto Guardado</h5>
    <p>Nombre: ${nombre} ${apellido} Correo: ${correo} Teléfono: ${telefono}</p>
    <button type="button" class="btn d-inline-flex">Llamar</button>
    <button type="button" class="btn d-inline-flex">Enviar Correo</button>
    `
}
3


function evaluar() {
(names.value != '' && lastName.value != '' && mail.value != '' && phone.value != '' && note.value != '') ? recopilar() : alert('Rellena todos los campos')
}

function recopilar() {
    modalCard.setAttribute('class', 'position-fixed z-3 bg-white')
    nuevoUsuario(names.value, lastName.value, mail.value, phone.value)
    const { nombre, apellido, telefono, correo } = usuario;
    mensaje(nombre, apellido, telefono, correo)
    let registrado = [names.value, lastName.value, mail.value, phone.value, note.value]
    usuarioCompleto(...registrado)
}



