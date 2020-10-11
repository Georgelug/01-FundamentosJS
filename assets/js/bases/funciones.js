// para hacer una funcion se requiere de:
/*
function nombreDelaFuncion(<Parametros>){
    //cuerpo de la funcion        
}
*/
// NOTA: una funcion aunque no se defina como tal, puede recibir mas de un argumento. y para acceder a esa info. se debe utilizar la palabra recervada arguments

function saludar(nombre){
    let l = [];
    l = arguments;
    console.log(l[0],'\n',l[l.length-1]);
    console.log('Hola ' + nombre);

}

saludar('Jorge',123,true);

// for (let i = 0; i < 10; i++) {
    
//     saludar();

// }

// Funcion anonima

// const saludar2 = function(){

//     console.log('Hola Mundo');

// }

// Funciones lambda o de flecha
/*
const NombreDeLaFuncion = (<argumentos>) => {
    //cuerpo de la funcion
}
*/

const saludarFlecha = ( nombre )=>{

    console.log('Hola Flecha gorda\n'+ nombre +' sois la polla');
}

saludarFlecha('Jorge');

// Retorno de una funcion, JS las funciones retornan lo que sea, aun cuando no se defina como tal retorna undefine.
// Esto se debe al tipado debil que es propiedad de este lenguaje

function sumar(a,b){
    return a+b;
}

console.log(sumar(1,2));

function sumAll(a){
    let suma = 0;
    for (let i = 0; i < arguments.length; i++) {
        suma+=arguments[i];
    }
    return suma;
}

console.log(sumAll(1,2,3,4));

// retorno en una funcion lambda

const sumar2 = (a,b) => {
    return a+b;
}


console.log(sumar2(1,2));

// Otra forma de hacer un funcion lambda

const sumar3 = (a,b) => a+b;

console.log(sumar3(1,2));

function getAleatorio(){
    return Math.random();
}

console.log( getAleatorio() );

// version lambda

const rando = () => Math.random();

console.log(rando());

