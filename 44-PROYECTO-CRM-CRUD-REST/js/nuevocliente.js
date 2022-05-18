import {nuevoCliente } from './API.js';
import { mostrarAlerta } from './funciones.js';

(function() {
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarCliente);

    async function validarCliente(e) {
        e.preventDefault();

        const nombre = document.querySelector('#nombre').value;
        const apat = document.querySelector('#apat').value;
        const amat = document.querySelector('#amat').value;
        const direccion = document.querySelector('#direccion').value;
        const fecha_nac = document.querySelector('#fecha_nac').value;
        const telefono = document.querySelector('#telefono').value;
        const email = document.querySelector('#email').value;

        const cliente = {
            nombre, 
            apat,
            amat,
            direccion,
            fecha_nac,
            telefono,
            email
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