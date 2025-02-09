let amigos = []; // Array para almacenar los nombres

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    let lista = document.getElementById("listaAmigos");

    let regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

    if (nombre === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    }

    if (!regexNombre.test(nombre)) {
        alert("El nombre solo puede contener letras y espacios.");
        return;
    }

    if (amigos.includes(nombre.toLowerCase())) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    // Agregar nombre a la lista y al array
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

    // Mostrar el nombre sorteado
    document.getElementById("resultado").textContent = " Amigo sorteado es: " + nombreSorteado.charAt(0).toUpperCase() + nombreSorteado.slice(1);

    // Limpiar la lista en pantalla
    document.getElementById("listaAmigos").innerHTML = "";

    // Vaciar el array de amigos
    amigos = [];

    
}

   