const express = require('express');
const router = express.Router();
const { saveAnxietyTest, getAnxietyTestsByUser } = require('../controllers/anxietyTestController');

// Ruta para guardar un test de ansiedad
router.post('/anxiety-test', saveAnxietyTest);

// Ruta para obtener tests de ansiedad de un usuario
router.get('/anxiety-tests/:userId', getAnxietyTestsByUser);

module.exports = router;

