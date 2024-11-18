<<<<<<< HEAD
=======
// src/components/AppRouter.jsx
>>>>>>> ea938a800b7215092f4c9d99e734f05feb138223
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
<<<<<<< HEAD
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
=======
import Home from "../pages/home/Home";
import { AyudaPage } from "../pages/ayuda/AyudaPage";
import { JuegosPage } from "../pages/juegos/JuegosPage";
import VideosPage from "../pages/videos/VideosPage";
import Tutorial from "../pages/tutorial/Tutorial";

const AppRouter = () => {
  return (
    <>
>>>>>>> ea938a800b7215092f4c9d99e734f05feb138223
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
<<<<<<< HEAD

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
=======
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
>>>>>>> ea938a800b7215092f4c9d99e734f05feb138223
  );
};

export default AppRouter;
