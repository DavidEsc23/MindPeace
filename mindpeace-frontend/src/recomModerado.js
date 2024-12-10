import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './rmedio.css';

function ReModeradoPage() {
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
                        <h2>Diario Emocional</h2>
                        <p>Al escribir, comprenderás mejor tus emociones y podrás reducir la intensidad de tus preocupaciones.</p>
                        <div className="preview">
                            <div className="text-content">
                                <ul className="steps-list">
                                    <li><strong>Paso 1:</strong> Consigue un diario o cuaderno.</li>
                                    <li><strong>Paso 2:</strong> Cada noche, escribe sobre tus emociones del día y cualquier momento en el que hayas sentido ansiedad.</li>
                                    <li><strong>Paso 3:</strong> Describe los pensamientos que acompañaron la ansiedad.</li>
                                    <li><strong>Paso 4:</strong> Pregúntate: “¿Cuán realistas son estos pensamientos?” o “¿Qué evidencia tengo de que son ciertos?”.</li>
                                </ul>
                            </div>
                            <div className="image-content">
                                <img src="icons/Rm1.webp" alt="MindPeace Image" />
                            </div>
                        </div>
                    </>
                );
            case "1.2":
                return (
                    <>
                        <h2>Liberación de Tensión Física</h2>
                        <p>Sentirás cómo la tensión física desaparece, permitiéndote descansar y aliviar la ansiedad acumulada.</p>
                        <div className="preview">
                            <div className="text-content">
                                <ul className="steps-list">
                                    <li><strong>Paso 1:</strong> Siéntate o acuéstate en un lugar cómodo.</li>
                                    <li><strong>Paso 2:</strong> Empieza por los pies. Tensa los músculos de los pies por 5 segundos, luego relájalos.</li>
                                    <li><strong>Paso 3:</strong> Sube lentamente, pasando por piernas, abdomen, brazos, y termina en la cara.</li>
                                    <li><strong>Paso 4:</strong> Concéntrate en la sensación de relajación en cada parte.</li>
                                </ul>
                            </div>
                            <div className="image-content">
                                <img src="icons/Rm2.webp" alt="Relajación Muscular" />
                            </div>
                        </div>
                    </>
                );
            case "1.3":
                return (
                    <>
                        <h2>Red de Apoyo</h2>
                        <p>Al compartir lo que sientes, te sentirás acompañado/a y comprendido/a, lo que disminuirá tu carga emocional.</p>
                        <div className="preview">
                            <div className="text-content">
                                <ul className="steps-list">
                                    <li><strong>Paso 1:</strong> Identifica una o dos personas de confianza con quienes puedas hablar de tus emociones.</li>
                                    <li><strong>Paso 2:</strong> Programa un momento cada semana o cada quincena para reunirte o hablar por teléfono.</li>
                                    <li><strong>Paso 3:</strong> Expresa tus preocupaciones y escucha su apoyo.</li>
                                </ul>
                            </div>
                            <div className="image-content">
                                <img src="icons/Rm3.webp" alt="Red de Apoyo" />
                            </div>
                        </div>
                    </>
                );
            case "1.4":
                return (
                    <>
                        <h2>Visualización Positiva</h2>
                        <p>Podrás imaginarte superando obstáculos con éxito, lo que te dará confianza y reducirá la ansiedad.</p>
                        <div className="preview">
                            <div className="text-content">
                                <ul className="steps-list">
                                    <li><strong>Paso 1:</strong> Encuentra un lugar tranquilo y cierra los ojos.</li>
                                    <li><strong>Paso 2:</strong> Imagina una situación desafiante. Visualízate manejándola con calma y seguridad.</li>
                                    <li><strong>Paso 3:</strong> Usa afirmaciones positivas, como “Soy capaz” o “Puedo con esto”.</li>
                                </ul>
                            </div>
                            <div className="image-content">
                                <img src="icons/Rm4.webp" alt="Visualización Positiva" />
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
                        <li><a href="recommoderado">Tutoriales</a></li>
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
                                    Diario Emocional
                                </li>
                                <li onClick={() => handleTutorialSelection("1.2")} className={selectedTutorial === "1.2" ? "highlight" : ""}>
                                    Liberación de Tensión Física
                                </li>
                                <li onClick={() => handleTutorialSelection("1.3")} className={selectedTutorial === "1.3" ? "highlight" : ""}>
                                    Red de Apoyo
                                </li>
                                <li onClick={() => handleTutorialSelection("1.4")} className={selectedTutorial === "1.4" ? "highlight" : ""}>
                                    Visualización Positiva
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

export default ReModeradoPage;
