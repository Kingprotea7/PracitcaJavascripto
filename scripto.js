
/* Funciones anonimas y flechas importante para el DOM*/
//Funcion anonima,ignora el hoisting
let prueba=function(a,b){
  return a+b;
}

let prueba2=(a,b)=>
  a+b;


console.log(prueba(2,3));
console.log(prueba2(3,3));