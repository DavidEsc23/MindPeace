import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/')
            .then(response => {
                setMessage(response.data);
            })
            .catch(error => {
                console.error('Hubo un error al hacer la solicitud:', error);
            });
    }, []);

    return (
        <div className="menu-container">
            <nav className="menu-nav">
                <div className="menu-item">INICIO</div>
                <div className="menu-item">
                    <input type="text" placeholder="BUSCAR..." className="search-input" />
                </div>
                <div className="menu-item">EXPLORAR</div>
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

export default App;
