// ⋆⭒˚.⋆ Elimina a los jugadores ⋆⭒˚.⋆

const contenedorModal = document.getElementById("contenedor-modal");

const abrirModal = (idJugador) => {
  contenedorModal.innerHTML = `
        <div id="modal">
          <h2 class="titulo-advertencia">¡ADVERTENCIA!</h2>
          <img src="./assets/icon-alert.png" alt="icon-alert" id="icon-alert">
          <p class="mensaje-advertencia">¿Estás seguro/a que quieres eliminarlo?</p>
          <div class="btns-modal">
            <button id="aceptar-modal">Aceptar</button>
            <button id="cancelar-modal">Cancelar</button>
          </div>
        </div>
        <div class="cubierta-modal"></div>`;

  const cubiertaModal = document.querySelector(".cubierta-modal");
  const btnCancelar = document.getElementById("cancelar-modal");
  const btnAceptar = document.getElementById("aceptar-modal");

  contenedorModal.style.display = "block";
  cubiertaModal.style.display = "block";

  btnCancelar.addEventListener("click", () => {
    contenedorModal.innerHTML = "";
  });

  btnAceptar.addEventListener("click", () => {
    fetch(
      `https://663e8b86e1913c476797f698.mockapi.io/api/fulbo/${idJugador}`,
      {
        method: "DELETE",
      }
    )
      .then((res) =>
        res.json().then((data) => {
          obtenerJugadores(api);
          contenedorModal.innerHTML = "";
          buscador.style.display = "block";
        })
      )
      .catch((error) => console.log(error));
  });
};
