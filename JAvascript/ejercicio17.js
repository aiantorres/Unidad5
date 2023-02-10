var boton = document.getElementById('btn');
boton.addEventListener('click', () => alert('HOLA'));
function mostrarAlert() {
    alert('Guardado')
};
var inputFondo = document.getElementsByTagName('input')[0];
inputFondo.addEventListener('focus', cambioColor);
function cambioColor() {
    // alert('hola')
    inputFondo.style.backgroundColor = 'yellow';
};
inputFondo.addEventListener('focusout', quitarColor);
function quitarColor() {
    inputFondo.style.backgroundColor = '';
};
// Utilizando lo que pulsa el usuario 
var inputLetras = document.getElementsByTagName('input')[1];
inputLetras.addEventListener('keydown', vocales);
function vocales(event) {
    console.log('event', event);
    // Opcion 1: comparando y usando OR
    // if (event.keyCode == 65 || event.keyCode ==  69 || event.keyCode == 79 || event.keyCode == 73 || event.keyCode == 85) {
    
    const vocales = [65, 69, 79, 73, 85];
    // Opcion2: Función includes para comparar el array de vocales
    // if (vocales.includes(event.keyCode) === true) { 
    // Opcion 3: Función indexOf para comparar el array de vocales. Devuelve la posición en el array o -1 si no está incluido
    if (vocales.indexOf(event.keyCode) !== -1 ) {
        inputLetras.style.color = 'red';
    } else {
        inputLetras.style.color = 'green';
    }
}
// Prueba con valor del input
const test = document.getElementById('test');
test.addEventListener('keyup', checkLetter);
function checkLetter() {
    let value = test.value;
    console.log('test', value);
    if (value === 'a') {
        test.style.backgroundColor = 'orange'
    } else {
        test.style.backgroundColor = 'pink'
    }
}