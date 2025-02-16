
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
  let getRandomNum = (arr) => {return Math.floor(Math.random() * arr.length)};
  
  let numArtic = getRandomNum(artic);
  let numQuien = getRandomNum(quien);
  let numAccion = getRandomNum(accion);
  let numCosa = getRandomNum(cosa);
  let numComo = getRandomNum(como);

  if (numArtic === 0) {
    if (numQuien === 0 || numQuien === 3) {
      numArtic = 1;
    }
  }

  document.querySelector('#excusa').innerText = `${artic[numArtic]} ${quien[numQuien]} ${accion[numAccion]} ${cosa[numCosa]} ${como[numComo]}`;
};