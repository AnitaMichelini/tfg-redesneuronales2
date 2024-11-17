import React from 'react'
import './Inicio.css'
export const Inicio = () => {
  return (
    <>
        <h1 className='text-white'>Bienvenido al sector Niños</h1>
        <p className='text-white'>Explora actividades y recursos diseñados para los más pequeños.</p>
        <img
          className="img-profile"
          src="/images/ninos.webp"
          alt={`Imagen representativa del sector`}
        />
        <p className="img-description text-white">Imagen representativa de la curiosidad y creatividad de los niños.</p> 

    </>
  )
}
export default Inicio;