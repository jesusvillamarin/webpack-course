import createElement from './createDOM.js';
import renderMessage from './renderToDOM';


const GenerateMessage = new Promise(resolve => {
    setTimeout(() => {
        resolve('Han pasado 3seg para agregarme en el DOM');
    }, 3000);
});


module.exports = {
    mensaje: 'Mensaje desde el modulo mensaje.js',
    showMessage: async () => {
        // imprime el mensaje del closure de la función
        // Esperamos el mensaje que genera la función asincrona GenerateMessage
        const mensaje = await GenerateMessage;
        //Creamos el elemento para el añadirlo en el DOM, le pasamos el mensaje que le pasaremos al textContent
        // Posteriormente renderizamos el elemento que devuelve el createElement con su respectivo creado en el GenerateMessage
        renderMessage(createElement(mensaje));
    },
}