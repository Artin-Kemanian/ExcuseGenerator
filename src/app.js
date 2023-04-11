/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excusa").innerHTML = generarExcusa();
  });
  console.log("Hello Rigo from the console! ");
};

let generarNumeroAleatorio = lista => {
  let listaIndex = Math.floor(Math.random() * lista.length);
  return listaIndex;
};
let generarExcusa = () => {
  let articulo = ["Mi", "Un/Una", "El/la"];
  let sustantivo = ["perro", "conductor", "pareja", "ladrón"];
  let accion = ["robó", "ensució", "mordió", "se llevó"];
  let posesion = ["mi tarea", "mi auto", "mis zapatos", "mi computadora"];
  let lugar = ["en mi casa", "en el parque", "en la acera de mi casa"];

  let artIndex = generarNumeroAleatorio(articulo);
  let sustIndex = generarNumeroAleatorio(sustantivo);
  let accIndex = generarNumeroAleatorio(accion);
  let posIndex = generarNumeroAleatorio(posesion);
  let lugIndex = generarNumeroAleatorio(lugar);

  return (
    articulo[artIndex] +
    " " +
    sustantivo[sustIndex] +
    " " +
    accion[accIndex] +
    " " +
    posesion[posIndex] +
    " " +
    lugar[lugIndex]
  );
};
