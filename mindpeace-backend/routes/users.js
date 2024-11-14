const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { registerUser, loginUser } = require('../controllers/authController');

// Ruta para registrar usuario
router.post(
    '/register', 
    [
        check('username', 'El nombre de usuario es requerido').not().isEmpty(),
        check('email', 'Por favor incluye un email válido').isEmail(),
        check('password', 'Por favor ingrese una contraseña con 6 o más caracteres').isLength({ min: 6 })
    ],
    registerUser
);

// Ruta para iniciar sesión
router.post(
    '/login',
    [
        check('email', 'Por favor incluye un email válido').isEmail(),
        check('password', 'La contraseña es requerida').exists()
    ],
    loginUser
);

module.exports = router;
