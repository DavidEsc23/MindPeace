// routes/resultadoRoutes.js
const express = require('express');
const router = express.Router();
const TestResultado = require('../models/testResultado');

router.post('/', async (req, res) => {
  const { userId, answers } = req.body; // Recibe `userId` y `answers` desde el frontend

  // Formatea las respuestas para almacenarlas en el esquema adecuado
  const respuestasFormateadas = Object.keys(answers).map((key) => ({
    pregunta: Number(key),
    respuesta: answers[key],
  }));

  try {
    const newResult = new TestResultado({
      userId,
      respuestas: respuestasFormateadas,
    });

    await newResult.save();
    res.status(201).json({ message: 'Resultados guardados correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al guardar resultados', error });
  }
});

module.exports = router;
