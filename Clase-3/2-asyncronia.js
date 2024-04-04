function imprimirUno(){
    console.log('Uno');
}

function imprimirDos(){
    console.log('Dos');
}

function imprimirTres(){
    console.log('Tres');
}

setTimeout(imprimirUno, 1000)
setTimeout(imprimirDos,0)
imprimirTres()