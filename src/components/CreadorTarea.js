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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ingresar nueva tarea"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
      />

      <button>Guardar tarea</button>
    </form>
  );
};
