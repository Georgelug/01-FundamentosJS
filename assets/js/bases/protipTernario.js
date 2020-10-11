const elMayor = (a,b) => ( a > b ) ? a : b ;

const tieneMembresia = ( miembro ) => miembro ? '2 Dolares' : '10 dolares';

console.log(elMayor( 20 , 4 ));

console.log(tieneMembresia(false));

const amigo = false;

const Personaje = {
    nombre: amigo ? 'Thor' : 'Loki',
    arma: amigo ? 'Martillo' : 'Baston',
    dios: amigo ? 'dios del Trueno' : 'dios del engaño',
    amigo: amigo,
};

console.log(Personaje);