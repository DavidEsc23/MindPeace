import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css';

function LoginPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        axios.post('http://localhost:5000/api/users/login', {
            email: formData.email,
            password: formData.password
        })
        .then(response => {
            const token = response.data.token;
            const userId = response.data.userId;
            localStorage.setItem('authToken', token);
            localStorage.setItem('userId', userId); // Almacena el userId en el localStorage
            navigate('/menuUser');
        })
        .catch(error => {
            console.error('Error al iniciar sesión:', error);
            setErrorMessage('Error al iniciar sesión. Verifique sus credenciales.');
        });
    };


    const handleRegisterClick = (e) => {
        e.preventDefault(); 
        navigate('/register'); 
    };

    return (
        <div className="login-container">
            <a href="/Intro" className="back-button"></a>
            <div className="login-box">
                <h2>Iniciar Sesión</h2>
                <p>Juntos hacia un estado de calma y bienestar.</p>
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <label htmlFor="email">Correo</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
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

export default LoginPage;
