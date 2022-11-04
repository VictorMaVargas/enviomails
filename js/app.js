document.addEventListener('DOMContentLoaded', function(){
    //seleccion elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');

    //eventos para los campos (inputs)
    function validar (e){
        if (e.target.value === ''){
            console.log('está vacio');
        }else{
            console.log('hay algo');
        }
    }
    inputEmail.addEventListener('blur', validar);

    inputAsunto.addEventListener('blur', validar);

    inputMensaje.addEventListener('blur', validar)
    
});

