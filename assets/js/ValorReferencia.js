// Ejemplo de como se pasa por objeto o valor primitivo
let a = 10;
let b = a;
a =30;
console.log({a,b});
// Ejemplo de como se pasa por referencia
// let juan = {nombre: 'Juan'};
// let ana = juan;
// ana.nombre = 'ana';
// console.log({juan,ana,}); // Aqui se tiene un problema ya que al modificar .nombre el objeto como tal se modifico en ambas, esto se debe por que en JS todos los objetos se manejan por referencias
// const cambiaNombre = (persona) => {
//       persona.nombre = 'Tony';
//       return persona;
// }

// let peter = {nombre: 'Peter'};
// let tony = cambiaNombre(peter);
// console.log({peter,tony});
// El resultado salio Tony , Tony ya que se pasa por referencia en la funcion, el objeto como tal y despues se modifica el nombre, pero esto como es la misma referencia
// tanto tony como peter estan apuntando a la misma localidad de memoria


// Para esto se utiliza el metodo del parametro spread, el cual es parecido al rest, sin embargo en este contexto se usa para "unir" en un solo arreglo , por quer a final de cuentas
// un objeto literal puede ser tratado como una estructura de datos, la cual es equivalente a un diccionario en python

let juan = {nombre: 'Juan'};
let ana ={ ...juan};
ana.nombre = 'Ana';
console.log({juan,ana,}); 

// Para el segundo caso cuando se tiene una fucnion que modifica el contenido de nuestro objeto literal
const cambiaNombre = ({...persona}) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = {nombre: 'Peter'};
let tony = cambiaNombre(peter);
console.log({peter,tony});


// Usando el operado Spread

const frutas = ['manzana','pera','mango'];

console.time('Spread');
const otrasfrutas = [...frutas];// como se puede ver, se requiere de este operador como para "copiar" propiamente lo que aloja la contstante frutas, de esta forma se hace una copia tal cual del arreglo y no una copia del lo que esta apuntando la variable o constante original
console.timeEnd('Spread');

otrasfrutas.push('sandia');

console.table({frutas,otrasfrutas});




