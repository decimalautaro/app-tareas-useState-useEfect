import { useState, useEffect } from "react";
import "./App.css";
import { CreadorTarea } from "./components/CreadorTarea";

function App() {
  const [listarTareas, setListarTareas] = useState([]);

  function crearNuevaTarea(nombreTarea){
    if(!listarTareas.find(tarea => tarea.name === nombreTarea)){
      setListarTareas([...listarTareas,{name: nombreTarea, hecha: false}])
    }
  }

  useEffect(()=>{
    let data = localStorage.getItem('tareas');
    if (data) {
      setListarTareas(JSON.parse(data))
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('tareas',JSON.stringify(listarTareas))
  },[listarTareas])
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
