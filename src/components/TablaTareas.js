import React from "react";
import { FilaTarea } from "./FilaTarea";

export const TablaTareas = ({ tareas, alternarTarea }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Tareas</th>
        </tr>
      </thead>
      <tbody>
        {tareas.map((tarea) => (
          <FilaTarea tarea={tarea} key={tarea.name}  alternarTarea= {alternarTarea}/>
        ))}
      </tbody>
    </table>
  );
};
