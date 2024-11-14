import React, { useState } from 'react';
import axios from 'axios';
import './form.css';
import { useNavigate } from 'react-router-dom'

function FormularioPage() {
  const [showQuestions, setShowQuestions] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState({});
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate()

  const userId = localStorage.getItem('userId'); // Obtén el userId si lo guardas en el localStorage


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
    "¿Tienes temblores en las manos?"
  ];

  const handleStart = () => {
    setShowQuestions(true); // Mostrar preguntas y ocultar cuerpo-note
  };

  const handleResults = async () => {
    setShowResults(true); // Mostrar resultados y ocultar formulario

    // Enviar las respuestas al backend
    try {
      const response = await axios.post('http://localhost:5000/api/results', { userId, answers });
      console.log('Resultados enviados correctamente:', response.data);
      setSuccess(true);
      setError(null);
    } catch (error) {
      console.error('Error al enviar los resultados:', error);
      setError('Hubo un problema al enviar tus respuestas. Intenta de nuevo.');
      setSuccess(false);
    }
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
            <li><a href="#tutoriales">Tutoriales</a></li>
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
            <p>Gracias por completar el test. Tus respuestas han sido guardadas exitosamente.</p>
          ) : (
            <p>{error || 'Procesando tus resultados...'}</p>
          )}
          <ul>
            {Object.entries(answers).map(([question, answer]) => (
              <li key={question}>Pregunta {question}: {answer}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default FormularioPage;
