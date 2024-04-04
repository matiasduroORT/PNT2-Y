const obstenerUsuario = () => {
    return fetch('https://randomuser.me/api/')
    .then((respuesta) => {
        return respuesta.json()
    })
    .then((data) => {

        const usuario = data.results[0]
        console.log(usuario);
        return usuario
    })
}


const datos = obstenerUsuario()
.then((user) => {
    console.log(`Nombre: ${user.name.first} ${user.name.last}`);
    console.log(`Email: ${user.email}`);
})