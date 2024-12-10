import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './login';
import RegisterPage from './register';
import IntroPage from './Intro';
import FormularioPage from './Formulario';
import MenuUserPage from './menuUser';
import RebajoPage from './recomBajo';
import ReModeradoPage from './recomModerado'; 
import ReSeveroPage from './recomSevero';


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
                <Route path="/Formulario" element={<FormularioPage />} />
                <Route path="/menuUser" element={<MenuUserPage />} />
                <Route path="/recomBajo" element={<RebajoPage />} />
                <Route path="/recomModerado" element={<ReModeradoPage/>} />
                <Route path="/recomSevero" element={<ReSeveroPage/>} />

            </Routes>
        </BrowserRouter>
    );
}

export default MainApp;
