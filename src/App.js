import { useState, useEffect } from "react";
import "./App.css";
import { CreadorTarea } from "./components/CreadorTarea";
import { TablaTareas } from "./components/TablaTareas";

function App() {
  const [listarTareas, setListarTareas] = useState([]);
  const [mostrarEstado, setMostrarEstado] = useState(false);

  function crearNuevaTarea(nombreTarea) {
    if (!listarTareas.find((tarea) => tarea.name === nombreTarea)) {
      setListarTareas([...listarTareas, { name: nombreTarea, hecha: false }]);
    }
  }
  const alternarTarea = (tarea) => {
    setListarTareas(
      listarTareas.map((t) =>
        t.name === tarea.name ? { ...t, hecha: !t.hecha } : t
      )
    );
  };

  useEffect(() => {
    let data = localStorage.getItem("tareas");
    if (data) {
      setListarTareas(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(listarTareas));
  }, [listarTareas]);
  return (
    <div className="App">
      <CreadorTarea crearNuevaTarea={crearNuevaTarea} />
      <TablaTareas tareas={listarTareas} alternarTarea={alternarTarea} />

      <div>
        <input
          type="checkbox"
          onChange={(e) => setMostrarEstado(!mostrarEstado)}
        />
        <label>Mostrar tareas hechas</label>
      </div>

      {mostrarEstado === true && (
        <TablaTareas
          tareas={listarTareas}
          alternarTarea={alternarTarea}
          mostrarEstado={mostrarEstado}
        />
      )}
    </div>
  );
}

export default App;
