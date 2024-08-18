const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { check, validationResult } = require('express-validator');
const { hashPassword, generateToken } = require('../services/authService');

// Registrar User
router.post(
    '/register', 
    [
        // Validación de datos
        check('username', 'El nombre de usuario es requerido').not().isEmpty(),
        check('email', 'Por favor incluye un email válido').isEmail(),
        check('password', 'Por favor ingrese una contraseña con 6 o más caracteres').isLength({ min: 6 })
    ],
    async (req, res) => {
        // Verificar errores de validación
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { username, email, password } = req.body;

        try {
            // Checar si el usuario existe
            let user = await User.findOne({ email });
            if (user) {
                return res.status(400).json({ msg: 'El usuario ya existe' });
            }

            // Crear un nuevo usuario
            user = new User({ username, email, password });

            // Encriptar contraseñas
            user.password = await hashPassword(password);

            await user.save();

            // Crear un token JWT (JSON Web Token) para el usuario
            const token = generateToken(user);
            res.json({ token });

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Error en el servidor');
        }
    }
);

module.exports = router;