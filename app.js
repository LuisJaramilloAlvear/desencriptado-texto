// Obtener referencias a los elementos del DOM
const botonEncriptar = document.getElementById('boton-encriptar');
const botonDesencriptar = document.getElementById('boton-desencriptar');
const textoEntrada = document.getElementById('texto-entrada');
const mensajeNoEncontrado = document.querySelector('.mensaje-no-encontrado');
const botonCopiar = document.getElementById('boton-copiar');
const botonLimpiar = document.getElementById('boton-limpiar');
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

// Evento para el botón de limpiar
botonLimpiar.addEventListener('click', function() {
    textoEntrada.value = ''; // Limpiar el cuadro de entrada de texto
    mensajeNoEncontrado.textContent = 'Ningún mensaje fue encontrado'; // Restaurar el mensaje original
    imagen.classList.remove('oculto'); // Mostrar la imagen nuevamente (si es necesario)
    mensajeNoEncontrado.classList.remove('oculto'); // Mostrar el mensaje nuevamente
    const mensajeIngreso = document.querySelector('.ingresar-mensaje');
    mensajeIngreso.classList.remove('oculto'); // Mostrar el mensaje de ingreso nuevamente
    window.scrollTo(0, 0); // Volver la página al principio
});

// Función para encriptar el texto
function encriptar(texto) {
    return texto.replace(/e/g, "enter")
                .replace(/i/g, "imes")
                .replace(/a/g, "ai")
                .replace(/o/g, "ober")
                .replace(/u/g, "ufat");
}

// Función para desencriptar el texto
function desencriptar(texto) {
    return texto.replace(/enter/g, "e")
                .replace(/imes/g, "i")
                .replace(/ai/g, "a")
                .replace(/ober/g, "o")
                .replace(/ufat/g, "u");
}

// Función para mostrar el mensaje encriptado/desencriptado
function mostrarMensaje(mensaje) {
    mensajeNoEncontrado.textContent = mensaje; // Actualizar el contenido del elemento con el mensaje
    imagen.classList.add('oculto'); // Ocultar la imagen
    
    // Ocultar el mensaje de ingreso
    const mensajeIngreso = document.querySelector('.ingresar-mensaje');
    mensajeIngreso.classList.add('oculto');
}

function copiarTextoAMensaje() {
    const texto = mensajeNoEncontrado.textContent; // Obtener el texto del elemento mensajeNoEncontrado
    
    // Crear un elemento de texto temporal
    const textArea = document.createElement('textarea');
    textArea.value = texto;
    
    // Añadir el área de texto al cuerpo del documento
    document.body.appendChild(textArea);
    
    // Seleccionar el contenido del área de texto
    textArea.select();
    
    // Copiar el texto al portapapeles usando la API moderna
    navigator.clipboard.writeText(textArea.value).then(() => {
        // Mantener el texto seleccionado (opcional)
        textoEntrada.focus();
        textoEntrada.value = texto;
        textoEntrada.select();
    }).catch(err => {
        console.error('Error al copiar texto: ', err);
    });
    
    // Remover el área de texto temporal
    document.body.removeChild(textArea);
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
