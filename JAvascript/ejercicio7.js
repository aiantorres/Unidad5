const dni = prompt('Introduce tu DNI');
const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

if (dni < 0 || dni > 99999999 || dni.length !=8 ) {
  alert('El número proporcionado no es válido');
}
else {
  const seleccion = letras[dni%23];
  alert('Tu letra del DNI es '+ seleccion);
}
