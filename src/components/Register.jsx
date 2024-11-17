import React, { useState } from "react";
import { registerUser } from "../controllers/authController";
import '../styles/Auth.css'; // Importa el archivo CSS
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [showModalOk, setShowModalOk] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
      firstName,
      lastName,
    };
    const resutl = await registerUser(userData);
    if (resutl.success){
      setShowModalOk(true);
      // navigate('/home',{state:{userEmail: email}})
    } else {
       setError(resutl.message)
    }

  };
  const closeModal = () => {
    setShowModalOk(false);
  };
  const redirectTo = (path) => {
    closeModal();
    navigate(path);
  };

  return (
    <>
    <form onSubmit={handleRegister}>
      <h2>Registro</h2>
      {error && <p className="error">{error}</p>}
      <input
        type="text"
        placeholder="Nombre"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        />
      <input
        type="text"
        placeholder="Apellido"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        />
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
      <button type="submit">Registrar</button>
      <a href="/">¿Ya tienes cuenta? Inicia sesión</a>
    </form>
    {showModalOk && (
        <div className="modal-overlay">
          <div className="modal-content success">
            <h3>Bienvenido al sistema <span>NEURORED</span></h3>
            <p>Su registro al sistema fue exitoso. ¿A qué sector deseas ir?</p>
            <div className="modal-buttons">
              <button className="sector-button" onClick={() => redirectTo('/home/ninos/inicioNinos')}>Niños</button>
              <button className="sector-button" onClick={() => redirectTo('/home/adolescentes/inicioAdolescentes')}>Adolescentes</button>
            </div>
          </div>
        </div>
      )}

    </>
  );
};

export default Register;

