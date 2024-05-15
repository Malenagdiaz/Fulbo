const tarjeta = document.querySelector(".tarjetas");
const spinner = document.getElementById("spinner");
const contenedorT = document.querySelector(".contenedor-tarjetas");
const api = "https://663e8b86e1913c476797f698.mockapi.io/api/fulbo";

// ⋆⭒˚.⋆ Activa el spinner temporalmente ⋆⭒˚.⋆
const activarSpinnerTemporal = () => {
  spinner.style.display = "block";
  contenedorT.style.display = "none";
  setTimeout(() => {
    spinner.style.display = "none";
    contenedorT.style.display = "block";
  }, 2000);
};

// ⋆⭒˚.⋆ Trae a los jugadores ⋆⭒˚.⋆
const obtenerJugadores = (url) => {
  activarSpinnerTemporal();
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      mostrarJugadores(data);
    })
    .catch((error) => {
      tarjeta.innerHTML = `<div class="advertencia"><h2 class="titulo-adv">Error al mostrar jugadores.</h2></div>`;
      console.error(error);
    });
};

obtenerJugadores(api);

// ⋆⭒˚.⋆ Muestra a los jugadores ⋆⭒˚.⋆
const mostrarJugadores = (jugadores) => {
  tarjeta.innerHTML = "";
  jugadores.forEach((jugador) => {
    const { name, imageUrl, id, club, position } = jugador;

    tarjeta.innerHTML += `
      <div class="tarjeta">
        <img src="${imageUrl}" alt="${name}" id="jugador-img" />
        <h2 id="jugador-nombre">${name}</h2>
        <div id="tags">
          <p id="tag">${club}</p>
          <p id="tag">${position}</p>
        </div>
        <button id="detalles" class="ver-detalles" data-cardid="${id}">
          Ver Detalle
        </button>
      </div>
    `;
  });

  detallesBtn(document.querySelectorAll(".ver-detalles"));
};

// ⋆⭒˚.⋆ Boton para ver los detalles del jugador ⋆⭒˚.⋆
const detallesBtn = (btns) => {
  btns.forEach((btn) =>
    btn.addEventListener("click", () => {
      const cardId = btn.getAttribute("data-cardid");
      obtenerDetallesJugador(cardId);
    })
  );
};

// ⋆⭒˚.⋆ Obtiene los detalles ⋆⭒˚.⋆
const obtenerDetallesJugador = (idJugador) => {
  fetch(`${api}/${idJugador}`)
    .then((res) => res.json())
    .then((data) => {
      renderizarDetallesJugador(data);
      activarSpinnerTemporal();
    })
    .catch((error) => {
      tarjeta.innerHTML = `<div class="advertencia"><h2 class="titulo-adv">Error al ver los detalles del jugador</h2></div>`;
    });
};

// ⋆⭒˚.⋆ Renderiza los detalles del jugador ⋆⭒˚.⋆
const renderizarDetallesJugador = (jugador) => {
  const { imageUrl, name, club, position, description } = jugador;

  tarjeta.innerHTML = `
  <div class="detalles-jugador">
    <button class="boton-regresar"><i class="fa-solid fa-arrow-left"></i>Regresar atrás</button>
    <div class="info-jugador">
        <div class="detalles">
            <h2 class="nombre-jugador">${name}</h2>
            <h2 id="titulo-descripcion">Descripción:</h2>
            <p id="descripcion">${description}</p>
            <div class="tags">
                <div class="tag-container">
                    <h3 id="titulo-posicion">Posición:</h3>
                    <p id="posicion">${position}</p>
                </div>
                <div class="tag-container">
                    <h3 id="titulo-club">Club:</h3>
                    <p id="club">${club}</p>
                </div>
            </div>
        </div>
        <div class="contenedor-imagen">
            <img src="${imageUrl}" alt="${name}" class="imagen-jugador" />
        </div>
    </div>
    <div class="btn-editar-borrar">
        <button id="btn-borrar"><i class="fa-solid fa-trash"></i>Borrar</button>
        <button id="btn-editar"><i class="fa-solid fa-pen-to-square"></i>Editar</button>
    </div>
</div>
  `;

  const regresarBtn = document.querySelector(".boton-regresar");
  regresarBtn.addEventListener("click", () => {
    obtenerJugadores(api);
  });
};
