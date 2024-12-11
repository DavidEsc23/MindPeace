import React from 'react';
import { useNavigate } from 'react-router-dom';
import './menuUser.css';

function MenuUserPage() {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');  // Redirige a la página de inicio de sesión si es necesario
    };

    const handleConfigClick = () => {
        navigate('/configuracion');  // Redirige a la página de configuración
    };

    return (
        <div className="menu-container">
            <h1 className="menu-title">MINDPEACE</h1>
            <div className="menu-icons">
                <div className="icon-item">
                    <a href="/recomBajo">
                        <img src="/icons/tutorial.svg" alt="Tutorial" />
                    </a>
                    <p>TUTORIALES<br /><span>Acerca de MindPeace</span></p>
                </div>
                <div className="icon-item" onClick={handleConfigClick}>
                    <img src="/icons/confi.svg" alt="Configuración" />
                    <p>CONFIGURACIÓN<br /><span>Perfil</span></p>
                </div>
                <div className="icon-item">
                    <a href="/formulario">
                        <img src="/icons/test.svg" alt="Test de Ansiedad" />
                    </a>
                    <p>TEST<br /><span>De ansiedad</span></p>
                </div>
            </div>
        </div>
    );
}

export default MenuUserPage;
