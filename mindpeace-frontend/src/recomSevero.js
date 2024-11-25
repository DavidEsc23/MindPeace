import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ralto.css';

function ReSeveroPage() {
    const navigate = useNavigate();
    const [selectedTutorial, setSelectedTutorial] = useState("1.1"); // Estado para el tutorial seleccionado
    const [animationClass, setAnimationClass] = useState(""); // Estado para la clase de animación

    // Función para actualizar el tutorial seleccionado
    const handleTutorialSelection = (tutorial) => {
        setSelectedTutorial(tutorial);
        setAnimationClass("fade-in"); // Añadir clase de animación cuando se selecciona un tutorial
    };

    // UseEffect para quitar la clase de animación después de que se haya aplicado
    useEffect(() => {
        if (animationClass) {
            const timer = setTimeout(() => setAnimationClass(""), 1000); // Remueve la clase después de la duración de la animación
            return () => clearTimeout(timer);
        }
    }, [animationClass]);

    // Contenido que se mostrará en el área principal según el tutorial seleccionado
    const renderContent = () => {
        switch (selectedTutorial) {
            case "1.1":
                return (
                    <>
                        <h2>Exposición Gradual</h2>
                        <p>Poco a poco, te sentirás más seguro/a enfrentando tus miedos y superarás esas situaciones con éxito.</p>
                        <div className="preview">
                            <div className="text-content">
                                <ul className="steps-list">
                                    <li><strong>Paso 1:</strong> Elige una situación que te cause ansiedad. Divídela en pasos de menor a mayor dificultad.</li>
                                    <li><strong>Paso 2:</strong> Comienza con el paso más sencillo. Practícalo varias veces hasta sentirte más cómodo/a.</li>
                                    <li><strong>Paso 3:</strong> Avanza gradualmente a pasos más desafiantes mientras usas técnicas de relajación.</li>
                                </ul>
                            </div>
                            <div className="image-content">
                                <img src="icons/Rs1.webp" alt="Exposición Gradual" />
                            </div>
                        </div>
                    </>
                );
            case "1.2":
                return (
                    <>
                        <h2>Diario de Síntomas</h2>
                        <p>Identificarás lo que te causa ansiedad y podrás trabajar en reducir esos desencadenantes.</p>
                        <div className="preview">
                            <div className="text-content">
                                <ul className="steps-list">
                                    <li><strong>Paso 1:</strong> Lleva un cuaderno y anota cada día:
                                        <ul>
                                            <li>La intensidad de tu ansiedad (escala 1-10).</li>
                                            <li>Qué eventos la desencadenaron.</li>
                                            <li>Cómo reaccionaste.</li>
                                        </ul>
                                    </li>
                                    <li><strong>Paso 2:</strong> Revisa el registro semanalmente y observa patrones.</li>
                                </ul>
                            </div>
                            <div className="image-content">
                                <img src="icons/Rs2.webp" alt="Registro de Síntomas" />
                            </div>
                        </div>
                    </>
                );
            case "1.3":
                return (
                    <>
                        <h2>Mindfulness Avanzado</h2>
                        <p>Aprenderás a controlar tus pensamientos ansiosos y a encontrar tranquilidad incluso en días difíciles.</p>
                        <div className="preview">
                            <div className="text-content">
                                <ul className="steps-list">
                                    <li><strong>Paso 1:</strong> Busca meditaciones guiadas para la ansiedad en plataformas como YouTube o apps especializadas.</li>
                                    <li><strong>Paso 2:</strong> Dedica al menos 5 minutos diarios a escuchar y practicar la meditación.</li>
                                    <li><strong>Paso 3:</strong> Intenta aumentar el tiempo conforme te sientas más cómodo/a.</li>
                                </ul>
                            </div>
                            <div className="image-content">
                                <img src="icons/Rs3.webp" alt="Meditación Guiada" />
                            </div>
                        </div>
                    </>
                );
            case "1.4":
                return (
                    <>
                        <h2>Terapias Integrativas</h2>
                        <p>Al hacer ejercicio, liberarás tensiones y mejorarás tu estado de ánimo de forma natural.</p>
                        <div className="preview">
                            <div className="text-content">
                                <ul className="steps-list">
                                    <li><strong>Paso 1:</strong> Elige una actividad física que disfrutes, como bailar, correr o nadar.</li>
                                    <li><strong>Paso 2:</strong> Practica durante 30 minutos al menos tres veces a la semana.</li>
                                    <li><strong>Paso 3:</strong> Aumenta la intensidad gradualmente si te sientes preparado/a.</li>
                                </ul>
                            </div>
                            <div className="image-content">
                                <img src="icons/Rs4.webp" alt="Ejercicio Físico" />
                            </div>
                        </div>
                    </>
                );
            case "1.5":
                return (
                    <>
                        <h2>Enfoque Cognitivo-Conductual (TCC)</h2>
                        <p>Tendrás un plan personalizado para reducir tu ansiedad, con apoyo profesional que te guiará paso a paso.</p>
                        <div className="preview">
                            <div className="text-content">
                                <ul className="steps-list">
                                    <li><strong>Paso 1:</strong> Investiga sobre terapeutas especializados en ansiedad en tu área o consulta en línea.</li>
                                    <li><strong>Paso 2:</strong> Agenda una consulta inicial y explica tus síntomas y preocupaciones.</li>
                                    <li><strong>Paso 3:</strong> Trabaja junto a tu terapeuta en ejercicios específicos entre sesiones.</li>
                                </ul>
                            </div>
                            <div className="image-content">
                                <img src="icons/Rs5.webp" alt="Terapia Cognitivo-Conductual" />
                            </div>
                        </div>
                    </>
                );
            default:
                return (
                    <>
                        <h2>Selecciona un tutorial</h2>
                        <p>Elige un tema del menú de la izquierda para ver el contenido.</p>
                    </>
                );
        }
    };

    return (
        <div className="container">
            <header className="header">
                <div className="logo" onClick={() => navigate('/')}></div>
                <nav>
                    <ul>
                        <li><a href="recomSevero">Tutoriales</a></li>
                        <li><a href="formulario">Formulario</a></li>
                        <li><a href="menuUser">Menú</a></li>
                    </ul>
                </nav>
                <div className="user-info">
                    <span className="user-name">Anima Agrawal</span>
                    <span className="location">U.P. India</span>
                </div>
            </header>

            <main className="main-content">
                <div className="row">
                    <div className="col-2">
                        <aside className="sidebar">
                            <h3>Recomendaciones</h3>
                            <ul>
                                <li onClick={() => handleTutorialSelection("1.1")} className={selectedTutorial === "1.1" ? "highlight" : ""}>
                                    Exposición Gradual
                                </li>
                                <li onClick={() => handleTutorialSelection("1.2")} className={selectedTutorial === "1.2" ? "highlight" : ""}>
                                    Diario de Síntomas
                                </li>
                                <li onClick={() => handleTutorialSelection("1.3")} className={selectedTutorial === "1.3" ? "highlight" : ""}>
                                    Mindfulness Avanzado
                                </li>
                                <li onClick={() => handleTutorialSelection("1.4")} className={selectedTutorial === "1.4" ? "highlight" : ""}>
                                    Terapias Integrativas
                                </li>
                                <li onClick={() => handleTutorialSelection("1.5")} className={selectedTutorial === "1.5" ? "highlight" : ""}>
                                    Enfoque Cognitivo-Conductual (TCC)
                                </li>
                            </ul>
                        </aside>
                    </div>
                    <div className="col-10">
                        <section className={`content ${animationClass}`}>
                            {renderContent()} {/* Muestra el contenido según el tutorial seleccionado */}
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default ReSeveroPage;
