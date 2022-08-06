import React from "react";

export const FilaTarea = ({ tarea, alternarTarea } ) => {
  return (
    <tr>
      <td>
        {tarea.name}
        <input
          type="checkbox"
          checked={tarea.hecha}
          onChange={() => alternarTarea(tarea)}
          
        />
      </td>
    </tr>
  );
};
