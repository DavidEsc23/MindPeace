const express = require('express');
const router = express.Router();
const Respuesta = require('../models/Respuesta'); // Asegúrate de que el modelo esté en models/Respuesta.js

// Crear una nueva respuesta
router.post('/', async (req, res) => {
    const { ID_Test, ID_Pregunta, Texto_Respuesta } = req.body;

    try {
        const nuevaRespuesta = new Respuesta({ ID_Test, ID_Pregunta, Texto_Respuesta });
        await nuevaRespuesta.save();
        res.status(201).json(nuevaRespuesta);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Obtener todas las respuestas
router.get('/', async (req, res) => {
    try {
        const respuestas = await Respuesta.find();
        res.json(respuestas);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Obtener una respuesta por ID
router.get('/:id', async (req, res) => {
    try {
        const respuesta = await Respuesta.findById(req.params.id);
        if (respuesta) {
            res.json(respuesta);
        } else {
            res.status(404).json({ message: 'Respuesta no encontrada' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Actualizar una respuesta por ID
router.put('/:id', async (req, res) => {
    try {
        const { ID_Test, ID_Pregunta, Texto_Respuesta } = req.body;
        const respuesta = await Respuesta.findByIdAndUpdate(
            req.params.id,
            { ID_Test, ID_Pregunta, Texto_Respuesta },
            { new: true }
        );
        if (respuesta) {
            res.json(respuesta);
        } else {
            res.status(404).json({ message: 'Respuesta no encontrada' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Eliminar una respuesta por ID
router.delete('/:id', async (req, res) => {
    try {
        const respuesta = await Respuesta.findByIdAndDelete(req.params.id);
        if (respuesta) {
            res.json({ message: 'Respuesta eliminada' });
        } else {
            res.status(404).json({ message: 'Respuesta no encontrada' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
