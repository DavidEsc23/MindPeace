const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const RespuestaSchema = new Schema({
    ID_Test: {
        type: Schema.Types.ObjectId,
        ref: 'TestAnsiedad', 
        required: true
    },
    ID_Pregunta: {
        type: Schema.Types.ObjectId,
        ref: 'Pregunta', 
        required: true
    },
    Texto_Respuesta: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model('Respuesta', RespuestaSchema);
