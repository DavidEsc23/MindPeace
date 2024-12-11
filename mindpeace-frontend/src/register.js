import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './register.css';
import API_URL from './config'; // Importa la URL del backend

function RegisterPage() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({});
    const [hints, setHints] = useState({
        nombre: 'Ingresa tu nombre completo.',
        email: 'Debe ser un correo electrónico válido (e.g., usuario@dominio.com).',
        password: 'Debe tener al menos 8 caracteres, una mayúscula y un número.',
        confirmPassword: 'Debe coincidir con la contraseña ingresada anteriormente.'
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.nombre.trim()) {
            newErrors.nombre = 'El nombre es requerido. Por favor, ingresa tu nombre completo.';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'El correo electrónico es requerido.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Por favor, ingresa un correo electrónico válido (e.g., usuario@dominio.com).';
        }

        if (!formData.password) {
            newErrors.password = 'La contraseña es requerida.';
        } else if (formData.password.length < 8) {
            newErrors.password = 'La contraseña debe tener al menos 8 caracteres.';
        } else if (!/[A-Z]/.test(formData.password)) {
            newErrors.password = 'La contraseña debe contener al menos una letra mayúscula.';
        } else if (!/[0-9]/.test(formData.password)) {
            newErrors.password = 'La contraseña debe contener al menos un número.';
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'La confirmación de contraseña es requerida.';
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Las contraseñas no coinciden. Asegúrate de ingresar la misma contraseña.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleRegister = (e) => {
        e.preventDefault();
      
        if (!validateForm()) {
          return;
        }
      
        axios.post(`${API_URL}/api/users/register`, { // Cambia la URL base
          username: formData.nombre,
          email: formData.email,
          password: formData.password,
        })
          .then(response => {
            console.log('Registro exitoso:', response.data);
            navigate('/login'); // Redirige al login después del registro
          })
          .catch(error => {
            console.error('Hubo un error con el registro:', error);
          });
      };

    return (
        <div className="register-container">
            <a href="/Intro" className="back-button"></a>
            <div className="register-box">
                <h2>Regístrate</h2>
                <p>Tu viaje hacia la tranquilidad empieza aquí.</p>
                <form onSubmit={handleRegister}>
                    <div className="input-group">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            required
                        />
                        {hints.nombre && <p className="hint">{hints.nombre}</p>}
                        {errors.nombre && <p className="error">{errors.nombre}</p>}
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Correo Electrónico</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        {hints.email && <p className="hint">{hints.email}</p>}
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        {hints.password && <p className="hint">{hints.password}</p>}
                        {errors.password && <p className="error">{errors.password}</p>}
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirmar Contraseña</label>
                        <input
                            type="password"
                            id="confirm-password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                        {hints.confirmPassword && <p className="hint">{hints.confirmPassword}</p>}
                        {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
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
