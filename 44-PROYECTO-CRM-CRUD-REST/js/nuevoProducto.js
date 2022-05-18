import {nuevoCliente } from './APIproducto.js';
import { mostrarAlerta } from './funciones.js';

(function() {
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarCliente);

    async function validarCliente(e) {
        e.preventDefault();

        const nombre = document.querySelector('#nombre').value;
        const precio =  Number (document.querySelector('#precio').value);
        const stock =  Number (document.querySelector('#stock').value);
        

        const cliente = {
            nombre, 
           precio,
            stock
        }

        if( validar(cliente) ) {
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        }
        await nuevoCliente(cliente);
        window.location.href = 'index.html';
    }


   

    function validar(obj) {
        return !Object.values(obj).every(element => element !== '') ;
    }

   
})();