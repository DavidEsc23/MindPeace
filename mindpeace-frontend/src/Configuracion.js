import React from "react";
import "./Configuracion.css";

function Configuracion() {
  return (
    <div className="configuracion-container">
      <header className="configuracion-header">
        <div className="logo"></div>
        <nav>
          <ul className="menu">
            <li><a href="">Tutoriales</a></li>
            <li><a href="/formulario">Formulario</a></li>
            <li><a href="/menuUser">Menu</a></li>
          </ul>
        </nav>
      </header>

      <div className="configuracion-content">
        {/* Formulario */}
        <div className="configuracion-text">
          <h1>Configuración</h1>
          <p>Personaliza tu perfil a tu gusto.</p>
          <form className="configuracion-form">
            <div className="form-group">
              <input
                type="text"
                placeholder="Nuevo nombre de usuario"
                className="input-field"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Cambiar Email"
                className="input-field"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Cambiar contraseña"
                className="input-field"
              />
            </div>
            <button className="save-button">Guardar Cambios</button>
          </form>
        </div>

        {/* Imagen */}
        <div className="configuracion-image">
          <img src="icons/confi.png" alt="Meditación" />
        </div>
      </div>

      <footer className="configuracion-footer">
        © 2024 MindPeace - Todos los derechos reservados.
      </footer>
    </div>
  );
}

export default Configuracion;
