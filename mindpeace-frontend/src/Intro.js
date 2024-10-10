import React from 'react';
import { useNavigate } from 'react-router-dom'; // Asegúrate de importar useNavigate
import './Intro.css'; // Importa el archivo CSS

function IntroPage() {
    const navigate = useNavigate();

    const handleRegisterClick = (e) => {
        e.preventDefault(); // Prevenir comportamiento por defecto del enlace
        navigate('/registerV2'); // Navega a la página de registro
    };

    const handleLoginClick = (e) => {
        e.preventDefault();
        navigate('/login'); // Navega a la página de inicio de sesión
    };

    return (
        <div className="intro-container">
            <div className="intro-header">
                <div className="logo"></div>
                <div className="menu-links">
                    <a href="/registerV2" className="menu-link" onClick={handleRegisterClick}>Regístrate</a>
                    <a href="/login" className="menu-link" onClick={handleLoginClick}>Inicia sesión</a>
                </div>
            </div>
            <div className="intro-content">
                <h1 className="intro-title">Descubre Tu Calma,<br /> Encuentra Tu Equilibrio</h1>
                <p className="intro-description">
                    Explora y gestiona tu ansiedad con MindPeace. ¿Listo para mejorar tu bienestar?
                    Comienza tu camino hacia la serenidad hoy.
                </p>
            </div>
        </div>
    );
}

export default IntroPage;
