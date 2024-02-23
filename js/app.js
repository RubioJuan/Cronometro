let cronometro;
let tiempo = 0
let corriendo = false;

function iniciarCronometro() {
    if (corriendo){
        corriendo = true;
        cronometro.setInterval(actualizarTiempo, 1000);
    }
}
// // El setInterval llama a una función o ejecuta un fragmento de 
// código de forma reiterada, con un retardo de tiempo fijo 
// entre cada llamada.

function Pausa() {
    corriendo = false;
    clearInterval(cronometro);
}
// Cancela una acción reiterativa que se inició mediante una llamada a setInterval 

function reiterarCronometro() {
    Pausa();
    tiempo = 0;
    actualizarTiempo();
}


// function actualizarCronometro() {
//     tiempo++;
//     const horas = Math.floor(tiempo / 3600);
//     const minutos = Math.floor((tiempo % 3600) / 60);
//     const segundos = tiempo % 60;

//     const horasStr = horas < 10 ? "0" + horas : horas;
//     const minutosStr = minutos < 10 ? "0" + minutos : minutos;
//     const segundosStr = segundos < 10 ? "0" + segundos : segundos;

//     document.getElementById("cronometro").innerText = horasStr + ":" + minutosStr + ":" + segundosStr;
// }