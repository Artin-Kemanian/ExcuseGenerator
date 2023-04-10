/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excusa").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console! ");
};

let generateExcuse = () => {
  let articulo = ["Mi", "Un/Una", "El/la"];
  let sustantivo = ["perro", "conductor", "pareja", "ladrón"];
  let accion = ["robó", "ensució", "mordió", "se llevó"];
  let posesion = ["mi tarea", "mi auto", "mis zapatos", "mi computadora"];
  let lugar = ["en mi casa", "en el parque", "en la acera de mi casa"];

  let artIndex = Math.floor(Math.random() * articulo.length);
  let sustIndex = Math.floor(Math.random() * sustantivo.length);
  let accIndex = Math.floor(Math.random() * accion.length);
  let posIndex = Math.floor(Math.random() * posesion.length);
  let lugIndex = Math.floor(Math.random() * lugar.length);

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
