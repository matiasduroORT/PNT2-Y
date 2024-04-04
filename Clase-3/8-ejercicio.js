function obtenerUsuariosAleatorios() {
    const response = fetch("https://randomuser.me/api/");

    const data = ???

    const usuario = ???


return ???
}

// Obtener 3 usuarios aleatorios

const func = async () => {
  const usuarios = await obtenerUsuariosAleatorios();

  // EJEMPLO DEL LOG: [ 'Sibille Tausch', 'Zdravko Katanić', 'Zinzi Wobbes' ]
  console.log(usuarios);
}

func();
