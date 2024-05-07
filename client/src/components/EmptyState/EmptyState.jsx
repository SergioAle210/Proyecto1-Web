import './EmptyState.css'
import React from 'react'

const EmptyState = () => {
  return (
      <div className='styles'>
        <h2>No hay posts para mostrar</h2>
        <p>
          Parece que no hay contenido en este momento. ¡Intenta más tarde!
        </p>
        <img
          src="src/assets/images/NBA.jpg"
          alt="No hay información"
          className='imageStyles'
        ></img>
      </div>
  )
}

export default EmptyState
