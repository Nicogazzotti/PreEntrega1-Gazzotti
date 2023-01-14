let tipoPizza= prompt('Ingrese "chica" si quiere pizza pequeña o "grande" si quiere pizza grande')

while ((tipoPizza != 'grande' ) && (tipoPizza != 'chica')){
    tipoPizza=prompt('No es valido, Ingrese "chica" si quiere pizza pequeña o "grande" si quiere pizza grande ')
}
console.log("Usted va a ordenar el tipo de pizza "+tipoPizza)

let precio=0

if (tipoPizza=="chica"){
    precio=1300;
} 
    else{
    precio=2000;
}
console.log("El precio individual de la pizza "+tipoPizza+" es de "+ precio)

let cantidad=parseInt(prompt('Ingrese la cantidad de pizzas que va a pedir'))
while(cantidad==0 || cantidad==null){
    cantidad=parseInt(prompt('El valor ingresado no es valido, Ingrese nuevamente la cantidad de pizzas que va a pedir'))
}
if (cantidad==1){
    console.log("Usted va a pedir "+cantidad+" pizza")
}
else{
    console.log("Usted va a pedir "+cantidad+" pizzas")
}


for (let i=1; i<cantidad+1 && i<3+1; i++){
    let gustoPizza= prompt("Ingrese que gusto quiere para la pizza " + i +" (Solo disponible hasta las primeras 3 pizzas o las que se pidan ). Los gustos disponibles son napolitana, muzzarella, fugazzeta, cuatro quesos y calabresa.")

    console.log('La pizza ' + i + ' es de '+gustoPizza)
}

Total(precio,cantidad)

function Total(p,can){
    let total=p*can
    Imprimir(can,total)
}
function Imprimir(can,tot){
    if (can==1){
        console.log("Su pedido es de " +can+" pizza y vale "+tot)
    }
    else{
        console.log("Su pedido es de " +can+" pizzas y vale "+tot)
    }
    
}