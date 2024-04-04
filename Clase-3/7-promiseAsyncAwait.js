const obstenerUsuario = async () => {

    // Hace la consulta al fetch 
    const respuesta = await fetch('https://randomuser.me/api/');

    // el primer await espera a que termine esa consulta
    const datos = await respuesta.json()
    // el segundo await espera a que esa consulta se manipule y obtenga el json

    return datos.results[0]
}


// Toda consulta a una base de datos o un endpoint es una promesa

async function funcionPadre(){
    const user = await obstenerUsuario()
    const base = await func()
    console.log(`Nombre: ${user.name.first} ${user.name.last}`);
    console.log(`Email: ${user.email}`);
    console.log(base);

}

// VOLVEMOS 9:30

funcionPadre()


async function func(){


    return 5
}