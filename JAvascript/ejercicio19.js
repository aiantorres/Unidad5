function calcular(){
    var numerosUsuario = document.getElementById('num').value;
    console.log(numerosUsuario)
    let arr = numerosUsuario.split(',');
    console.log(arr)
    let c = arr.map(Number);
    console.log(c)
    let suma = 0
    
    for(var i = 0; i < c.length; i++){
        suma += c[i];
    }
    document.getElementById('idSuma').innerHTML = 'La suma de todos los números es ' + suma;
    
    console.log(suma);
    
}

function reiniciar(){
    document.getElementById('num').value= '';
    document.getElementById('idSuma').innerHTML = '';
}
function cargarEjemplo(){
    document.getElementById('cargar').value= "1,2,3";
}


  