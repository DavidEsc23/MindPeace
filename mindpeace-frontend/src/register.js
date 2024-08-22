import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './register.css';

function RegisterPage() {
    const navigate = useNavigate(); 
    const [formData, setFormData] = useState({
        username: '', // Asegúrate de que 'username' está sincronizado con el backend
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validar que las contraseñas coincidan
        if (formData.password !== formData.confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }

        // Enviar los datos al backend
        axios.post('http://localhost:5000/api/users/register', {
            username: formData.username, // Enviar 'username' en lugar de 'name'
            email: formData.email,
            password: formData.password
        })
        .then(response => {
            console.log('Registro exitoso:', response.data);
            navigate('/login');
        })
        .catch(error => {
            console.error('Hubo un error con el registro:', error);
        });
    };

    return (
        <div className="register-container">
            <a href="/Intro" className="back-button"></a>
            <div className="register-image"></div>
            <div className="register-box">
                <h2>Tu viaje hacia la tranquilidad empieza aquí</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="username">Nombre</label>
                        <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Correo Electrónico</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirmar Contraseña</label>
                        <input type="password" id="confirm-password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
                    </div>
                    <button type="submit" className="register-button">Registrarse</button>
                </form>
                <p className="login-link">
                    ¿Ya tienes una cuenta? <a href="/login">Inicia Sesión</a>
                </p>
                <div className="social-login">
                    <div className="social-buttons">
                        <button className="social-button google-button">
                            <img src="/icons/google.png" alt="Google" /> Iniciar con Google
                        </button>
                        <button className="social-button apple-button">
                            <img src="/icons/apple.png" alt="Apple" /> Iniciar con Apple
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;
