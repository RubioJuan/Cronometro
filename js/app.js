let hr = min = sec = ms = "0" + 0, startTimer;

const startButon = document.querySelector(".start"),
    stopButon = document.querySelector(".stop"),
    resetButon = document.querySelector(".reset");

startButon.addEventListener("click",start);
stopButon.addEventListener("click", stop);
resetButon.addEventListener("click", reset);

// El addEventListener() método de la EventTargetinterfaz 
// configura una función que se llamará cada vez que el evento 
// especificado se entregue al objetivo.

// Funcion inicio, milisegundos, segundos, minutos y horas
function start() {
    startButon.classList.add("active");
    stopButon.classList.remove("stopActive");

    startTimer = setInterval(() => {
        ms++;
        ms = ms < 10 ? "0"  + ms : ms;

        if (ms === 100) {
            sec++;
            sec = sec < 10 ? "0" + sec : sec;
            ms = "0" + 0;
        }
        if (sec === 60) {
            min++;
            min = min < 10 ? "0" + min : min;
            sec = "0" + 0;
        }
        if (min === 60) {
            hr++;
            hr = hr < 10 ? "0" + hr : hr;
            min = "0" + 0;
        }

        putValue();

    },10);
}
// ms = ms < 10 ? "0" + ms : ms;: Verifica si el contador de milisegundos ms es menor que 10. 
// Si lo es, agrega un "0" delante de los milisegundos para mantener un formato consistente
//  (por ejemplo, cambia "9" a "09"). Si ms es mayor o igual a 10, simplemente deja ms sin cambios.

// -----------------------------------------------------------------------------------------------------------

// add(className): Agrega una clase CSS al elemento.
// remove(className): Elimina una clase CSS del elemento.
// toggle(className): Alterna la presencia de una clase CSS. Si la clase está presente, 
// la elimina; de lo contrario, la agrega.
// contains(className): Verifica si el elemento tiene una clase CSS específica.
// replace(oldClass, newClass): Reemplaza una clase CSS existente por otra.

function stop() {
    startButon.classList.remove("active");
    stopButon.classList.remove("stopActive");
    clearInterval(startTimer);
}

function reset() {
    startButon.classList.remove("active");

    // classList es una forma práctica de acceder a la lista de clases de un elemento
    // como una cadena de texto delimitada por espacios a través de element.className

    stopButon.classList.remove("stopActive");
    clearInterval(startTimer);

// clearInterval(startTimer);: Detiene el intervalo de tiempo que se había
// establecido previamente para actualizar el cronómetro

    hr = min = sec = ms = "0" + 0;
    putValue();
    // putValue(); Llama a la funcion para actualizar la visualización del cronómetro en la interfaz de usuario.
}


// Se e asigna a cada uno de los elementos en Js, porque es en donde se 
// le mostrara la parte de cada uno en el HTML
function putValue() {
    document.querySelector('.millisecond').innerHTML = ms;
    document.querySelector('.second').innerHTML = sec;
    document.querySelector('.minute').innerHTML = min;
    document.querySelector('.hour').innerHTML = hr;
}

