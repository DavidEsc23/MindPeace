const TestAnsiedad = require('../models/TestAnsiedad');
const User = require('../models/User');

// Función para calcular el nivel de ansiedad
const calcularNivelAnsiedad = (respuestas) => {
    let puntaje = 0;

    // Recorre las respuestas y calcula el puntaje
    respuestas.forEach(respuesta => {
        switch (respuesta) {
            case 'No':
                puntaje += 0;
                break;
            case 'Leve':
                puntaje += 1;
                break;
            case 'Moderado':
                puntaje += 2;
                break;
            case 'Bastante':
                puntaje += 3;
                break;
            default:
                break;
        }
    });

    // Determina el nivel de ansiedad basado en el puntaje
    if (puntaje <= 10) {
        return 'Bajo';
    } else if (puntaje <= 20) {
        return 'Moderado';
    } else {
        return 'Alto';
    }
};

// Controlador para guardar el test de ansiedad
const saveAnxietyTest = async (req, res) => {
    const { userId, respuestas } = req.body; // Asegúrate de que estás recibiendo respuestas aquí

    try {
        // Calcula el nivel de ansiedad
        const resultado = calcularNivelAnsiedad(respuestas);

        // Crea un nuevo registro de test de ansiedad
        const newTest = new TestAnsiedad({
            ID_Usuario: userId,
            Resultado: resultado,
        });

        // Guarda el test en la base de datos
        const savedTest = await newTest.save();

        // Devuelve el nivel de ansiedad al frontend
        res.status(201).json({
            message: 'Test de ansiedad guardado correctamente',
            nivelAnsiedad: resultado, // Asegúrate de devolver el nivel de ansiedad
            test: savedTest,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al guardar el test de ansiedad' });
    }
};

// Controlador para obtener los tests de ansiedad de un usuario
const getAnxietyTestsByUser = async (req, res) => {
    const { userId } = req.params; // Obtiene el userId de los parámetros de la URL

    try {
        // Busca los tests de ansiedad asociados al usuario
        const tests = await TestAnsiedad.find({ ID_Usuario: userId });

        if (tests.length === 0) {
            return res.status(404).json({ message: 'No se encontraron tests de ansiedad para este usuario' });
        }

        // Devuelve los tests encontrados
        res.status(200).json(tests);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener los tests de ansiedad del usuario' });
    }
};

module.exports = {
    saveAnxietyTest,
    getAnxietyTestsByUser,
};
