import React, { useState } from 'react';
import './form.css';  // Asegúrate de tener un archivo CSS para los estilos

function FormularioPage() {
  const [showQuestions, setShowQuestions] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState([]);

  const handleStart = () => {
    setShowQuestions(true); // Mostrar preguntas y ocultar cuerpo-note
  };

  const handleResults = () => {
    setShowResults(true); // Mostrar resultados y ocultar formulario
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
        <div className="logo"></div>
        <nav>
          <ul>
            <li><a href="#tutoriales">Tutoriales</a></li>
            <li><a href="#formulario">Formulario</a></li>
            <li><a href="#menu">Menú</a></li>
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
          <h3>Cuestionario de Ansiedad</h3>
          <form>
            <div className="question">
              <label>1. ¿Te sientes torpe o entumecido?</label>
              <div className="options">
                <button
                  type="button"
                  className={answers[1] === 'No' ? 'active' : ''}
                  onClick={() => handleOptionClick(1, 'No')}> No 
                </button>
                  
                <button
                  type="button"
                  className={answers[1] === 'Leve' ? 'active' : ''}
                  onClick={() => handleOptionClick(1, 'Leve')}>Leve
                </button>

                <button
                  type="button"
                  className={answers[1] === 'Moderado' ? 'active' : ''}
                  onClick={() => handleOptionClick(1, 'Moderado')}>Moderado
                </button>

                <button
                  type="button"
                  className={answers[1] === 'Bastante' ? 'active' : ''}
                  onClick={() => handleOptionClick(1, 'Bastante')}>Bastante
                </button>
              </div>
            </div>

            <div className="question">
              <label>2. ¿Te has sentido acalorado?</label>
              <div className="options">
                <button type="button">No</button>
                <button type="button">Leve</button>
                <button type="button">Moderado</button>
                <button type="button">Bastante</button>
              </div>
            </div>
            <div className="question">
              <label>3. ¿Has tenido temblor en las piernas ?</label>
              <div className="options">
                <button type="button">No</button>
                <button type="button">Leve</button>
                <button type="button">Moderado</button>
                <button type="button">Bastante</button>
              </div>
            </div>
            <div className="question">
              <label>4. ¿Te sientes incapaz de relajarte?</label>
              <div className="options">
                <button type="button">No</button>
                <button type="button">Leve</button>
                <button type="button">Moderado</button>
                <button type="button">Bastante</button>
              </div>
            </div>
            <div className="question">
              <label>5. ¿Tienes miedo de que ocurra lo peor?</label>
              <div className="options">
                <button type="button">No</button>
                <button type="button">Leve</button>
                <button type="button">Moderado</button>
                <button type="button">Bastante</button>
              </div>
            </div>
            <div className="question">
              <label>6. ¿Te sientes mareado o con la sensación de que se te va la cabeza?</label>
              <div className="options">
                <button type="button">No</button>
                <button type="button">Leve</button>
                <button type="button">Moderado</button>
                <button type="button">Bastante</button>
              </div>
            </div>
            <div className="question">
              <label>7. ¿Tienes latidos del corazón fuertes o acelerados?</label>
              <div className="options">
                <button type="button">No</button>
                <button type="button">Leve</button>
                <button type="button">Moderado</button>
                <button type="button">Bastante</button>
              </div>
            </div>
            <div className="question">
              <label>8. ¿Te sientes inestable?</label>
              <div className="options">
                <button type="button">No</button>
                <button type="button">Leve</button>
                <button type="button">Moderado</button>
                <button type="button">Bastante</button>
              </div>
            </div>
            <div className="question">
              <label>9. ¿Te sientes asustado o atemorizado?</label>
              <div className="options">
                <button type="button">No</button>
                <button type="button">Leve</button>
                <button type="button">Moderado</button>
                <button type="button">Bastante</button>
              </div>
            </div>
            <div className="question">
              <label>10. ¿Te sientes nervioso?</label>
              <div className="options">
                <button type="button">No</button>
                <button type="button">Leve</button>
                <button type="button">Moderado</button>
                <button type="button">Bastante</button>
              </div>
            </div>
            <div className="question">
              <label>11. ¿Tienes sensación de bloqueo?</label>
              <div className="options">
                <button type="button">No</button>
                <button type="button">Leve</button>
                <button type="button">Moderado</button>
                <button type="button">Bastante</button>
              </div>
            </div>
            <div className="question">
              <label>12. ¿Tienes temblores en las manos?</label>
              <div className="options">
                <button type="button">No</button>
                <button type="button">Leve</button>
                <button type="button">Moderado</button>
                <button type="button">Bastante</button>
              </div>
            </div>
            <div className="question">
              <label>13. ¿Te sientes inquieto o inseguro?</label>
              <div className="options">
                <button type="button">No</button>
                <button type="button">Leve</button>
                <button type="button">Moderado</button>
                <button type="button">Bastante</button>
              </div>
            </div>
            <div className="question">
              <label>14. ¿Tienes miedo de perder el control?</label>
              <div className="options">
                <button type="button">No</button>
                <button type="button">Leve</button>
                <button type="button">Moderado</button>
                <button type="button">Bastante</button>
              </div>
            </div>
            <div className="question">
              <label>15. ¿Tienes sensación de ahogo?</label>
              <div className="options">
                <button type="button">No</button>
                <button type="button">Leve</button>
                <button type="button">Moderado</button>
                <button type="button">Bastante</button>
              </div>
            </div>
            <div className="question">
              <label>16. ¿Tienes temor a morir?</label>
              <div className="options">
                <button type="button">No</button>
                <button type="button">Leve</button>
                <button type="button">Moderado</button>
                <button type="button">Bastante</button>
              </div>
            </div>
            <div className="question">
              <label>17. ¿Sientes miedo?</label>
              <div className="options">
                <button type="button">No</button>
                <button type="button">Leve</button>
                <button type="button">Moderado</button>
                <button type="button">Bastante</button>
              </div>
            </div>
            <div className="question">
              <label>18. ¿Tienes problemas digestivos?</label>
              <div className="options">
                <button type="button">No</button>
                <button type="button">Leve</button>
                <button type="button">Moderado</button>
                <button type="button">Bastante</button>
              </div>
            </div>
            <div className="question">
              <label>19. ¿Tienes desvanecimientos?</label>
              <div className="options">
                <button type="button">No</button>
                <button type="button">Leve</button>
                <button type="button">Moderado</button>
                <button type="button">Bastante</button>
              </div>
            </div>
            <div className="question">
              <label>20. ¿Tienes rubor facial?</label>
              <div className="options">
                <button type="button">No</button>
                <button type="button">Leve</button>
                <button type="button">Moderado</button>
                <button type="button">Bastante</button>
              </div>
            </div>
            <div className="question">
              <label>21. ¿Tienes sudores fríos o calientes?</label>
              <div className="options">
                <button type="button">No</button>
                <button type="button">Leve</button>
                <button type="button">Moderado</button>
                <button type="button">Bastante</button>
              </div>
            </div>

            {/* Agrega más preguntas aquí */}
            <button className="start-button" type="button" onClick={handleResults}>Ver Resultados</button>
          </form>
        </div>
      )}

      {showResults && (
        <div className="results-container">
          <h3>Resultados del Test de Ansiedad</h3>
          <p>Gracias por completar el test. Según tus respuestas, los niveles de ansiedad varían en las siguientes áreas:</p>
          <ul>
            <li>Nerviosismo: 3</li>
            <li>Dificultad para relajarse: 2</li>
            {/* Puedes mostrar los resultados dinámicamente según las respuestas */}
          </ul>
        </div>
      )}
    </div>
  );
}

export default FormularioPage;
