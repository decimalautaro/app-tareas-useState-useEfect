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
    <table>
      <thead>
        <tr>
          <th>Tareas</th>
        </tr>
      </thead>
      <tbody>{filaTablaTarea(mostrarEstado)}</tbody>
    </table>
  );
};
