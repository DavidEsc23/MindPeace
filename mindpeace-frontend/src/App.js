import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './login';
import RegisterPage from './register';
import IntroPage from './Intro';
import MenuUserPage from './menuUser';  // Importa tu componente renombrado
import PrivateRoute from './components/PrivateRoute';  // Para proteger rutas

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

                {/* Ruta protegida */}
                <Route path="/menuUser" element={
                    <PrivateRoute>
                        <MenuUserPage /> {/* Usa el componente renombrado */}
                    </PrivateRoute>
                } />
            </Routes>
        </BrowserRouter>
    );
}

export default MainApp;
