const express = require('express');
const router = express.Router();
const Test = require('../models/Test_Ansiedad'); // Asegúrate de que el modelo esté en models/Test_Ansiedad.js

// Crear un nuevo test
router.post('/', async (req, res) => {
    const { ID_Usuario, Fecha, Resultado, ID_NIVEL } = req.body;

    try {
        const nuevoTest = new Test({ ID_Usuario, Fecha, Resultado, ID_NIVEL });
        await nuevoTest.save();
        res.status(201).json(nuevoTest);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Obtener todos los tests
router.get('/', async (req, res) => {
    try {
        const tests = await Test.find();
        res.json(tests);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Obtener un test por ID
router.get('/:id', async (req, res) => {
    try {
        const test = await Test.findById(req.params.id);
        if (test) {
            res.json(test);
        } else {
            res.status(404).json({ message: 'Test no encontrado' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Actualizar un test por ID
router.put('/:id', async (req, res) => {
    try {
        const { ID_Usuario, Fecha, Resultado, ID_NIVEL } = req.body;
        const test = await Test.findByIdAndUpdate(
            req.params.id,
            { ID_Usuario, Fecha, Resultado, ID_NIVEL },
            { new: true }
        );
        if (test) {
            res.json(test);
        } else {
            res.status(404).json({ message: 'Test no encontrado' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Eliminar un test por ID
router.delete('/:id', async (req, res) => {
    try {
        const test = await Test.findByIdAndDelete(req.params.id);
        if (test) {
            res.json({ message: 'Test eliminado' });
        } else {
            res.status(404).json({ message: 'Test no encontrado' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
