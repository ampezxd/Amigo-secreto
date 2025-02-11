// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombreDeAmigos = [];


//Función para agregar los nombres de los amigos al arreglo o array 
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

function listaNombres() {
    let liNombres = document.getElementById('nombreAmigos');
    liNombres.innerHTML = ""; //`${liNombres}`

    for (let i = 0; i < nombreDeAmigos.length; i++){
        console.log(nombreDeAmigos[i]);
    }
}


function limpiarCampoDeEntrada() {
    document.getElementById('amigo').value = '';
}

listaNombres()