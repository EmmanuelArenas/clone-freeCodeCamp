import "./App.css";
import Testimonio from "./components/Testimonio.jsx";
import { Personas } from "./utils/personas.js";
function App() {
  // console.log(Personas);
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        {Personas &&
          Personas?.map((e, index) => (
            <Testimonio
              key={index}
              nombre={e.nombre}
              pais={e.pais}
              imagen={e.imagen}
              cargo={e.cargo}
              empresa={e.empresa}
              testimonio={e.testimonio}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
