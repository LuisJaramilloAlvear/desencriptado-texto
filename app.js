// Obtener referencias a los elementos del DOM
const botonEncriptar = document.getElementById('boton-encriptar');
const botonDesencriptar = document.getElementById('boton-desencriptar');
const textoEntrada = document.getElementById('texto-entrada');
const mensajeNoEncontrado = document.querySelector('.mensaje-no-encontrado');
const botonCopiar = document.getElementById('boton-copiar');
const imagen = document.getElementById('imagen'); // Referencia a la imagen

// Evento para el botón de encriptar
botonEncriptar.addEventListener('click', function() {
    const texto = textoEntrada.value; // Obtener el texto del cuadro de entrada
    const textoEncriptado = encriptar(texto); // Encriptar el texto
    mostrarMensaje(textoEncriptado); // Mostrar el texto encriptado
});

// Evento para el botón de desencriptar
botonDesencriptar.addEventListener('click', function() {
    const texto = textoEntrada.value; // Obtener el texto del cuadro de entrada
    const textoDesencriptado = desencriptar(texto); // Desencriptar el texto
    mostrarMensaje(textoDesencriptado); // Mostrar el texto desencriptado
});

// Evento para el botón de copiar
botonCopiar.addEventListener('click', function() {
    copiarTextoAMensaje(); // Copiar el texto encriptado/desencriptado al cuadro de entrada
});

// Función para encriptar el texto
function encriptar(texto) {
    // Lógica de encriptación, por ejemplo, ROT13
    return texto.replace(/[a-z]/g, c => String.fromCharCode((c.charCodeAt(0) - 97 + 13) % 26 + 97));
}

// Función para desencriptar el texto
function desencriptar(texto) {
    // Lógica de desencriptación, por ejemplo, ROT13
    return texto.replace(/[a-z]/g, c => String.fromCharCode((c.charCodeAt(0) - 97 + 13) % 26 + 97));
}

// Función para mostrar el mensaje encriptado/desencriptado
function mostrarMensaje(mensaje) {
    mensajeNoEncontrado.textContent = mensaje; // Actualizar el contenido del elemento con el mensaje
    imagen.classList.add('oculto'); // Ocultar la imagen
}

// Función para copiar el texto al cuadro de entrada
function copiarTextoAMensaje() {
    const texto = mensajeNoEncontrado.textContent; // Obtener el texto del elemento mensajeNoEncontrado
    textoEntrada.value = texto; // Colocar el texto en el cuadro de entrada
}

// Ocultar el texto del placeholder cuando el usuario comienza a escribir
textoEntrada.addEventListener('focus', function() {
    textoEntrada.placeholder = ''; // Vaciar el placeholder cuando el cuadro de texto recibe el foco
});

// Restaurar el placeholder si el cuadro de texto está vacío cuando pierde el foco
textoEntrada.addEventListener('blur', function() {
    if (textoEntrada.value === '') { // Verificar si el cuadro de texto está vacío
        textoEntrada.placeholder = 'Ingrese el texto aquí'; // Restaurar el placeholder
    }
});
