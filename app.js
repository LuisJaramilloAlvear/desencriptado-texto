// Selección de elementos del DOM
const cuadroTexto = document.getElementById('Ctext');
const encriptarBtn = document.querySelector('.botones button:nth-child(1)');
const desencriptarBtn = document.querySelector('.botones button:nth-child(2)');
const limpiarBtn = document.querySelector('.botones button:nth-child(3)');
const copiarBtn = document.querySelector('.botonCopiar');
const nmensaje = document.querySelector('.nmensaje');
const encripTexto = document.querySelector('.encripTexto');

// Ocultar el botón copiar al cargar la página
copiarBtn.style.display = 'none';

// Función para encriptar texto
function encriptarTexto(texto) {
    let encriptado = texto.replace(/e/g, 'enter')
                          .replace(/i/g, 'imes')
                          .replace(/a/g, 'ai')
                          .replace(/o/g, 'ober')
                          .replace(/u/g, 'ufat');
    return encriptado;
}

// Función para desencriptar texto
function desencriptarTexto(texto) {
    let desencriptado = texto.replace(/enter/g, 'e')
                             .replace(/imes/g, 'i')
                             .replace(/ai/g, 'a')
                             .replace(/ober/g, 'o')
                             .replace(/ufat/g, 'u');
    return desencriptado;
}

// Manejar el clic en el botón Encriptar
encriptarBtn.addEventListener('click', () => {
    const texto = cuadroTexto.value;
    if (texto) {
        const textoEncriptado = encriptarTexto(texto);
        nmensaje.textContent = textoEncriptado;
        encripTexto.textContent = 'Texto encriptado:';
        copiarBtn.style.display = 'block';
    }
});

// Manejar el clic en el botón Desencriptar
desencriptarBtn.addEventListener('click', () => {
    const texto = cuadroTexto.value;
    if (texto) {
        const textoDesencriptado = desencriptarTexto(texto);
        nmensaje.textContent = textoDesencriptado;
        encripTexto.textContent = 'Texto desencriptado:';
        copiarBtn.style.display = 'block';
    }
});

// Manejar el clic en el botón Limpiar
limpiarBtn.addEventListener('click', () => {
    cuadroTexto.value = '';
    nmensaje.textContent = 'Ningún mensaje fue encontrado';
    encripTexto.textContent = 'Ingresa el texto que desees encriptar o desencriptar.';
    copiarBtn.style.display = 'none';
});

// Manejar el clic en el botón Copiar
copiarBtn.addEventListener('click', () => {
    const textoEncriptado = nmensaje.textContent;
    cuadroTexto.value = textoEncriptado;
});
