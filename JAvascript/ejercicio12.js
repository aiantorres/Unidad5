const number = [253, 8575, 1, 20, 562, 1233, 25, 27, 258, 254, 7485, 2683];
console.log(number)
const pares = number.filter(function(numpares) {
  if (numpares%2== 0) {
    return numpares;
  };
});
const impares = number.filter(function(numimpar) {
  if (numimpar%2 !== 0) {
    return numimpar;
  };
});
console.log(pares);
console.log(impares);