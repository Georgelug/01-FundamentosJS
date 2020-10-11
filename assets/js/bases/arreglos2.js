let juegos = [
    'GTA V',
    'Mario',
    'Skyrim',
    'Fortnite'
]

//metodo para medir la longitud de un arreglo
console.log('Largo: ',juegos.length);

console.log('\n1er elemento: ',juegos[0],'\nultimo elemento: ',juegos[juegos.length-1]);
/*
FOR EACH en JS

nombreDelArreglo.foreach((elementoDelArreglo,indicedelarreglo,nombredelarreglo)=>{

});

NOTA: el metodo de foreach recibe como parametro una funcion lambda la cual esta funcion requiere de tres parametros:

1.El elemento como tal del arreglo.

2.Indice del arreglo para recorrerlo.

3.Nombre del arreglo.
*/
juegos.forEach((elemento,indice,arr)=>{
    console.log({elemento,indice,arr})
});

//para agregar un elemento al arreglo se loe pude dar tratamiento de stack por lo tanto se usa el metodo push() el cual agrega un elemento al final del arreglo
// NOTA: push() devuelve la nueva longitud del arreglo
let nuevalen = juegos.push(3.1416);
console.log({nuevalen});
juegos.forEach((elemento,indice,arr)=>{
    console.log({elemento,indice,arr})
});
//unshift(<NuevoElemento>) agrega un nuevo elemento al principio del arreglo, ademas devuelve la nueva longitud
nuevalen = juegos.unshift('left 4 death');

console.log({nuevalen,juegos});

//para eliminar el utimo elemento del arreglo se usa pop() dando asi el tratamiento de stack

let juegoborrado = juegos.pop();

console.log({juegoborrado,juegos});

//Borrar un elemento en una posicion especifica, se usa el metodo splice(<posicion>, <cuantos elementos se requiere borrar apartir de la posicion dada>)

let pos = 1;

let juegosborrados = juegos.splice(pos,2);

console.log({juegosborrados,juegos});

//Para saber la posicion de un elemento se usa indexof(<nombreDelElemento>)

let metroIndex = juegos.indexOf('Skyrim');

console.log(metroIndex);

