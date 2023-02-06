const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

const mesesLargo = meses.filter(function(meses) {
    return meses.length > 7
  })
  .map(function(cadaMes) {
    return cadaMes.toUpperCase();
  });

console.log(mesesLargo);

const numeroMeses = mesesLargo.length;
console.log(`Solo ${numeroMeses} meses`);


