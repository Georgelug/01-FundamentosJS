const dia = new Date().getDay;

const horaActual = 16;

let horaApertura;
let mensaje;

horaApertura = ([0,6].includes( dia ))? 9 : 11;

mensaje = (horaActual >= horaApertura) ? `Esta abierto` : `Esta cerrado, hoy abrimos a las ${horaApertura}`;

console.log({horaApertura,mensaje});