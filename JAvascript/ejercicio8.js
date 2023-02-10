const helado = 1.90
const toppingOreo = 1
const toppingKitKat = 1.50
const toppingBrownie = 0.75
const toppingLacasitos = 0.95

const topping = prompt('introduzca el topping que desea');

if (topping == "oreo" && "Oreo"){
    var heladotoppingOreo = helado + toppingOreo
    alert("El precio del helado más topping de Oreo le costará " + heladotoppingOreo + " euros")
} else {
    alert("Lo sentimos, este topping no lo tenemos")
    alert("El precio del helado sin topping es de 1.90 euros")
}







