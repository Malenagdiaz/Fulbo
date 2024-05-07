document.querySelector(".modo-oscuro").classList.add("hidden");

document.querySelector(".modo-oscuro").addEventListener("click", () => {
  document.querySelector("header").style.backgroundColor = "#010b25";
  document.querySelector("body").style.backgroundColor = "#000000";
  document.querySelector(".modo-oscuro").style.backgroundColor = "#171a4a";
  document.querySelector(".agrega-jugador").style.backgroundColor = "#171a4a";
  document.getElementById("clubes").style.backgroundColor = "#010b25";
  document.getElementById("clubes").style.border = "1px solid #010b25";
  document.querySelectorAll("#clubes option").forEach((option) => {
    option.style.backgroundColor = "#010b25";
    option.style.color = "#ffffff";
  });
  document.getElementById("position").style.backgroundColor = "#010b25";
  document.getElementById("position").style.border = "1px solid #010b25";
  document.querySelectorAll("#position option").forEach((option) => {
    option.style.backgroundColor = "#010b25";
    option.style.color = "#ffffff";
  });
  document.querySelectorAll(".tarjetas div").forEach((div) => {
    div.style.backgroundColor = "#010b25";
    div.style.border = "1px solid #010b25";
  });
  document.querySelector("footer p").style.color = "#ffffff";
  document.querySelectorAll("#detalles").forEach((button) => {
    button.style.backgroundColor = "#010b25";
  });
  document.querySelector(".modo-oscuro").classList.add("hidden");
  document.querySelector(".modo-claro").classList.remove("hidden");
});

document.querySelector(".modo-claro").addEventListener("click", () => {
  document.querySelector("header").style.backgroundColor = "#0b3464";
  document.querySelector("body").style.backgroundColor = "#ffffff";
  document.querySelector(".modo-oscuro").style.backgroundColor = "#0b3464";
  document.querySelector(".agrega-jugador").style.backgroundColor = "#0b3464";
  document.getElementById("clubes").style.backgroundColor = "#0b3464";
  document.getElementById("clubes").style.border = "1px solid #0b3464";
  document.querySelectorAll("#clubes option").forEach((option) => {
    option.style.backgroundColor = "#0b3464";
    option.style.color = "#ffffff";
  });
  document.getElementById("position").style.backgroundColor = "#0b3464";
  document.getElementById("position").style.border = "1px solid #0b3464";
  document.querySelectorAll("#position option").forEach((option) => {
    option.style.backgroundColor = "#0b3464";
    option.style.color = "#ffffff";
  });
  document.querySelectorAll(".tarjetas div").forEach((div) => {
    div.style.backgroundColor = "#0b3464";
    div.style.border = "1px solid #0b3464";
  });
  document.querySelector("footer p").style.color = "#000000";
  document.querySelectorAll("#detalles").forEach((button) => {
    button.style.backgroundColor = "#0b3464";
  });
  document.querySelector(".modo-oscuro").classList.remove("hidden");
  document.querySelector(".modo-claro").classList.add("hidden");
});
