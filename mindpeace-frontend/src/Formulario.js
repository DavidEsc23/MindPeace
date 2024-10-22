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
    const valueMap = {
      No: 0,
      Leve: 1,
      Moderado: 2,
      Bastante: 3
    };
  
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: {
        Texto_Respuesta: option,
        Valor_Respuesta: valueMap[option]
      }
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
          <div className="question-box">
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
                  <button
                    type="button"
                    className={answers[2] === 'No' ? 'active' : ''}
                    onClick={() => handleOptionClick(2, 'No')}> No
                  </button>

                  <button
                    type="button"
                    className={answers[2] === 'Leve' ? 'active' : ''}
                    onClick={() => handleOptionClick(2, 'Leve')}>Leve
                  </button>

                  <button
                    type="button"
                    className={answers[2] === 'Moderado' ? 'active' : ''}
                    onClick={() => handleOptionClick(2, 'Moderado')}>Moderado
                  </button>

                  <button
                    type="button"
                    className={answers[2] === 'Bastante' ? 'active' : ''}
                    onClick={() => handleOptionClick(2, 'Bastante')}>Bastante
                  </button>
                </div>
              </div>
              <div className="question">
                <label>3. ¿Has tenido temblor en las piernas ?</label>
                <div className="options">
                  <button
                    type="button"
                    className={answers[3] === 'No' ? 'active' : ''}
                    onClick={() => handleOptionClick(3, 'No')}> No
                  </button>

                  <button
                    type="button"
                    className={answers[3] === 'Leve' ? 'active' : ''}
                    onClick={() => handleOptionClick(3, 'Leve')}>Leve
                  </button>

                  <button
                    type="button"
                    className={answers[3] === 'Moderado' ? 'active' : ''}
                    onClick={() => handleOptionClick(3, 'Moderado')}>Moderado
                  </button>

                  <button
                    type="button"
                    className={answers[3] === 'Bastante' ? 'active' : ''}
                    onClick={() => handleOptionClick(3, 'Bastante')}>Bastante
                  </button>
                </div>
              </div>
              <div className="question">
                <label>4. ¿Te sientes incapaz de relajarte?</label>
                <div className="options">
                  <button
                    type="button"
                    className={answers[4] === 'No' ? 'active' : ''}
                    onClick={() => handleOptionClick(4, 'No')}> No
                  </button>

                  <button
                    type="button"
                    className={answers[4] === 'Leve' ? 'active' : ''}
                    onClick={() => handleOptionClick(4, 'Leve')}>Leve
                  </button>

                  <button
                    type="button"
                    className={answers[4] === 'Moderado' ? 'active' : ''}
                    onClick={() => handleOptionClick(4, 'Moderado')}>Moderado
                  </button>

                  <button
                    type="button"
                    className={answers[4] === 'Bastante' ? 'active' : ''}
                    onClick={() => handleOptionClick(4, 'Bastante')}>Bastante
                  </button>
                </div>
              </div>
              <div className="question">
                <label>5. ¿Tienes miedo de que ocurra lo peor?</label>
                <div className="options">
                  <button
                    type="button"
                    className={answers[5] === 'No' ? 'active' : ''}
                    onClick={() => handleOptionClick(5, 'No')}> No
                  </button>

                  <button
                    type="button"
                    className={answers[5] === 'Leve' ? 'active' : ''}
                    onClick={() => handleOptionClick(5, 'Leve')}>Leve
                  </button>

                  <button
                    type="button"
                    className={answers[5] === 'Moderado' ? 'active' : ''}
                    onClick={() => handleOptionClick(5, 'Moderado')}>Moderado
                  </button>

                  <button
                    type="button"
                    className={answers[5] === 'Bastante' ? 'active' : ''}
                    onClick={() => handleOptionClick(5, 'Bastante')}>Bastante
                  </button>
                </div>
              </div>
              <div className="question">
                <label>6. ¿Te sientes mareado o con la sensación de que se te va la cabeza?</label>
                <div className="options">
                  <button
                    type="button"
                    className={answers[6] === 'No' ? 'active' : ''}
                    onClick={() => handleOptionClick(6, 'No')}> No
                  </button>

                  <button
                    type="button"
                    className={answers[6] === 'Leve' ? 'active' : ''}
                    onClick={() => handleOptionClick(6, 'Leve')}>Leve
                  </button>

                  <button
                    type="button"
                    className={answers[6] === 'Moderado' ? 'active' : ''}
                    onClick={() => handleOptionClick(6, 'Moderado')}>Moderado
                  </button>

                  <button
                    type="button"
                    className={answers[6] === 'Bastante' ? 'active' : ''}
                    onClick={() => handleOptionClick(6, 'Bastante')}>Bastante
                  </button>
                </div>
              </div>
              <div className="question">
                <label>7. ¿Tienes latidos del corazón fuertes o acelerados?</label>
                <div className="options">
                  <button
                    type="button"
                    className={answers[7] === 'No' ? 'active' : ''}
                    onClick={() => handleOptionClick(7, 'No')}> No
                  </button>

                  <button
                    type="button"
                    className={answers[7] === 'Leve' ? 'active' : ''}
                    onClick={() => handleOptionClick(7, 'Leve')}>Leve
                  </button>

                  <button
                    type="button"
                    className={answers[7] === 'Moderado' ? 'active' : ''}
                    onClick={() => handleOptionClick(7, 'Moderado')}>Moderado
                  </button>

                  <button
                    type="button"
                    className={answers[7] === 'Bastante' ? 'active' : ''}
                    onClick={() => handleOptionClick(7, 'Bastante')}>Bastante
                  </button>
                </div>
              </div>
              <div className="question">
                <label>8. ¿Te sientes inestable?</label>
                <div className="options">
                  <button
                    type="button"
                    className={answers[8] === 'No' ? 'active' : ''}
                    onClick={() => handleOptionClick(8, 'No')}> No
                  </button>

                  <button
                    type="button"
                    className={answers[8] === 'Leve' ? 'active' : ''}
                    onClick={() => handleOptionClick(8, 'Leve')}>Leve
                  </button>

                  <button
                    type="button"
                    className={answers[8] === 'Moderado' ? 'active' : ''}
                    onClick={() => handleOptionClick(8, 'Moderado')}>Moderado
                  </button>

                  <button
                    type="button"
                    className={answers[8] === 'Bastante' ? 'active' : ''}
                    onClick={() => handleOptionClick(8, 'Bastante')}>Bastante
                  </button>
                </div>
              </div>
              <div className="question">
                <label>9. ¿Te sientes asustado o atemorizado?</label>
                <div className="options">
                  <button
                    type="button"
                    className={answers[9] === 'No' ? 'active' : ''}
                    onClick={() => handleOptionClick(9, 'No')}> No
                  </button>

                  <button
                    type="button"
                    className={answers[9] === 'Leve' ? 'active' : ''}
                    onClick={() => handleOptionClick(9, 'Leve')}>Leve
                  </button>

                  <button
                    type="button"
                    className={answers[9] === 'Moderado' ? 'active' : ''}
                    onClick={() => handleOptionClick(9, 'Moderado')}>Moderado
                  </button>

                  <button
                    type="button"
                    className={answers[9] === 'Bastante' ? 'active' : ''}
                    onClick={() => handleOptionClick(9, 'Bastante')}>Bastante
                  </button>
                </div>
              </div>
              <div className="question">
                <label>10. ¿Te sientes nervioso?</label>
                <div className="options">
                  <button
                    type="button"
                    className={answers[10] === 'No' ? 'active' : ''}
                    onClick={() => handleOptionClick(10, 'No')}> No
                  </button>

                  <button
                    type="button"
                    className={answers[10] === 'Leve' ? 'active' : ''}
                    onClick={() => handleOptionClick(10, 'Leve')}>Leve
                  </button>

                  <button
                    type="button"
                    className={answers[10] === 'Moderado' ? 'active' : ''}
                    onClick={() => handleOptionClick(10, 'Moderado')}>Moderado
                  </button>

                  <button
                    type="button"
                    className={answers[10] === 'Bastante' ? 'active' : ''}
                    onClick={() => handleOptionClick(10, 'Bastante')}>Bastante
                  </button>
                </div>
              </div>
              <div className="question">
                <label>11. ¿Tienes sensación de bloqueo?</label>
                <div className="options">
                  <button
                    type="button"
                    className={answers[11] === 'No' ? 'active' : ''}
                    onClick={() => handleOptionClick(11, 'No')}> No
                  </button>

                  <button
                    type="button"
                    className={answers[11] === 'Leve' ? 'active' : ''}
                    onClick={() => handleOptionClick(11, 'Leve')}>Leve
                  </button>

                  <button
                    type="button"
                    className={answers[11] === 'Moderado' ? 'active' : ''}
                    onClick={() => handleOptionClick(11, 'Moderado')}>Moderado
                  </button>

                  <button
                    type="button"
                    className={answers[11] === 'Bastante' ? 'active' : ''}
                    onClick={() => handleOptionClick(11, 'Bastante')}>Bastante
                  </button>
                </div>
              </div>
              <div className="question">
                <label>12. ¿Tienes temblores en las manos?</label>
                <div className="options">
                  <button
                    type="button"
                    className={answers[12] === 'No' ? 'active' : ''}
                    onClick={() => handleOptionClick(12, 'No')}> No
                  </button>

                  <button
                    type="button"
                    className={answers[12] === 'Leve' ? 'active' : ''}
                    onClick={() => handleOptionClick(12, 'Leve')}>Leve
                  </button>

                  <button
                    type="button"
                    className={answers[12] === 'Moderado' ? 'active' : ''}
                    onClick={() => handleOptionClick(12, 'Moderado')}>Moderado
                  </button>

                  <button
                    type="button"
                    className={answers[12] === 'Bastante' ? 'active' : ''}
                    onClick={() => handleOptionClick(12, 'Bastante')}>Bastante
                  </button>
                </div>
              </div>
              <div className="question">
                <label>13. ¿Te sientes inquieto o inseguro?</label>
                <div className="options">
                  <button
                    type="button"
                    className={answers[13] === 'No' ? 'active' : ''}
                    onClick={() => handleOptionClick(13, 'No')}> No
                  </button>

                  <button
                    type="button"
                    className={answers[13] === 'Leve' ? 'active' : ''}
                    onClick={() => handleOptionClick(13, 'Leve')}>Leve
                  </button>

                  <button
                    type="button"
                    className={answers[13] === 'Moderado' ? 'active' : ''}
                    onClick={() => handleOptionClick(13, 'Moderado')}>Moderado
                  </button>

                  <button
                    type="button"
                    className={answers[13] === 'Bastante' ? 'active' : ''}
                    onClick={() => handleOptionClick(13, 'Bastante')}>Bastante
                  </button>
                </div>
              </div>
              <div className="question">
                <label>14. ¿Tienes miedo de perder el control?</label>
                <div className="options">
                  <button
                    type="button"
                    className={answers[14] === 'No' ? 'active' : ''}
                    onClick={() => handleOptionClick(14, 'No')}> No
                  </button>

                  <button
                    type="button"
                    className={answers[14] === 'Leve' ? 'active' : ''}
                    onClick={() => handleOptionClick(14, 'Leve')}>Leve
                  </button>

                  <button
                    type="button"
                    className={answers[14] === 'Moderado' ? 'active' : ''}
                    onClick={() => handleOptionClick(14, 'Moderado')}>Moderado
                  </button>

                  <button
                    type="button"
                    className={answers[14] === 'Bastante' ? 'active' : ''}
                    onClick={() => handleOptionClick(14, 'Bastante')}>Bastante
                  </button>
                </div>
              </div>
              <div className="question">
                <label>15. ¿Tienes sensación de ahogo?</label>
                <div className="options">
                  <button
                    type="button"
                    className={answers[15] === 'No' ? 'active' : ''}
                    onClick={() => handleOptionClick(15, 'No')}> No
                  </button>

                  <button
                    type="button"
                    className={answers[15] === 'Leve' ? 'active' : ''}
                    onClick={() => handleOptionClick(15, 'Leve')}>Leve
                  </button>

                  <button
                    type="button"
                    className={answers[15] === 'Moderado' ? 'active' : ''}
                    onClick={() => handleOptionClick(15, 'Moderado')}>Moderado
                  </button>

                  <button
                    type="button"
                    className={answers[15] === 'Bastante' ? 'active' : ''}
                    onClick={() => handleOptionClick(15, 'Bastante')}>Bastante
                  </button>
                </div>
              </div>
              <div className="question">
                <label>16. ¿Tienes temor a morir?</label>
                <div className="options">
                  <button
                    type="button"
                    className={answers[16] === 'No' ? 'active' : ''}
                    onClick={() => handleOptionClick(16, 'No')}> No
                  </button>

                  <button
                    type="button"
                    className={answers[16] === 'Leve' ? 'active' : ''}
                    onClick={() => handleOptionClick(16, 'Leve')}>Leve
                  </button>

                  <button
                    type="button"
                    className={answers[16] === 'Moderado' ? 'active' : ''}
                    onClick={() => handleOptionClick(16, 'Moderado')}>Moderado
                  </button>

                  <button
                    type="button"
                    className={answers[16] === 'Bastante' ? 'active' : ''}
                    onClick={() => handleOptionClick(16, 'Bastante')}>Bastante
                  </button>
                </div>
              </div>
              <div className="question">
                <label>17. ¿Sientes miedo?</label>
                <div className="options">
                  <button
                    type="button"
                    className={answers[17] === 'No' ? 'active' : ''}
                    onClick={() => handleOptionClick(17, 'No')}> No
                  </button>

                  <button
                    type="button"
                    className={answers[17] === 'Leve' ? 'active' : ''}
                    onClick={() => handleOptionClick(17, 'Leve')}>Leve
                  </button>

                  <button
                    type="button"
                    className={answers[17] === 'Moderado' ? 'active' : ''}
                    onClick={() => handleOptionClick(17, 'Moderado')}>Moderado
                  </button>

                  <button
                    type="button"
                    className={answers[17] === 'Bastante' ? 'active' : ''}
                    onClick={() => handleOptionClick(17, 'Bastante')}>Bastante
                  </button>
                </div>
              </div>
              <div className="question">
                <label>18. ¿Tienes problemas digestivos?</label>
                <div className="options">
                  <button
                    type="button"
                    className={answers[18] === 'No' ? 'active' : ''}
                    onClick={() => handleOptionClick(18, 'No')}> No
                  </button>

                  <button
                    type="button"
                    className={answers[18] === 'Leve' ? 'active' : ''}
                    onClick={() => handleOptionClick(18, 'Leve')}>Leve
                  </button>

                  <button
                    type="button"
                    className={answers[18] === 'Moderado' ? 'active' : ''}
                    onClick={() => handleOptionClick(18, 'Moderado')}>Moderado
                  </button>

                  <button
                    type="button"
                    className={answers[18] === 'Bastante' ? 'active' : ''}
                    onClick={() => handleOptionClick(18, 'Bastante')}>Bastante
                  </button>
                </div>
              </div>
              <div className="question">
                <label>19. ¿Tienes desvanecimientos?</label>
                <div className="options">
                  <button
                    type="button"
                    className={answers[19] === 'No' ? 'active' : ''}
                    onClick={() => handleOptionClick(19, 'No')}> No
                  </button>

                  <button
                    type="button"
                    className={answers[19] === 'Leve' ? 'active' : ''}
                    onClick={() => handleOptionClick(19, 'Leve')}>Leve
                  </button>

                  <button
                    type="button"
                    className={answers[19] === 'Moderado' ? 'active' : ''}
                    onClick={() => handleOptionClick(19, 'Moderado')}>Moderado
                  </button>

                  <button
                    type="button"
                    className={answers[19] === 'Bastante' ? 'active' : ''}
                    onClick={() => handleOptionClick(19, 'Bastante')}>Bastante
                  </button>
                </div>
              </div>
              <div className="question">
                <label>20. ¿Tienes rubor facial?</label>
                <div className="options">
                  <button
                    type="button"
                    className={answers[20] === 'No' ? 'active' : ''}
                    onClick={() => handleOptionClick(20, 'No')}> No
                  </button>

                  <button
                    type="button"
                    className={answers[20] === 'Leve' ? 'active' : ''}
                    onClick={() => handleOptionClick(20, 'Leve')}>Leve
                  </button>

                  <button
                    type="button"
                    className={answers[20] === 'Moderado' ? 'active' : ''}
                    onClick={() => handleOptionClick(20, 'Moderado')}>Moderado
                  </button>

                  <button
                    type="button"
                    className={answers[20] === 'Bastante' ? 'active' : ''}
                    onClick={() => handleOptionClick(20, 'Bastante')}>Bastante
                  </button>
                </div>
              </div>
              <div className="question">
                <label>21. ¿Tienes sudores fríos o calientes?</label>
                <div className="options">
                  <button
                    type="button"
                    className={answers[21] === 'No' ? 'active' : ''}
                    onClick={() => handleOptionClick(21, 'No')}> No
                  </button>

                  <button
                    type="button"
                    className={answers[21] === 'Leve' ? 'active' : ''}
                    onClick={() => handleOptionClick(21, 'Leve')}>Leve
                  </button>

                  <button
                    type="button"
                    className={answers[21] === 'Moderado' ? 'active' : ''}
                    onClick={() => handleOptionClick(21, 'Moderado')}>Moderado
                  </button>

                  <button
                    type="button"
                    className={answers[21] === 'Bastante' ? 'active' : ''}
                    onClick={() => handleOptionClick(21, 'Bastante')}>Bastante
                  </button>
                </div>
              </div>

              <button className="start-button" type="button" onClick={handleResults}>Ver Resultados</button>
            </form>
          </div>
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
