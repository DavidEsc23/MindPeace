const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { check, validationResult } = require('express-validator');
const { hashPassword, generateToken, loginUser } = require('../services/authService');

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
        console.log("Inicio de la solicitud de registro");
        console.log("Datos recibidos:", req.body);

        // Verificar errores de validación
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log("Errores de validación:", errors.array());
            return res.status(400).json({ errors: errors.array() });
        }

        const { username, email, password } = req.body;

        try {
            // Checar si el usuario existe
            let user = await User.findOne({ email });
            if (user) {
                console.log("El usuario ya existe");
                return res.status(400).json({ msg: 'El usuario ya existe' });
            }

            // Crear un nuevo usuario
            user = new User({ username, email, password });

            // Encriptar contraseñas
            user.password = await hashPassword(password);

            console.log("Usuario creado, guardando en la base de datos...");

            await user.save();

            // Crear un token JWT (JSON Web Token) para el usuario
            const token = generateToken(user);
            console.log("Usuario registrado exitosamente, enviando token...");
            res.json({ token });

        } catch (err) {
            console.error("Error en el servidor:", err.message);
            res.status(500).send('Error en el servidor');
        }
    }
);

// Login de Usuario
router.post(
    '/login',
    [
        // Validación de datos
        check('email', 'Por favor incluye un email válido').isEmail(),
        check('password', 'La contraseña es requerida').exists()
    ],
    async (req, res) => {
        console.log("Inicio de la solicitud de inicio de sesión");
        console.log("Datos recibidos:", req.body);

        // Verificar errores de validación
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log("Errores de validación:", errors.array());
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        try {
            // Buscar al usuario en la base de datos
            let user = await User.findOne({ email });
            if (!user) {
                console.log("Usuario no encontrado");
                return res.status(400).json({ msg: 'Credenciales inválidas' });
            }

            // Comparar la contraseña ingresada con la almacenada en la base de datos
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                console.log("Contraseña incorrecta");
                return res.status(400).json({ msg: 'Credenciales inválidas' });
            }

            // Generar un token JWT y responder con él
            const token = generateToken(user);
            console.log("Inicio de sesión exitoso, enviando token...");
            res.json({ token });

        } catch (err) {
            console.error("Error en el servidor:", err.message);
            res.status(500).send('Error en el servidor');
        }
    }
);

module.exports = router;
