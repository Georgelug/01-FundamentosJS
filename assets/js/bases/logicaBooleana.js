const regresaTrue = ()=>{
    console.log('Regresa True');
    return true;
} ;

const soyUndefined = undefined;

const soyNull = null;

const soyFalse = false;

const a1 = true && 'Hola Mundo'; //'Hola Mundo'

const a2 = 'Hola' && 'Mundo';//'mundo'

const a3 = soyFalse || 'Ya no soy false';//'Ya no soy false'

const a4 = soyFalse || soyNull || 'Ya no soy falso de nuevo' || false; //'Ya no soy falso de nuevo'

const a5 = soyFalse || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true;

console.log({a1,a2,a3,a4,a5});

//### Nota ###

// AND: si es false antes del '&&' no ejecuta lo que este despues
// OR: si es true antes del '||' no ejecuta lo que este despues