import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

function LoginPage() {
    const navigate = useNavigate();

    const handleRegisterClick = (e) => {
        e.preventDefault(); // Prevenir comportamiento por defecto del enlace
        navigate('/register'); // Navega a la página de registro
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Iniciar Sesión</h2>
                <p>Juntos hacia un estado de calma y bienestar.</p>
                <form>
                    <div className="input-group">
                        <label htmlFor="email">Correo</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <button type="submit" className="login-button">Iniciar Sesión</button>
                </form>
                <p className="register-link">
                    ¿No tienes una cuenta? <a href="/register" onClick={handleRegisterClick}>Regístrate</a>
                </p>
            </div>
        </div>
    );
}

export default LoginPage;