 console.clear;

const heroes = [
    'Batman',
    'superman',
    'Mujer maravilla',
    'Aquaman',
];

console.warn('For tradicional');

for(let i = 0 ; i < heroes.length ; i++){
    console.log(heroes[i]);
}

console.warn('For in');

for(let i in heroes){
    console.log(heroes[i]);
}

// nota: la variable i por si sola imprime el indice


console.warn('For of');

for(let heroe of heroes){
    console.log( heroe );
}
// nota: For of es el equivalente a For each como en python o en java