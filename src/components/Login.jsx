import React, { useState } from "react";
import { loginUser } from "../controllers/authController";
import { Link, useNavigate } from "react-router-dom";
import '../styles/Auth.css';

const Login = () => {
  const [email, setEmail] = useState("test1@neurored.com.ar");
  const [password, setPassword] = useState("123456");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showModalOk, setShowModalOk] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await loginUser(email, password);
    if (result.success) {
      setShowModalOk(true); // Muestra el modal de éxito
    } else {
      setError(result.message); // Muestra el mensaje de error
      setShowModal(true); // Muestra el modal de error
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setShowModalOk(false);
  };

  const redirectTo = (path) => {
    closeModal();
    navigate(path);
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <h2>Inicio de Sesión - <span>Neuro red</span></h2>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Iniciar Sesión</button>
        <Link to="/register">¿No tienes cuenta? Regístrate</Link>
      </form>

      {/* Modal de Error */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Error</h3>
            <p>{error}</p>
            <button onClick={closeModal}>Volver al Login</button>
          </div>
        </div>
      )}

      {/* Modal de Éxito */}
      {showModalOk && (
        <div className="modal-overlay">
          <div className="modal-content success">
            <h3>Bienvenido al sistema <span>NEURORED</span></h3>
            <p>¿A qué sector deseas ir?</p>
            <div className="modal-buttons">
              <button className="sector-button" onClick={() => redirectTo('/home/ninos/inicioNinos')}>Niños</button>
              <button className="sector-button" onClick={() => redirectTo('/home/adolescentes/inicioAdolescentes')}>Adolescentes</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
