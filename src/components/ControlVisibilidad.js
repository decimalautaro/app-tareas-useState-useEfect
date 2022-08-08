import React from 'react'


export const ControlVisibilidad = ({isChecked, setMostrarEstado,limpiarTareas}) => {
    const handleDelete = ()=>{
        if (window.confirm('Estas seguro de querer eliminarlo')){
            limpiarTareas()
        }
    }

  return (
    <div className='d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary'>
        <div className='form-check form-switch'>
        <input
          className='form-check-input'
          type="checkbox"
          checked= {isChecked}
          onChange={(e) => setMostrarEstado(e.target.checked)}
        />
        <label>Mostrar tareas hechas</label>
        </div>

        <button onClick={handleDelete} className="btn btn-danger btn-sm" >
            Eliminar tarea
        </button>
      </div>

  )
}
