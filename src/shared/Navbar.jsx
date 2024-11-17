import React from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { logoutUser } from "../controllers/authController";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const userEmail = location.state?.userEmail; // Obtén el email del estado

  // Obtén el perfil (sector) desde la ruta
  const sector = location.pathname.includes("ninos")
    ? "ninos"
    : location.pathname.includes("adolescentes")
    ? "adolescentes"
    : null;

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
          { name: "Inicio", path: "/home/ninos" },
          { name: "Juegos", path: "/home/ninos/juegos" },
          { name: "Videos", path: "/home/ninos/videos" },
          { name: "Ayuda", path: "/home/ninos/ayuda" },
        ]
      : sector === "adolescentes"
      ? [
          { name: "Inicio", path: "/home/adolescentes" },
          { name: "Tutoriales", path: "/home/adolescentes/tutorial" },
          { name: "Videos", path: "/home/adolescentes/videos" },
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
