const contenedorEdit = document.querySelector(".contenedor-edit");

const mostrarEditor = (jugador) => {
  contenedorEdit.innerHTML = `
     <div id="editor">
        <h2 class="titulo-edit">Editar jugador</h2>
        <label for="edit-imgUrl" class="label-edit">Imagen URL:</label>
        <input type="text" id="edit-imgUrl" value="${jugador.imageUrl}">

        <label for="edit-name" class="label-edit">Nombre:</label>
        <input type="text" id="edit-name" value="${jugador.name}">

        <label for="edit-position" class="label-edit">Posición:</label>
        <select id="edit-position" class="select-edit">
          <option value="">Seleccione una posición</option>
          <option value="Delantero">Delantero</option>
          <option value="Centrocampista">Centrocampista</option>
          <option value="Defensor">Defensor</option>
          <option value="Portero">Portero</option>
        </select>

        <label for="edit-club" class="label-edit">Club:</label>
        <select id="edit-club" class="select-edit">
          <option value="">Seleccione un club</option>
          <option value="Barcelona">Barcelona</option>
          <option value="Real Madrid">Real Madrid</option>
          <option value="Manchester City">Manchester City</option>
          <option value="Manchester United">Manchester United</option>
          <option value="Atletico de Madrid">Atlético de Madrid</option>
          <option value="Aston Villa">Aston Villa</option>
        </select>

        <label for="edit-description" class="label-edit">Descripción:</label>
        <textarea id="edit-description">${jugador.description}</textarea>

        <div class="btn-edit">
          <button id="btn-guardar-edit">Guardar cambios</button>
          <button id="btn-cancelar-edit">Cancelar</button>
        </div>
      </div>
  `;

  // Asignamos el valor del select de posición
  const selectPosition = document.getElementById("edit-position");
  selectPosition.value = jugador.position;

  // Asignamos el valor del select de club
  const selectClub = document.getElementById("edit-club");
  selectClub.value = jugador.club;

  const guardarBtn = document.getElementById("btn-guardar-edit");
  guardarBtn.addEventListener("click", () => {
    const imgUrl = document.querySelector("#edit-imgUrl").value;
    const nuevoNombre = document.querySelector("#edit-name").value;
    const nuevaPosition = document.querySelector("#edit-position").value;
    const nuevoClub = document.querySelector("#edit-club").value;
    const nuevaDescription = document.querySelector("#edit-description").value;

    const nuevoJugador = {
      imageUrl: imgUrl,
      name: nuevoNombre,
      position: nuevaPosition,
      club: nuevoClub,
      description: nuevaDescription,
    };

    spinner.style.display = "block";

    guardarCambios(jugador.id, nuevoJugador);
  });

  const cancelarBtn = document.getElementById("btn-cancelar-edit");
  cancelarBtn.addEventListener("click", () => {
    contenedorEdit.innerHTML = "";
  });
};

const guardarCambios = (idJugador, nuevoJugador) => {
  fetch(`${api}/${idJugador}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(nuevoJugador),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then(() => {
      obtenerDetallesJugador(idJugador);
      contenedorEdit.innerHTML = "";
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
