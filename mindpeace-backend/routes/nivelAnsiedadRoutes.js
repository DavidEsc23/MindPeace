const express = require('express');
const router = express.Router();
const Nivel = require('../models/NIvel_Ansiedad'); // Asegúrate de que el modelo esté en models/NIvel_Ansiedad.js

// Crear un nuevo nivel
router.post('/', async (req, res) => {
    const { Descripcion_Nivel } = req.body;

    try {
        const nuevoNivel = new Nivel({ Descripcion_Nivel });
        await nuevoNivel.save();
        res.status(201).json(nuevoNivel);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Obtener todos los niveles
router.get('/', async (req, res) => {
    try {
        const niveles = await Nivel.find();
        res.json(niveles);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Obtener un nivel por ID
router.get('/:id', async (req, res) => {
    try {
        const nivel = await Nivel.findById(req.params.id);
        if (nivel) {
            res.json(nivel);
        } else {
            res.status(404).json({ message: 'Nivel no encontrado' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Actualizar un nivel por ID
router.put('/:id', async (req, res) => {
    try {
        const { Descripcion_Nivel } = req.body;
        const nivel = await Nivel.findByIdAndUpdate(
            req.params.id,
            { Descripcion_Nivel },
            { new: true }
        );
        if (nivel) {
            res.json(nivel);
        } else {
            res.status(404).json({ message: 'Nivel no encontrado' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Eliminar un nivel por ID
router.delete('/:id', async (req, res) => {
    try {
        const nivel = await Nivel.findByIdAndDelete(req.params.id);
        if (nivel) {
            res.json({ message: 'Nivel eliminado' });
        } else {
            res.status(404).json({ message: 'Nivel no encontrado' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
