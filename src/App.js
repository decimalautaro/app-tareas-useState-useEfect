import { useState } from "react";
import "./App.css";
import { CreadorTarea } from "./components/CreadorTarea";

function App() {
  const [listarTareas, setListarTareas] = useState([
    { name: "mi primer tarea", hecha: true },
    { name: "mi segunda tarea", hecha: false },
    { name: "mi tercera tarea", hecha: true },
  ]);

  function crearNuevaTarea(nombreTarea){
    if(!listarTareas.find(tarea => tarea.name === nombreTarea)){
      setListarTareas([...listarTareas,{name: nombreTarea, hecha: false}])
    }
  }
  return (
    <div className="App">
      <CreadorTarea  crearNuevaTarea={crearNuevaTarea}/>
      
      <table>
        <thead>
          <tr>
            <th>Tareas</th>
          </tr>
        </thead>
        <tbody>
          {
            listarTareas.map(tareas => (
            <tr key={tareas.name}>
              <td>{tareas.name}</td>
            </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
