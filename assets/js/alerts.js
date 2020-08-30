
alert('hola mundo');//bloquea el navegador y no deja que pase a la siguiente instruccion
//Esta es una manera de pedir valor por medio de una alert
let nombre = prompt('Cual es tu nombre? ','Escribe tu nombre');//Manda un mensaje y llena un formulario, el primer argumento es el mensaje como tal y el otro es unmensaje que se muestra dentro del buffer

alert('Hola '+nombre);

console.log(confirm('Esta seguro de borrar esto?'));//confirm() retorna un valor booleano