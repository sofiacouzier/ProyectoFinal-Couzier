

const preg = document.getElementById('pregunta')


function cambiarPregunta() {
    let acumulador
}

let numero = 0

async function mostrarPregunta() {
    const preguntas = await fetch('../json/preguntas.json')
    const pregParseadas = await preguntas.json()



    const aver = pregParseadas.filter((p) => p.indice === numero)
    console.log(aver)


    // const hola = pregParseadas.slice(numero, 3)
    // console.log(aver)
    aver.forEach(pre => {
        preg.innerHTML = `
    <div class="divJ" id="divJ">
    <h1 class="pregPrin"> ${pre.pregunta}</h1>
    <div>
    <button class="boton" id="apretar"> ${pre.respuestas.opcion1.text}</button>
    <button class="boton" id="apretar1"> ${pre.respuestas.opcion2.text}</button>
    <button class="boton" id="apretar2"> ${pre.respuestas.opcion3.text}</button>
    <button class="boton" id="apretar3"> ${pre.respuestas.opcion4.text}</button>
    </div>
    </div>
    `

        const apretar = document.getElementById("apretar")
        apretar.addEventListener('click', (e) => {
            e.preventDefault()
            if (pre.respuestas.opcion1.correct) {
                Swal.fire({
                    icon: 'success',
                    title: 'yey',
                    text: 'continua!',

                })
                console.log('aver')
                numero = numero + 1
                console.log(numero)
                mostrarPregunta()

            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'respuesta incorrecta!',

                })
            }
        })
        const apretar1 = document.getElementById("apretar1")
        apretar1.addEventListener('click', (e) => {
            e.preventDefault()
            if (pre.respuestas.opcion2.correct) {
                Swal.fire({
                    icon: 'success',
                    title: 'yey',
                    text: 'continua!',

                })
                console.log('aver')
                numero = numero + 1
                console.log(numero)
                mostrarPregunta()

            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'respuesta incorrecta!',

                })
            }
        })
        const apretar2 = document.getElementById("apretar2")
        apretar2.addEventListener('click', (e) => {
            e.preventDefault()
            if (pre.respuestas.opcion3.correct) {
                Swal.fire({
                    icon: 'success',
                    title: 'yey',
                    text: 'continua!',

                })
                console.log('aver')
                numero = numero + 1
                console.log(numero)
                mostrarPregunta()

            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'respuesta incorrecta!',

                })
            }
        })
        const apretar3 = document.getElementById("apretar3")
        apretar3.addEventListener('click', (e) => {
            e.preventDefault()
            if (pre.respuestas.opcion4.correct) {
                Swal.fire({
                    icon: 'success',
                    title: 'yey',
                    text: 'continua!',

                })
                console.log('aver')
                numero = numero + 1
                console.log(numero)

                mostrarPregunta()
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'respuesta incorrecta!',

                })
            }
        })
    })
}

mostrarPregunta()