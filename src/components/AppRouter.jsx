import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
// import Home from "../pages/home/Home";
import { AyudaPage } from "../pages/ayuda/AyudaPage";
import { JuegosPage } from "../pages/juegos/JuegosPage";
import ForumPage from "../pages/forum/Forum";
import Home from "../pages/home/Home";
import InicioNinos from "./ninos/Inicio";
import InicioAdolescentes from "./adolescentes/Inicio";
import { VideosComponent } from "./adolescentes/videos/VideosComponent";
import { VideosNinosComponent } from "./ninos/videos/VideosNinosComponent";
import { TutorialComponent } from "./adolescentes/tutorial/TutorialComponent";

// import { Inicio } from "./ninos/Inicio";
// import IncioAdolescentes from './adolescentes/Inicio'
// import ForumPage from "../pages/forum/ForumPage";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Rutas específicas para "niños" */}
        <Route path="/home/:sector" element={<Home />}>
          
          <Route path="inicioNinos" element={<InicioNinos/>} />
          <Route path="juegos" element={<JuegosPage />} />
          <Route path="videosNinos" element={<VideosNinosComponent />} />
          <Route path="ayuda" element={<AyudaPage />} />
        </Route>

        {/* Rutas específicas para "adolescentes" */}
        <Route path="/home/:sector" element={<Home />}>

          <Route path="inicioAdolescentes" element={<InicioAdolescentes/>} />
          <Route path="tutorial" element={<TutorialComponent/>} />
          <Route path="videosAdolescentes" element={<VideosComponent />} />
          <Route path="foro" element={<ForumPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
