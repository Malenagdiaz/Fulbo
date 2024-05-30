// ⋆⭒˚.⋆ Filtro de busqueda ⋆⭒˚.⋆
const club = document.getElementById("club");
const position = document.getElementById("position");
const btnBuscar = document.querySelector(".buscar-btn");
const btnLimpiar = document.querySelector(".limpiar-btn");

let clubSeleccionado = "";
let positionSeleccionada = "";

club.addEventListener("change", () => {
  clubSeleccionado = club.value;
});

position.addEventListener("change", () => {
  positionSeleccionada = position.value;
});

const buscarJugadores = () => {
  activarSpinnerTemporal();

  const urlFiltro = new URLSearchParams({
    club: clubSeleccionado,
    position: positionSeleccionada,
  });

  fetch(`https://663e8b86e1913c476797f698.mockapi.io/api/fulbo?${urlFiltro}`)
    .then((res) => res.json())
    .then((data) => {
      mostrarJugadores(data);
      spinner.style.display = "none";
      contenedorT.style.display = "block";
    })
    .catch((error) => {
      tarjeta.innerHTML = `
        <div class="advertencia">
          <h2 class="titulo-adv">Error al mostrar jugadores.</h2>
        </div>`;
      console.error(error);
      contenedorT.style.display = "block";
    });
};

btnBuscar.addEventListener("click", (event) => {
  event.preventDefault();
  buscarJugadores();
});

btnLimpiar.addEventListener("click", (event) => {
  event.preventDefault();
  club.value = "";
  position.value = "";
  clubSeleccionado = "";
  positionSeleccionada = "";
  obtenerJugadores(api);
});
