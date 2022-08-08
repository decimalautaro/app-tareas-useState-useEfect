import React from "react";
import { useState } from "react";

export const CreadorTarea = ({crearNuevaTarea}) => {

  const [nuevaTarea, setNuevaTarea] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    crearNuevaTarea(nuevaTarea)
    setNuevaTarea("");
  };
  return (
    <form onSubmit={handleSubmit} className="my-2 row">
      <div className="col-9">
      <input
        className="form-control"
        type="text"
        placeholder="Ingresar nueva tarea"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
      />

      </div>
      <div className="col-3">

      <button className="btn btn-primary btn-sm">Guardar tarea</button>

      </div>
      
    </form>
  );
};
