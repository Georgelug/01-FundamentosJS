//Una funcion cuaLquiera
function crearPersona(nombre,apellido){
    return {
        nombre: nombre,
        apellido: apellido
    }
}

const persona = crearPersona('Jorge','Esparza');

console.log(persona);

//La funcion mejorada
//1er tip: desde las ultimas versiones JS acepta e infiere que se esta trabajando con un objeto y cuando sus parametros son lo mismo que los parametros de la funcion entonces basta con poner entre llaves los mismos parametros sin repetir ni nada.
function crearPersona2(nombre,apellido){
    return {nombre,apellido}
}

const persona2 = crearPersona2('Jorge','Esparza');

console.log(persona2);

// 2do tip: en version lambda si se quiere regresar el objeto entonces se debe encerrar entre parentesis

const crearPersona3 = (nombre,apellido)=>({nombre,apellido});

const persona3 = crearPersona3('Jorge','Esparza');

console.log(persona3);

// 3er tip: cuando se requiere que una funcion lambda reciba un numero indefinido de argumentos.
// NOTA: se pueden agregar mas de un argumento antes del '... args' pero NO despues.

const imprimirArgumentos2 = (... args) => {
    console.log( args );
}

console.log(imprimirArgumentos2(1,'hola mundo',true));

const imprimirArgumentos3 = (edad,... args) => {
    return args;
}
const [casado, vivo, nombre, saludo] = imprimirArgumentos3(22,false,true,'Jorge','Hola'); // Como args regresa un arreglo se puede asignar para cada argumento una variable, y se hace de esta manera en vez de estar accediendo de manera 'manual' a cada elemento del arreglo
console.log({casado, vivo, nombre, saludo});

// 4to tip: si solo se desea acceder a un atributo del objeto y quiero guardarla en una varable que se llame distinto al atributo hace asi

const {apellido: nuevoApellido} = crearPersona3('Jorge','Esparza');

console.log(nuevoApellido);

// 5to tip: para acceder de manera mas especifica a un objeto literal se puede poner en el argumento de la funcion encerrado entre llaves el nombre de cada atributo del objeto, ya que son llaves para acceder a la info como tal, ademas en caso de que por alguna razon no exista o no tenga valor alguno de los atributos, se puede inicializar desde los parametros con cierto valor, de esta manera si no se le asigna algun valor, ya tendra por defecto el valor asignado. 

const Tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,   
    trajes: ['IronmanI','IronmanII','IronmanIII','IronmanIW'],
};

const imprimePropiedades = ({nombre,codeName,vivo,edad=15,trajes}) =>{
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimePropiedades(Tony);