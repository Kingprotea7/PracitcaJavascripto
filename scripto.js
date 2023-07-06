
/* CARRITA DE COMPRAS CON ARREGLO VACIO,METODO PUSH Y CONFIRM*/
let carrito=[];
let respuesta=false;
do{
carrito.push(prompt("Que producto va al carrito?"));
respuesta=confirm("Desea ingresar otro producto?")
}
while(respuesta);
console.log(carrito);
