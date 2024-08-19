import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';

function App() {
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:5000/')
            .then(response => {
                setMessage(response.data);
            })
            .catch(error => {
                console.error('Hubo un error al hacer la solicitud:', error);
            });
    }, []);

    const handleLoginClick = () => {
        navigate('/Login'); // Redirige a la página de inicio de sesión
    };

    return (
        <div className="menu-container">
            <nav className="menu-nav">
                <div className="menu-item">INICIO</div>
                <div className="menu-item">
                    <input type="text" placeholder="BUSCAR..." className="search-input" />
                </div>
                <div className="menu-item" onClick={handleLoginClick}>INICIAR SESION</div>
            </nav>
            <h1 className="menu-title">MINDPEACE</h1>
            <div className="menu-icons">
                <div className="icon-item">
                    <img src="/icons/tutorial.png" alt="Tutorial" />
                    <p>TUTORIALES<br /><span>Acerca de MindPeace</span></p>
                </div>
                <div className="icon-item">
                    <img src="/icons/confi.png" alt="Configuración" />
                    <p>CONFIGURACIÓN<br /><span>Perfil</span></p>
                </div>
                <div className="icon-item">
                    <img src="/icons/test.png" alt="Test de Ansiedad" />
                 <p>TEST<br /><span>De ansiedad</span></p>
                </div>
                <div className="icon-item">
                    <img src="/icons/form.png" alt="Formulario MindPeace" />
                    <p>FORMULARIO<br /><span>MindPeace</span></p>
                </div>
            </div>
        </div>
    );
}

// Componente de la página de inicio de sesión (esto es un ejemplo, debes crear tu propio componente)
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
function RegisterPage() {
    return (
        <div className="register-container">
            <div className="register-image"></div>
            <div className="register-box">
                <h2>Tu viaje hacia la tranquilidad empieza aquí</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="name">Nombre</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Correo Electronico</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirmar Contraseña</label>
                        <input type="password" id="confirm-password" name="confirm-password" required />
                    </div>
                    <button type="submit" className="register-button">Registrarse</button>
                </form>
                <p className="login-link">
                    ¿Ya tienes una cuenta? <a href="/login">Inicia Sesión</a>
                </p>
                <div className="social-login">
                    <div className="social-buttons">
                        <button className="social-button google-button">
                            <img src="/icons/google.png" alt="Google" /> Iniciar con Google
                        </button>
                        <button className="social-button apple-button">
                            <img src="/icons/apple.png" alt="Apple" /> Iniciar con Apple
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}



function MainApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default MainApp;
