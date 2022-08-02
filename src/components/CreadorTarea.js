import React from "react";
import { useState } from "react";
export const CreadorTarea = () => {
  const [nuevaTarea, setNuevaTarea] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("tarea", nuevaTarea);
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
