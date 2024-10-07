import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './login';
import RegisterPage from './register';
import IntroPage from './Intro';
<<<<<<< HEAD
import FormularioPage from './Formulario';
import './login.css'
import './register.css';
import './Intro.css';
import './form.css';


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
    
    const handleFormuClick = () => {
        navigate('/Formulario'); // Redirige a la ruta /Formulario
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
                <div className="icon-item" onClick={handleFormuClick} style={{ cursor: 'pointer' }}>
                    <img src="/icons/test.svg" alt="Test de Ansiedad" />
                    <p>TEST<br /><span>De ansiedad</span></p>
                </div>
            </div>
        </div>
    );
}



=======
import MenuUserPage from './menuUser';  // Importa tu componente renombrado
import PrivateRoute from './components/PrivateRoute';  // Para proteger rutas
>>>>>>> origin/main

function MainApp() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Redirige la raíz (/) a la página de login o la que prefieras */}
                <Route path="/" element={<Navigate to="/Intro" />} />
                {/* Rutas públicas */}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/Intro" element={<IntroPage />} />
<<<<<<< HEAD
                <Route path="/Formulario" element={<FormularioPage />} />
=======

                {/* Ruta protegida */}
                <Route path="/menuUser" element={
                    <PrivateRoute>
                        <MenuUserPage /> {/* Usa el componente renombrado */}
                    </PrivateRoute>
                } />
>>>>>>> origin/main
            </Routes>
        </BrowserRouter>
    );
}

export default MainApp;
