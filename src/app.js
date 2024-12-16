/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import "./assets/icon.png";

window.onload = () => {
  document.querySelector("#excusa").innerHTML = generadorExcusa();
};

let generadorExcusa = () => {
  let artic = ["El", "Mi"];
  let quien = ["Tía", "Tio", "gato", "abuela"];
  let accion = ["me rompio mi", "me cogió mi", "me robo mi", "escondio"];
  let cosa = ["movil", "portátil", "llaves", "bocina"];
  let como = [
    "mientras dormía",
    "mientas estudiaba",
    "cuando no estaba en casa",
    "cuando no miraba",
    "cuando entre al baño",
    "cuando me fui de fiesta"
  ];

  /* Ahora tengo que seleccionar un elemento de cada lista para utilizarlos luego al generar mi excusa */

  let numArtic = Math.floor(Math.random() * artic.length);
  let numQuien = Math.floor(Math.random() * quien.length);
  let numAccion = Math.floor(Math.random() * accion.length);
  let numCosa = Math.floor(Math.random() * cosa.length);
  let numComo = Math.floor(Math.random() * como.length);

  if (numArtic == 0) {
    if (numQuien == 0 || numQuien == 3) {
      numArtic = 1;
    }
  }
  /* Me devuelve mi excusa ya anidada */
  return (
    artic[numArtic] +
    " " +
    quien[numQuien] +
    " " +
    accion[numAccion] +
    " " +
    cosa[numCosa] +
    " " +
    como[numComo]
  );
};
