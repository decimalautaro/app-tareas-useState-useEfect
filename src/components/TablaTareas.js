import React from "react";
import { FilaTarea } from "./FilaTarea";

export const TablaTareas = ({
  tareas,
  alternarTarea,
  mostrarEstado = false,
}) => {
  const filaTablaTarea = (valorActual) => {
    return tareas
      .filter((tarea) => tarea.hecha === valorActual)
      .map((tarea) => (
        <FilaTarea
          tarea={tarea}
          key={tarea.name}
          alternarTarea={alternarTarea}
        />
      ));
  };
  return (
    <table className="table table-dark table-striped table-bordered border-security">
      <thead>
        <tr className="table-primary">
          <th>Tareas</th>
        </tr>
      </thead>
      <tbody>{filaTablaTarea(mostrarEstado)}</tbody>
    </table>
  );
};
