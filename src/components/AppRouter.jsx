// src/components/AppRouter.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Home from "../pages/home/Home";
import { AyudaPage } from "../pages/ayuda/AyudaPage";
import { JuegosPage } from "../pages/juegos/JuegosPage";
import VideosPage from "../pages/videos/VideosPage";
import Tutorial from "../pages/tutorial/Tutorial";

const AppRouter = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home/:sector" element={<Home />} /> {/* Ruta dinámica */}
         {/* Rutas anidadas dentro de Home */}
         <Route path="/home" element={<Home />}>
          <Route path="tutorial" element={<Tutorial/>} />
          <Route path="videos" element={<VideosPage/>} />
          <Route path="ayuda" element={<AyudaPage />} />
          <Route path="juegos" element={<JuegosPage />} />
        </Route>
        <Route path="/ninos" element={<Home />}>
          <Route path="tutorial" element={<Tutorial/>} />
          <Route path="videos" element={<VideosPage/>} />
          <Route path="ayuda" element={<AyudaPage />} />
          <Route path="juegos" element={<JuegosPage />} />
        </Route>
        <Route path="/adolescentes" element={<Home />}>
          <Route path="tutorial" element={<Tutorial/>} />
          <Route path="videos" element={<VideosPage/>} />
          <Route path="ayuda" element={<AyudaPage />} />
          <Route path="juegos" element={<JuegosPage />} />
        </Route>

      </Routes>
    </Router>
    </>
  );
};

export default AppRouter;
