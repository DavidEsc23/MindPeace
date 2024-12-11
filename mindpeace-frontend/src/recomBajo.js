import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './rbajo.css';

function RebajoPage() {
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
                        <my-title>Respiración Profunda</my-title>
                        <p>Con este ejercicio, sentirás cómo tu mente y cuerpo se calman, ayudándote a manejar el estrés del día a día.</p>
                        <div className="preview">
                            <div className="text-content">
                                <ul className="steps-list">
                                    <li><strong>Paso 1:</strong> Siéntate en una posición cómoda y cierra los ojos.</li>
                                    <li><strong>Paso 2:</strong> Inhala lentamente por la nariz durante 4 segundos.</li>
                                    <li><strong>Paso 3:</strong> Mantén la respiración durante 7 segundos.</li>
                                    <li><strong>Paso 4:</strong> Exhala suavemente por la boca durante 8 segundos.</li>
                                    <li><strong>Paso 5:</strong> Repite de 5 a 10 veces.</li>
                                </ul>
                            </div>
                            <div className="image-content">
                                <img src="icons/Rb1.webp" alt="Ejercicio de Respiración" />
                            </div>
                        </div>
                    </>
                );
            case "1.2":
                return (
                    <>
                        <my-title>Mindfulness</my-title>
                        <p>Este ejercicio te ayudará a mantenerte en el presente, alejando pensamientos que generan ansiedad.</p>
                        <div className="preview">
                            <div className="text-content">
                                <ul className="steps-list">
                                    <li><strong>Paso 1:</strong> Detente y observa cinco cosas a tu alrededor.</li>
                                    <li><strong>Paso 2:</strong> Identifica cuatro cosas que puedas tocar.</li>
                                    <li><strong>Paso 3:</strong> Presta atención a tres sonidos que puedas escuchar.</li>
                                    <li><strong>Paso 4:</strong> Observa dos cosas que puedas oler.</li>
                                    <li><strong>Paso 5:</strong> Nota una cosa que puedas saborear.</li>
                                </ul>
                            </div>
                            <div className="image-content">
                                <img src="icons/Rb2.webp" alt="Grounding Image" />
                            </div>
                        </div>
                    </>
                );
            case "1.3":
                return (
                    <>
                        <my-title>Organización</my-title>
                        <p>Te sentirás más enfocado/a y organizado/a, evitando el estrés por el desorden en tus actividades.</p>
                        <div className="preview">
                            <div className="text-content">
                                <ul className="steps-list">
                                    <li><strong>Paso 1:</strong> Dedica 10 minutos al final del día para planear el siguiente.</li>
                                    <li><strong>Paso 2:</strong> Haz una lista de todas las tareas que necesitas completar.</li>
                                    <li><strong>Paso 3:</strong> Marca las tres tareas más importantes y decide cuándo las harás.</li>
                                    <li><strong>Paso 4:</strong> Asigna tiempo específico a cada tarea.</li>
                                </ul>
                            </div>
                            <div className="image-content">
                                <img src="icons/Rb3.webp" alt="Organización y Planificación" />
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
                        <li><a href="recomBajo">Tutoriales</a></li>
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
                                    Respiración Profunda
                                </li>
                                <li onClick={() => handleTutorialSelection("1.2")} className={selectedTutorial === "1.2" ? "highlight" : ""}>
                                    Mindfulness
                                </li>
                                <li onClick={() => handleTutorialSelection("1.3")} className={selectedTutorial === "1.3" ? "highlight" : ""}>
                                    Organización
                                </li>
                            </ul>
                            {/* Agrega más tutoriales aquí si es necesario */}
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

export default RebajoPage;
