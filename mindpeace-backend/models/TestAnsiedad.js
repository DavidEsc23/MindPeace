const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TestAnsiedadSchema = new Schema({
    Fecha: {
        type: Date,
        default: Date.now
    },
    Resultado: {
        type: String,
        required: true
    },
    ID_Usuario: {
        type: Schema.Types.ObjectId,
        ref: 'User', 
        required: true
    },
    ID_NIVEL: {
        type: Schema.Types.ObjectId,
        ref: 'Nivel', 
        required: true
    }
});


module.exports = mongoose.model('TestAnsiedad', TestAnsiedadSchema);
