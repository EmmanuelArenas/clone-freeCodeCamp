import React from "react"; //No permite trabajar con componenetes
import ReactDOM from "react-dom/client"; // nos permite interactuar con el DOM
import "./index.css";
import App from "./App"; //importa componente principal para poder usarlo

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(); //Mide el desempeño de la apliccion
