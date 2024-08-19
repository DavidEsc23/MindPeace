import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import LoginPage from './login';
import RegisterPage from './register';
import './login.css'
import './register.css';

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
