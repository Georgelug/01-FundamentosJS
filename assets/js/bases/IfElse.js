// Clase Date, esta nos aporta informacion de fechas , etc.

const hoy = new Date();

console.log({hoy});

let dia = hoy.getDay();// getday() sirve para opetener el dia en el que estamos, de tal modo que 0: Domingo, 1:lunes, 2:martes,...,6:sabado

console.log({dia});
// nota: === es para comparar tanto tipado como el valor en si, en cambio == es para comparar solo el valor sin importar el tipado.
// Ejemplo:
// 1=='1' -> true
//1 === '1' -> false
// 1 != '1' -> false
// 1 !== '1' -> true

console.log((dia === 0)?'Domingo':'No es domingo');

// Ejercicio

let week = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
];


dia = 3;

console.log(week[dia]);


