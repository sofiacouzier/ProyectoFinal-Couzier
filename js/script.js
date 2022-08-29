//Sign up:

class Jugador {
    constructor(nombre, email, contraseña) {
        this.nombre = nombre
        this.email = email
        this.contraseña = contraseña
    }
}

const Jugadores = []


const Signform = document.getElementById(`idForm`)

Signform.addEventListener(`submit`, (e) => {
    e.preventDefault()

    let nombre = document.getElementById(`idNombre`).value
    let email = document.getElementById(`idMail`).value
    let contraseña = document.getElementById(`idContraseña`).value

    const jugador = new Jugador(nombre, email, contraseña)
    Jugadores.push(jugador)

    localStorage.setItem(`Jugadores`, JSON.stringify(Jugadores))
    Signform.reset()
    Toastify({
        text: "jugador agregado!",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true, // La alerta no se elimina si le pongo el mouse arriba
        style: {
            background: "linear-gradient(to bottom left,#833ab4, #00a7a1)",
        },
        onClick: function () {
            console.log("Diste click")
        }
    }).showToast();
})

const formLog = document.getElementById('idFormLog')

formLog.addEventListener('submit', (e) => {
    e.preventDefault()
    let nombreLog = document.getElementById('idNombreLog').value
    let contraseñaLog = document.getElementById('idContraseñaLog').value

    let usuarioStorage = JSON.parse(localStorage.getItem(`Jugadores`))

    let usuario = usuarioStorage.find(Jugador => Jugador.nombre == nombreLog)
    let cont = usuarioStorage.find(Jugador => Jugador.contraseña == contraseñaLog)
    if (usuario == undefined || cont == undefined) {
        console.log('no')
        let incorrecto = document.getElementById('incorrecto')
        incorrecto.innerHTML = `
        <p class='text-danger m-4'> <i class="fa-solid fa-circle-xmark"></i>     usuario o contraseña incorrecta </p>
        `
    } else {
        Swal.fire({
            icon: 'success',
            title: `Bienvenido ${nombreLog}!`,
            showDenyButton: false,
            showCancelButton: false,
            confirmButton: '<a href="pages/juego.html"></a>',
            confirmButtonText: '<a href="pages/juego.html">Jugar!</a> ',

        })
    }
    formLog.reset()
})


// JUEGO:


// const pregunta = document.getElementById("pregunta")
// pregunta.innerHTML += `hola`
// async function mostrarPregunta() {
//     const preg = await fetch('../json/preguntas.json')
//     const pregParseadas = await preguntas.json()
//     pregParseadas.forEach((pregunta) => {
//         pregunta.innerHTML += `
//          <div>
//          <h1 class="pregunta"> ${pregunta.pregunta} </h1>
//          </div>`
//     })
// }
// mostrarPregunta()
