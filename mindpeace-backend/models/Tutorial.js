const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TutorialSchema = new Schema({
    Titulo: {
        type: String,
        required: true
    },
    Descripcion: {
        type: String,
        required: false
    },
    Enlace_Video: {
        type: String,
        required: true
    },
    Fecha_Publicacion: {
        type: Date,
        default: Date.now
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


module.exports = mongoose.model('Tutorial', TutorialSchema);
