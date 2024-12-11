  import React, { useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  import './form.css';  // Asegúrate de tener un archivo CSS para los estilos

  function FormularioPage() {
    const [showQuestions, setShowQuestions] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [answers, setAnswers] = useState({});
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const preguntas = [
      "¿Te sientes torpe o entumecido?",
      "¿Te has sentido acalorado?",
      "¿Has tenido temblor en las piernas?",
      "¿Te sientes incapaz de relajarte?",
      "¿Tienes miedo de que ocurra lo peor?",
      "¿Te sientes mareado o con la sensación de que se te va la cabeza?",
      "¿Tienes latidos del corazón fuertes o acelerados?",
      "¿Te sientes inestable?",
      "¿Te sientes asustado o atemorizado?",
      "¿Te sientes nervioso?",
      "¿Tienes sensación de bloqueo?",
      "¿Tienes temblores en las manos?",
      "¿Te sientes inquieto o inseguro?",
      "¿Tienes miedo de perder el control?",
      "¿Tienes sensación de ahogo?",
      "¿Tienes temor a morir?",
      "¿Sientes miedo?",
      "¿Tienes problemas digestivos?",
      "¿Tienes desvanecimientos?",
      "¿Tienes rubor facial?",
      "¿Tienes sudores fríos o calientes?"
    ];

    const handleStart = () => {
      setShowQuestions(true); // Mostrar preguntas y ocultar cuerpo-note
    };

    const handleResults = () => {
      setShowResults(true); // Mostrar resultados y ocultar formulario

      // Mapeo de las respuestas a valores numéricos
      const severityValues = {
        "No": 0,
        "Leve": 1,
        "Moderado": 2,
        "Bastante": 3
    };

    // Calcular el puntaje total
    let totalScore = 0;
    Object.values(answers).forEach(answer => {
      totalScore += severityValues[answer] || 0;  // Si no hay respuesta, se toma como 0
    });

    // Determinar el nivel de ansiedad basado en el puntaje total
    let anxietyLevel = '';
    if (totalScore >= 0 && totalScore <= 5) {
      anxietyLevel = 'Ansiedad Mínima';
    } else if (totalScore >= 6 && totalScore <= 15) {
      anxietyLevel = 'Ansiedad Leve';
    } else if (totalScore >= 16 && totalScore <= 30) {
      anxietyLevel = 'Ansiedad Moderada';
    } else if (totalScore >= 31 && totalScore <= 63) {
      anxietyLevel = 'Ansiedad Severa';
    }

    // Establecer el resultado y el nivel de ansiedad
    setAnswers((prevAnswers) => ({
        ...prevAnswers,
        anxietyLevel, // Agregar el nivel de ansiedad al estado de respuestas
      }));

      setSuccess(true);
      setError(null);
    };

    const handleOptionClick = (questionIndex, option) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: option,
    }));
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

        <div className="main-content">
          <h1>Test de Ansiedad</h1>
          <h2>Evaluación Rápida de tu Nivel de Ansiedad</h2>
        </div>

        {!showQuestions && !showResults && (
          <div className="cuerpo-note">
            <p>Este test está diseñado para ayudarte a identificar si estás experimentando ansiedad. Responde sinceramente a las siguientes preguntas para obtener una evaluación precisa. Tu privacidad es nuestra prioridad y tus respuestas serán tratadas con la máxima confidencialidad.</p>
            <p>Inventario de Ansiedad de Beck (BAI): Contiene 21 preguntas en las que indica la severidad de los síntomas que ha experimentado en la última semana.</p>
            <button className="start-button" onClick={handleStart}>EMPEZAR</button>
            <div className="warning-message">
              <img src="/icons/Group 7.svg" alt="icono de advertencia" className="warning-icon" />
              <p>Este test es solamente un recurso para guiarte y no sustituye la opinión de un médico o profesional de la salud.</p>
            </div>
          </div>
        )}

        {showQuestions && !showResults && (
          <div className="questions-container">
            <div className="question-box">
              <h3>Cuestionario de Ansiedad</h3>
              <form>
                {preguntas.map((pregunta, index) => (
                  <div key={index + 1} className="question">
                    <label>{index + 1}. {pregunta}</label>
                    <div className="options">
                      {['No', 'Leve', 'Moderado', 'Bastante'].map(option => (
                        <button
                          key={option}
                          type="button"
                          className={answers[index + 1] === option ? 'active' : ''}
                          onClick={() => handleOptionClick(index + 1, option)}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
                <button className="start-button" type="button" onClick={handleResults}>Ver Resultados</button>
              </form>
            </div>
          </div>
        )}

        {showResults && (
          <div className="results-container">
            <h3>Resultados del Test de Ansiedad</h3>
            {success ? (
              <p>Gracias por completar el test. Aquí están los resultados:</p>
            ) : (
              <p>{error || 'Procesando tus resultados...'}</p>
            )}
            <ul>
              {Object.entries(answers).map(([question, answer]) => (
                <li key={question}>Pregunta {question}: {answer}</li>
              ))}
              <li><strong>Resultado total:</strong> {answers.anxietyLevel}</li>
            </ul>
            {/* Botón condicional basado en el nivel de ansiedad */}
            {answers.anxietyLevel === 'Ansiedad Mínima' && (
              <button className="start-button" onClick={() => navigate('/recomBajo')}>Ver Recursos para Ansiedad Baja</button>
            )}
            {answers.anxietyLevel === 'Ansiedad Leve' && (
              <button className="start-button" onClick={() => navigate('/recomModerado')}>Ver Recursos para Ansiedad Moderada</button>
            )}
            {answers.anxietyLevel === 'Ansiedad Moderada' && (
              <button className="start-button" onClick={() => navigate('/recomModerado')}>Ver Recursos para Ansiedad Moderada</button>
            )}
            {answers.anxietyLevel === 'Ansiedad Severa' && (
              <button className="start-button" onClick={() => navigate('/recomSevero')}>Ver Recursos para Ansiedad Severa</button>
            )}
          </div>
        )}
      </div>
    );
  }

  export default FormularioPage;
