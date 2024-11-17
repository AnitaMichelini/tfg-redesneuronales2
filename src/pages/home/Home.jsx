import React from "react";
import "./Home.css";
import Navbar from "../../shared/Navbar";
import { useParams } from "react-router-dom";

const Home = () => {
  const { sector } = useParams();

  // Datos específicos para cada perfil
  const data = {
    ninos: {
      title: "Bienvenido al sector Niños",
      description: "Explora actividades y recursos diseñados para los más pequeños.",
      className: "sector-ninos",
      imgSrc: "/images/ninos.webp", // Imagen para niños
      imgDescription: "Imagen representativa de la curiosidad y creatividad de los niños.",
    },
    adolescentes: {
      title: "Bienvenido al sector Adolescentes",
      description: "Descubre contenido educativo y entretenido para adolescentes.",
      className: "sector-adolescentes",
      imgSrc: "/images/adolescentes.webp", // Imagen para adolescentes
      imgDescription: "Imagen representativa del aprendizaje y desarrollo adolescente.",
    },
  };

  // Datos por defecto para sectores no válidos
  const sectorData = data[sector] || {
    title: "Sector no encontrado",
    description: "Por favor, selecciona un sector válido.",
    className: "sector-default",
    imgSrc: "/images/default.png", // Imagen por defecto
    imgDescription: "Imagen predeterminada para un sector desconocido.",
  };

  return (
    <div className={`home-container ${sectorData.className}`}>
      <div className="navbar-fullscreen">
        <Navbar />
      </div>
      <div className="content">
        <h1>{sectorData.title}</h1>
        <p>{sectorData.description}</p>
        <img
          className="img-profile"
          src={sectorData.imgSrc}
          alt={`Imagen representativa del sector ${sector}`}
        />
        <p className="img-description">{sectorData.imgDescription}</p>
      </div>
    </div>
  );
};

export default Home;
