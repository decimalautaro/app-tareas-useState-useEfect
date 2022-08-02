import React from 'react'

export const TablaTareas = ({tareas}) => {
  return (
      <table>
        <thead>
          <tr>
            <th>Tareas</th>
          </tr>
        </thead>
        <tbody>
          {
            tareas.map(tarea=> (
            <tr key={tarea.name}>
              <td>{tarea.name}</td>
            </tr>
            ))
          }
        </tbody>
      </table>
  )
}
