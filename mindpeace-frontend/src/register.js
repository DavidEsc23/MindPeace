import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import './register.css'; // Ajusta la ruta según sea necesario

function RegisterPage() {
    const navigate = useNavigate(); // Hook para navegación

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevenir comportamiento por defecto
        // Aquí podrías manejar el registro, por ejemplo, enviando los datos a tu API

        // Redirigir a la página de inicio de sesión
        navigate('/login');
    };

    return (
        <div className="register-container">
            <a href="/Intro" className="back-button"></a>
            <div className="register-image"></div>
            <div className="register-box">
                <h2>Tu viaje hacia la tranquilidad empieza aquí</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="name">Nombre</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Correo Electronico</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirmar Contraseña</label>
                        <input type="password" id="confirm-password" name="confirm-password" required />
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
