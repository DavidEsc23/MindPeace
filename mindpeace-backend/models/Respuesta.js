const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RespuestaSchema = new Schema({
  ID_Test: {
    type: Schema.Types.ObjectId,
    ref: 'TestAnsiedad', // Relación con el test
    required: true
  },
  ID_Pregunta: {
    type: Schema.Types.ObjectId,
    ref: 'Pregunta', // Relación con la pregunta
    required: true
  },
  Texto_Respuesta: {
    type: String,
    enum: ['No', 'Leve', 'Moderado', 'Bastante'], // Respuestas válidas
    required: true
  },
  Valor_Respuesta: { // Campo que almacena el valor de la respuesta
    type: Number,
    enum: [0, 1, 2, 3], // Puntuaciones válidas
    required: true
  }
});

module.exports = mongoose.model('Respuesta', RespuestaSchema);
