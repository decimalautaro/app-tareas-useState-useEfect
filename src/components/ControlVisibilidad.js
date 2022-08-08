import React from 'react'


export const ControlVisibilidad = ({isChecked, setMostrarEstado,limpiarTareas}) => {
    const handleDelete = ()=>{
        if (window.confirm('Estas seguro de querer eliminarlo')){
            limpiarTareas()
        }
    }

  return (
    <div>
        <input
          type="checkbox"
          checked= {isChecked}
          onChange={(e) => setMostrarEstado(e.target.checked)}
        />
        <label>Mostrar tareas hechas</label>

        <button onClick={handleDelete}>
            limpiado
        </button>
      </div>

  )
}
