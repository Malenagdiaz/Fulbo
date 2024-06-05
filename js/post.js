// ⋆⭒˚.⋆ Añade nuevos jugadores ⋆⭒˚.⋆
const btnJugador = document.querySelector(".agrega-jugador");
const buscador = document.querySelector(".buscador");
const cita = document.querySelector("footer p");

const formularioJugador = () => {
  buscador.style.display = "none";
  cita.style.display = "none";
  tarjeta.innerHTML = `
<form id="formulario-jugador">
  <label>Nombre del jugador:</label>
  <input type="text" id="input-nombre" required />

  <label>Imagen URL del jugador:</label>
  <input type="text" id="input-url" required />

  <label>Posición en la que juega:</label>
  <select name="position" id="positions" required>
    <option value="">Seleccione una posición</option>
    <option value="Delantero">Delantero</option>
    <option value="Centrocampista">Centrocampista</option>
    <option value="Defensor">Defensor</option>
    <option value="Portero">Portero</option>
  </select>

  <label>Club en el que juega:</label>
  <select name="club" id="clubes" required>
    <option value="">Seleccione un club</option>
    <option value="Barcelona">Barcelona</option>
    <option value="Real Madrid">Real Madrid</option>
    <option value="Manchester City">Manchester City</option>
    <option value="Manchester United">Manchester United</option>
    <option value="Atletico de Madrid">Atlético de Madrid</option>
    <option value="Aston Villa">Aston Villa</option>
  </select>

  <label>Juega en otro club?</label>
  <input type="text" id="input-nuevo-club">

  <label>Detalles del jugador:</label>
  <textarea name="detalles-jugador" id="detalle" required></textarea>

  <div class="btn-formulario">
    <button class="btn-agregarJ" type="submit">Agregar Jugador</button>
    <button class="btn-cancelarJ" type="button">Cancelar</button>
  </div>
</form>`;

  const agregaJ = document.querySelector(".btn-agregarJ");
  const cancelarJ = document.querySelector(".btn-cancelarJ");

  agregaJ.addEventListener("click", enviarFormulario);
  cancelarJ.addEventListener("click", () => {
    buscador.style.display = "block";
    cita.style.display = "block";
    obtenerJugadores(api);
  });
};

btnJugador.addEventListener("click", formularioJugador);

const enviarFormulario = (e) => {
  e.preventDefault();

  if (e.target.classList.contains("btn-agregarJ")) {
    const nuevoJugador = guardarInfoJugador();
    enviarNuevoJugador(nuevoJugador);
  }
};

const guardarInfoJugador = () => {
  const nuevoClub = document.getElementById("input-nuevo-club").value;
  const clubSeleccionado = document.getElementById("clubes").value;
  const positionSeleccionada = document.getElementById("positions").value;

  if (nuevoClub) {
    actualizarListaClubes(nuevoClub);
  }

  return {
    name: document.getElementById("input-nombre").value,
    imageUrl: document.getElementById("input-url").value,
    description: document.getElementById("detalle").value,
    club: nuevoClub || clubSeleccionado,
    position: positionSeleccionada,
  };
};

const enviarNuevoJugador = (nuevoJugador) => {
  fetch("https://663e8b86e1913c476797f698.mockapi.io/api/fulbo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(nuevoJugador),
  })
    .then((response) => response.json())
    .then((data) => {
      obtenerJugadores(api);
      buscador.style.display = "block";
      cita.style.display = "block";
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

const actualizarListaClubes = (nuevoClub) => {
  const defaultClub = document.querySelector(
    `#clubes option[value="${nuevoClub}"]`
  );
  if (!defaultClub && nuevoClub) {
    const selectClub = document.getElementById("clubes");
    const option = document.createElement("option");
    option.value = nuevoClub;
    option.text = nuevoClub;
    selectClub.appendChild(option);
  }
};
