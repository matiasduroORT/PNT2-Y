const llamadaSQL = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Hola')
        }, 2000);
    })
}

const func = () => {
    const data = llamadaSQL()
    console.log(data);
    console.log('Espera...');

    setTimeout(() => {
        console.log(data);
    }, 2001);
}

func()