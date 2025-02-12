// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombreDeAmigos = [];


//Función para agregar los nombres de los amigos al arreglo o array 
function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nombre = inputAmigo.value.trim();

    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }
    
    nombreDeAmigos.push(nombre);
    console.log(nombreDeAmigos);
    limpiarCampoDeEntrada();
    listaNombres(); 

    /*if (document.getElementById('amigo').value == '') {
        alert("Por favor, inserte un nombre.");
        return;
    }else {
        nombreDeAmigos.push(document.getElementById('amigo'));
        console.log(nombreDeAmigos);
        limpiarCampoDeEntrada();
    }*/
}

function listaNombres() {
    let liNombres = document.getElementById('listaAmigos');
    liNombres.innerHTML = ""; //`${liNombres}`

    for (let i = 0; i < nombreDeAmigos.length; i++) {
      const listaLi = document.createElement("li");
      listaLi.textContent = nombreDeAmigos[i];
      liNombres.appendChild(listaLi);
    }
}

function sortearAmigo() {
    let selectorGanador = document.getElementById('resultado');
    if (nombreDeAmigos.length === 0){
        alert('No hay amigos para sortear')
    } else {
        let amigoSorteado = nombreDeAmigos[Math.floor(Math.random()*nombreDeAmigos.length)];
        console.log(amigoSorteado)
        const liGanador = document.createElement("li");
        liGanador.textContent = amigoSorteado;
        selectorGanador.appendChild(liGanador);
    }

}

function limpiarCampoDeEntrada() {  
    document.getElementById('amigo').value = '';
}
sortearAmigo();
listaNombres();