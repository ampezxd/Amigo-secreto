// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombreDeAmigos = [];

function agregarAmigo() {
    if (document.getElementById('amigo').value == '') {
        alert("Por favor, inserte un nombre.");
        return;
    }else {
        nombreDeAmigos.push(document.getElementById('amigo'));
        console.log(nombreDeAmigos);
        limpiarCampoDeEntrada();
    }
}


botonAñadir


function limpiarCampoDeEntrada() {
    document.getElementById('amigo').value = '';
}