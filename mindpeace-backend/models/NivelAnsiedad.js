const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const NivelAnsiedadSchema = new Schema({
    Descripcion_Nivel: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model('NivelAnsiedad', NivelAnsiedadSchema);
