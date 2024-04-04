function obtenerNombreUsuario(id, ejemploCallback){

    setTimeout(() => {
        let usuario3 = 'Martin'
        const nombres = {
            'Usuario1': 'Matias',
            Usuario2: 'Pedro',
            usuario3,
            4: 'Manuel'
        };

        console.log(nombres);

        const nombre = nombres[id]

        ejemploCallback(nombre)

    }, 1000);
}


    obtenerNombreUsuario('Usuario2', (nombre) => {
        console.log(`El nombre del usuario es ${nombre}`);
    })
