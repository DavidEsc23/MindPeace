const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PreguntaSchema = new Schema({
    Texto_Pregunta: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model('Pregunta', PreguntaSchema);
