// A esta madre le dicen objeto literal pero tiene casi un tratamiento como una struct de C, por lo tanto se podria decir que es una struct en js.
//Tambien es similar a un diccionario en python
let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords:{
        lat:0.00,
        lng: 0.00
    },
    trajes: ['IronmanI','IronmanII','IronmanIII','IronmanIW'],
    direccion:{
        zipo: '10880, 902665',
        ubicacion: 'Malibu, California'
    }
};
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje.coords['lat']);
console.log('No. Trajes: ',personaje.trajes.length);
console.log('ultimo traje: ',personaje.trajes[personaje.trajes.length-1]);

const x = 'vivo';

console.log('Vivo: ',personaje[x]);

//modificar una variable dentro del objeto

personaje.edad = null;

console.log(personaje);

// eleminar completamente la variable del objeto

delete personaje.edad;

console.log(personaje);

//Agregar una nueva varaible al objeto basta con solo escribirla y ya
personaje.casado = true; 

// Hacer que el objeto sea un areglo de pares
const entriesPares = Object.entries(personaje);
console.log(entriesPares);

//Para hacer que el objeto sea inmutable y no se puedan modificar sus elementos

Object.freeze(personaje);

personaje.dinero = 'Un chingo de dinero';

console.log(personaje);

//Para obtener todas las propiedades y los valores de un objeto en cuestion.
const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log({valores});
console.log({propiedades});

