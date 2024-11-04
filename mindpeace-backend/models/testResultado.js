// models/TestResultado.js
const mongoose = require('mongoose');

const testResultadoSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Identificador del usuario que tomó el test
  respuestas: [
    {
      pregunta: Number,     // Número de la pregunta
      respuesta: String,    // Respuesta seleccionada: "No", "Leve", "Moderado", o "Bastante"
    },
  ],
  fecha: { type: Date, default: Date.now }, // Fecha en que se tomó el test
});

module.exports = mongoose.model('TestResultado', testResultadoSchema);
