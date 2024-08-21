const express = require('express');
const router = express.Router();
const Pregunta = require('../models/Pregunta'); // Asegúrate de que el modelo esté en models/Pregunta.js

// Crear una nueva pregunta
router.post('/', async (req, res) => {
    const { Texto_Pregunta } = req.body;

    try {
        const nuevaPregunta = new Pregunta({ Texto_Pregunta });
        await nuevaPregunta.save();
        res.status(201).json(nuevaPregunta);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Obtener todas las preguntas
router.get('/', async (req, res) => {
    try {
        const preguntas = await Pregunta.find();
        res.json(preguntas);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Obtener una pregunta por ID
router.get('/:id', async (req, res) => {
    try {
        const pregunta = await Pregunta.findById(req.params.id);
        if (pregunta) {
            res.json(pregunta);
        } else {
            res.status(404).json({ message: 'Pregunta no encontrada' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Actualizar una pregunta por ID
router.put('/:id', async (req, res) => {
    try {
        const { Texto_Pregunta } = req.body;
        const pregunta = await Pregunta.findByIdAndUpdate(
            req.params.id,
            { Texto_Pregunta },
            { new: true }
        );
        if (pregunta) {
            res.json(pregunta);
        } else {
            res.status(404).json({ message: 'Pregunta no encontrada' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Eliminar una pregunta por ID
router.delete('/:id', async (req, res) => {
    try {
        const pregunta = await Pregunta.findByIdAndDelete(req.params.id);
        if (pregunta) {
            res.json({ message: 'Pregunta eliminada' });
        } else {
            res.status(404).json({ message: 'Pregunta no encontrada' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
