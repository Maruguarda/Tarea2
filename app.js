/* Ahora que conocemos todas las piezas del event loop,
veamos un poco de codigo para comprender el event loop en accion*/
console.log('Esta es la primera linea de codigo en app.js.');

function usingsetTimeout(){
    console.log('Me podre en la cola en el event loop');
}
// la linea 6 Espera 3 segundos para que lo imprima event loop


setTimeout(usingsetTimeout,3000);
console.log('Esta es la ultima linea de codigo en app.js');
//la linea 3, 12 son los primeros en imprimir
