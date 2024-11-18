import React from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { logoutUser } from "../controllers/authController";
import "./Navbar.css";

<<<<<<< HEAD
const Navbar = ({sector}) => {
  // const location = useLocation();
=======
const Navbar = () => {
  const location = useLocation();
>>>>>>> ea938a800b7215092f4c9d99e734f05feb138223
  const navigate = useNavigate();
  const userEmail = location.state?.userEmail; // Obtén el email del estado

  // Obtén el perfil (sector) desde la ruta
<<<<<<< HEAD
  // const sector = location.pathname.includes("ninos")
  //   ? "ninos"
  //   : location.pathname.includes("adolescentes")
  //   ? "adolescentes"
  //   : null;
=======
  const sector = location.pathname.includes("ninos")
    ? "ninos"
    : location.pathname.includes("adolescentes")
    ? "adolescentes"
    : null;
>>>>>>> ea938a800b7215092f4c9d99e734f05feb138223

  const handleLogout = async () => {
    const result = await logoutUser();
    if (result.success) {
      navigate("/"); // Redirige al login
    } else {
      alert("Error al cerrar sesión: " + result.message);
    }
  };

  // Menús personalizados para cada perfil
  const menuItems =
    sector === "ninos"
      ? [
<<<<<<< HEAD
          { name: "Inicio", path: "/home/ninos/inicioNinos" },
          { name: "Juegos", path: "/home/ninos/juegos" },
          { name: "Videos", path: "/home/ninos/videosNinos" },
=======
          { name: "Inicio", path: "/home/ninos" },
          { name: "Juegos", path: "/home/ninos/juegos" },
          { name: "Videos", path: "/home/ninos/videos" },
>>>>>>> ea938a800b7215092f4c9d99e734f05feb138223
          { name: "Ayuda", path: "/home/ninos/ayuda" },
        ]
      : sector === "adolescentes"
      ? [
<<<<<<< HEAD
          { name: "Inicio", path: "/home/adolescentes/inicioAdolescentes" },
          { name: "Tutoriales", path: "/home/adolescentes/tutorial" },
          { name: "Videoss", path: "/home/adolescentes/videosAdolescentes" },
=======
          { name: "Inicio", path: "/home/adolescentes" },
          { name: "Tutoriales", path: "/home/adolescentes/tutorial" },
          { name: "Videos", path: "/home/adolescentes/videos" },
>>>>>>> ea938a800b7215092f4c9d99e734f05feb138223
          { name: "Foro", path: "/home/adolescentes/foro" },
        ]
      : [];

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Neuro Red</h1>
      </div>
      <ul className="navbar-menu">
        {menuItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
        {userEmail && <li className="user-email">{userEmail}</li>} {/* Muestra el email */}
        <li>
          <button onClick={handleLogout} className="logout-button">
            Cerrar Sesión
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
