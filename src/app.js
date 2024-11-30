/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here

  //Llamo a los elementos por su "id" HTML para que interactuen con el JS...
  document.querySelector("#botón").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuses();
  });

  console.log("Hello Rigo from the console!");
};

//Genero cada matriz con los valores que quiero en cada categoría...
let generateExcuses = () => {
  let articulo = ["El", "Mi"];
  let quien = ["canario", "abuelo", "gato", "vecino", "jefe", "hermano"];
  let accion = [
    "se comió mi",
    "ha robado mi",
    "destruyó mi",
    "ha secuestrado mi"
  ];
  let que = ["proyecto de JavaScript", "llavero", "coche", "portátil"];
  let como = [
    "mientras dormía!",
    "mientras estaba cenando!",
    "cuando yo no miraba!",
    "mientras estaba en el trabajo!"
  ];

  //Me devuelve una palabra aleatoria generando un numero random de minimo 0 y como máximo la longitud de mi matriz...
  let numArticulo = Math.floor(Math.random() * articulo.length);
  let numQuien = Math.floor(Math.random() * quien.length);
  let numAccion = Math.floor(Math.random() * accion.length);
  let numQue = Math.floor(Math.random() * que.length);
  let numComo = Math.floor(Math.random() * como.length);

  //Me devuelve mi excusa completa al crear la funcion return concatenando los resultados de cada generacion random de las matrices del paso anterior...
  return (
    articulo[numArticulo] +
    " " +
    quien[numQuien] +
    " " +
    accion[numAccion] +
    " " +
    que[numQue] +
    " " +
    como[numComo]
  );
};
