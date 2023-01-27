
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

const pizzas=[]
let sumaprecios=0
for (let i=1; i<cantidad+1 && i<5+1; i++){
    let tipoPizza= prompt('Para la piiza ' + i+ ': Ingrese "1" si quiere pizza chica o "2" si quiere pizza grande')

    while ((tipoPizza != 1 ) && (tipoPizza != 2)){
        tipoPizza=prompt('No es valido, Ingrese "1" si quiere pizza pequeña o "2" si quiere pizza grande ')
    }
    let tamañoPizza=""
    if (tipoPizza==1){
        tamañoPizza="chica"
    }else{
        tamañoPizza="grande"
    }
    

    let precio=0

    if (tamañoPizza=="chica"){
        precio=1300;
    } 
    else{
        precio=2000;
    }
    console.log("El precio individual de la pizza "+tamañoPizza+" es de "+ precio)
    let gustoPizza= prompt("Ingrese que gusto quiere para la pizza " + i +" (Solo disponible hasta 5 pizzas o las que se pidan ). Los gustos disponibles son napolitana, muzzarella, fugazzeta, cuatro quesos y calabresa.")
    
    pizzas.push({nropizza:i, gusto:gustoPizza, tamaño:tamañoPizza, precio: precio })
    sumaprecios+=precio
    if (cantidad==i){
        Imprimir(cantidad,sumaprecios,pizzas)
    }


}

// Total(precio,cantidad)

// function Total(p,can){
//     let total=p*can
//     Imprimir(can,total)
// }
function Imprimir(can,tot,pizzas){
    if (can==1){
        console.log("Su pedido es de " +can+" pizza y vale "+tot)
    }
    else{
        console.log("Su pedido es de " +can+" pizzas y vale "+tot)
    }
    for (const x of pizzas){
        console.log("Para la pizza "+ x.nropizza+" usted va a ordenar una "+x.gusto+" "+ x.tamaño+ " y vale "+x.precio)
    }
    // console.log(pizzas.join(","))
    
}