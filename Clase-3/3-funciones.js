function map(arr, fnc){

    const nuevoArray = []

    arr.forEach(function(valores) {
        
        nuevoArray.push(fnc(valores))
    })
    return nuevoArray
}


function sumarUno(num){ return num * 1}

const array = ['nombre', 1, 2, 5]

console.log(map(array, sumarUno));