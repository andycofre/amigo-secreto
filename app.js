let amigos = []; 

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    let lista = document.getElementById("listaAmigos");

    let regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

    if (nombre === "") {
        alert("Por favor, ingresa un nombre");
        return;
    }

    if (!regexNombre.test(nombre)) {
        alert("El nombre solo puede contener letras y espacios");
        return;
    }

    if (amigos.includes(nombre.toLowerCase())) {
        alert("Este nombre ya está en la lista");
        return;
    }

    // Agrega nombre a la lista y al array
    amigos.push(nombre.toLowerCase());
    let nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nombre;
    lista.appendChild(nuevoElemento);

    input.value = "";
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let nombreSorteado = amigos[indiceAleatorio];

    // Muestra el nombre sorteado
    document.getElementById("resultado").textContent = " El Amigo Secreto Sorteado es: " + nombreSorteado.charAt(0).toUpperCase() + nombreSorteado.slice(1);

    // Limpia la lista en pantalla
    document.getElementById("listaAmigos").innerHTML = "";

    // Vacia el array de amigos
    amigos = [];

    
}

   
