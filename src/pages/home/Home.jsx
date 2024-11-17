import React from "react";
import { Outlet, useParams } from "react-router-dom";
import "./Home.css";
import Navbar from "../../shared/Navbar";

const Home = () => {
  // Obtén el parámetro dinámico "sector" desde la URL
  const { sector } = useParams();
  console.log(sector);

  return (
    <div className="home-container">
      {/* Pasa el sector al Navbar */}
      <Navbar sector={sector} />
      {/* Renderiza el contenido dinámico */}
      <div className="content">
        <Outlet /> {/* Renderiza las rutas hijas */}
      </div>
    </div>
  );
};

export default Home;

