import React from 'react';
import { useNavigate } from 'react-router-dom';
import './menuUser.css';

// Cambiar el nombre del componente para que sea más descriptivo
function MenuUserPage() {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');  // Redirige a la página de inicio de sesión si es necesario
    };

    return (
        <div className="menu-container">
            <nav className="menu-nav">
                <div className="menu-item">
                    <input type="text" placeholder="BUSCAR..." className="search-input" />
                </div>
                <div className="menu-item" onClick={handleLoginClick}>INICIAR SESION</div>
            </nav>
            <h1 className="menu-title">MINDPEACE</h1>
            <div className="menu-icons">
                <div className="icon-item">
                    <img src="/icons/tutorial.svg" alt="Tutorial" />
                    <p>TUTORIALES<br /><span>Acerca de MindPeace</span></p>
                </div>
                <div className="icon-item">
                    <img src="/icons/confi.svg" alt="Configuración" />
                    <p>CONFIGURACIÓN<br /><span>Perfil</span></p>
                </div>
                <div className="icon-item">
                    <img src="/icons/test.svg" alt="Test de Ansiedad" />
                    <p>TEST<br /><span>De ansiedad</span></p>
                </div>
            </div>
        </div>
    );
}

export default MenuUserPage;
