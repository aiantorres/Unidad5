
const dato = prompt('introduzca el numero que desea calcular su factorial');
let r = 1;
for(let i = dato; i>0; i--){
    r *= i;
    
}
alert('El factorial de' + dato +'es' + r);
