import React from 'react'
import './Inicio.css'
const Inicio = () => {
  return (
    <>
         <h1>Bienvenido al sector Adolescentes</h1>
        <p>Descubre contenido educativo y entretenido para adolescentes.</p>
        <img
          className="img-profile"
          src="/images/adolescentes.webp"
          alt={`Imagen representativa del sector`}
        />
        <p className="img-description">Imagen representativa del aprendizaje y desarrollo adolescente.</p> 

    </>
  )
}
export default Inicio;
