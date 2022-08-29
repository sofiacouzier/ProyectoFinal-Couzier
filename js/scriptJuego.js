

const preg = document.getElementById('pregunta')




let numero = 0
let contador = 0

async function mostrarPregunta() {
    const preguntas = await fetch('../json/preguntas.json')
    const pregParseadas = await preguntas.json()
    const aver = pregParseadas.filter((p) => p.indice === numero)

    aver.forEach(pre => {
        preg.innerHTML = `
    <div class="divJ" id="divJ">
    <h1 class="pregPrin"> ${pre.pregunta}</h1>
    <div>
    <button type="button" id="apretar" class="boton btn btn-outline-primary">${pre.respuestas.opcion1.text}</button>
    <button type="button" id="apretar1" class="boton btn btn-outline-primary"> ${pre.respuestas.opcion2.text}</button>
    <button type="button" id="apretar2" class="boton btn btn-outline-primary">${pre.respuestas.opcion3.text}</button>
    <button type="button" id="apretar3" class="boton btn btn-outline-primary">${pre.respuestas.opcion4.text}</button>
    </div>
    </div>
    `
        function cambiarPregunta() {
            contador = contador + 1
            numero = numero + 1
            if (numero < 21) {

                Swal.fire({
                    title: 'Respuesta correcta!',
                    text: `Contestaste correctamente ${contador}/20`,
                    icon: 'success',
                    showCancelButton: false,
                    confirmButtonText: 'continua'
                })
                mostrarPregunta()
            } else {
                location.href = "../pages/final.html"
            }

        }
        const apretar = document.getElementById("apretar")
        apretar.addEventListener('click', (e) => {
            e.preventDefault()


            if (pre.respuestas.opcion1.correct) {
                cambiarPregunta()
            }
            else {
                numero = 0
                Swal.fire({
                    icon: 'error',
                    title: 'Respuesta incorrecta!',
                    text: `Llegaste a contestar correctamente ${contador}/20. Intenta de nuevo!`,
                    confirmButton: mostrarPregunta(),

                    confirmButtonText: 'volver a empezar',

                }).then(contador = 0)
            }
        })
        const apretar1 = document.getElementById("apretar1")
        apretar1.addEventListener('click', (e) => {
            e.preventDefault()
            if (pre.respuestas.opcion2.correct) {
                cambiarPregunta()

            } else {
                numero = 0
                Swal.fire({
                    icon: 'error',
                    title: 'Respuesta incorrecta!',
                    text: `Llegaste a contestar correctamente ${contador}/20. Intenta de nuevo!`,
                    confirmButton: mostrarPregunta(),

                    confirmButtonText: 'volver a empezar',

                }).then(contador = 0)
            }

        })
        const apretar2 = document.getElementById("apretar2")
        apretar2.addEventListener('click', (e) => {
            e.preventDefault()

            if (pre.respuestas.opcion3.correct) {
                cambiarPregunta()

            } else {
                numero = 0
                Swal.fire({
                    icon: 'error',
                    title: 'Respuesta incorrecta!',
                    text: `Llegaste a contestar correctamente ${contador}/20. Intenta de nuevo!`,
                    confirmButton: mostrarPregunta(),
                    confirmButtonText: 'volver a empezar',
                }).then(contador = 0)
            }


        })
        const apretar3 = document.getElementById("apretar3")
        apretar3.addEventListener('click', (e) => {
            e.preventDefault()

            if (pre.respuestas.opcion4.correct) {
                cambiarPregunta()

            } else {
                numero = 0
                Swal.fire({
                    icon: 'error',
                    title: 'Respuesta incorrecta!',
                    text: `Llegaste a contestar correctamente ${contador}/20. Intenta de nuevo!`,
                    confirmButton: mostrarPregunta(),

                    confirmButtonText: 'volver a empezar',

                }).then(contador = 0)
            }
        })
    })
}

mostrarPregunta()