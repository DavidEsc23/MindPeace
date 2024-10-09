import React from 'react';
import './Intro.css';
import { useNavigate } from 'react-router-dom'; // Importamos el hook de navegación

function IntroPage() {
    const navigate = useNavigate(); // Inicializamos el hook

    const handleRegisterClick = () => {
        navigate('/register'); // Redirige a la página de registro
    };

    return (
        <div className="intro-container">
            {/* Header */}
            <div className="intro-header">
                <div className="logo"></div>
                <div className="menu-links">
                    <a href="/register" className="menu-link">Regístrate</a>
                    <a href="/login" className="menu-link">Inicia sesión</a>
                </div>
            </div>

            {/* Sección anterior (Hero Section) */}
            <div className="hero-section">
                <h1 className="intro-title">Descubre Tu Calma,<br /> Encuentra Tu Equilibrio</h1>
                <p className="intro-description">
                    Explora y gestiona tu ansiedad con MindPeace. ¿Listo para mejorar tu bienestar?
                    Comienza tu camino hacia la serenidad hoy.
                </p>
            </div>

            {/* Sección adicional con imagen e información */}
            <div className="additional-section">
                <div className="info-image">
                    <img src="icons/part2.png" alt="MindPeace Image" />
                    <div className="floating-box box-5plus">
                        <h3>5+</h3>
                        <p>Explora 5+ secciones interactivas</p>
                    </div>
                    <div className="floating-box box-10plus">
                        <h3>10+</h3>
                        <p>Accede a 10+ recursos visuales</p>
                    </div>
                    <div className="floating-box box-100plus">
                        <h3>100+</h3>
                        <p>Únete a nuestros 100+ primeros usuarios.</p>
                    </div>
                </div>
                <div className="info-content">
                    <h2>Explora tu Mente con Nosotros</h2>
                    <p>
                        Descubre tu nivel de ansiedad de una manera dinámica y visual con MindPeace.
                        Nuestro cuestionario interactivo, enriquecido con imágenes, te guiará a través de un proceso
                        atractivo y revelador. ¿Listo para entender mejor tus emociones? Únete a nosotros y toma el primer
                        paso hacia un bienestar personalizado.
                    </p>
                </div>
            </div>

            {/* Nueva sección de ansiedad */}
            <div className="anxiety-section">
                <div className="anxiety-content">
                    <h2>Domina tu Ansiedad con Nosotros</h2>
                    <p>
                        Encuentra alivio y técnicas eficaces para manejar tu ansiedad con la ayuda de MindPeace.
                        Nuestros tutoriales y recursos, diseñados visualmente para una fácil comprensión, te proporcionarán
                        herramientas prácticas para enfrentar situaciones de estrés diarias.
                    </p>
                </div>
                <div className="anxiety-image">
                    <img src="icons/3.png" alt="MindPeace Image" /> 
                    <div className="floating-box box-10">
                        <h3>10+</h3>
                        <p>Accede a 10+ Tutoriales Visuales</p>
                    </div>
                    <div className="floating-box box-3">
                        <h3>3+</h3>
                        <p>Practica con 3+ Audios de Meditación</p>
                    </div>
                    <div className="floating-box box-100">
                        <h3>100+</h3>
                        <p>Únete a nuestra comunidad y aprende</p>
                    </div>
                </div>
            </div>

            {/* Sección de llamada a la acción */}
            <div className="cta-section">
                <div className="cta-content">
                    <img src="icons/part4.png" alt="Globe" className="cta-image" />
                    <div className="cta-text">No Pierdas Esta Gran Oportunidad y Únete a MindPeace Hoy</div>
                </div>
                <div className="cta-button">
                    <button onClick={handleRegisterClick}>Regístrate Hoy</button>
                </div>
            </div>

            {/* Footer */}
            <footer className="footer">
                <p>© 2024 MindPeace – Todos los derechos reservados.</p>
            </footer>
        </div>
    );
}

export default IntroPage;
