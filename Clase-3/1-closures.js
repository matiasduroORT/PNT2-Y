function func(){
    var mensaje = 'Hola'

    function Hija(){
        console.log(mensaje);
    }

    return Hija
}

const llamado = func()

// console.log(mensaje);

console.log(llamado.toString());

llamado()