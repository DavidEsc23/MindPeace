const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const User = require('../models/User');
const { hashPassword, generateToken } = require('../services/authService');

// Controlador para registrar un nuevo usuario
const registerUser = async (req, res) => {
    console.log("Inicio de la solicitud de registro");
    console.log("Datos recibidos:", req.body);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log("Errores de validación:", errors.array());
        return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (user) {
            console.log("El usuario ya existe");
            return res.status(400).json({ msg: 'El usuario ya existe' });
        }

        user = new User({ username, email, password });
        user.password = await hashPassword(password);

        console.log("Usuario creado, guardando en la base de datos...");
        await user.save();

        const token = generateToken(user);
        console.log("Usuario registrado exitosamente, enviando token...");
        res.json({ token });

    } catch (err) {
        console.error("Error en el servidor:", err.message);
        res.status(500).send('Error en el servidor');
    }
};

// Controlador para iniciar sesión
const loginUser = async (req, res) => {
    console.log("Inicio de la solicitud de inicio de sesión");
    console.log("Datos recibidos:", req.body);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log("Errores de validación:", errors.array());
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (!user) {
            console.log("Usuario no encontrado");
            return res.status(400).json({ msg: 'Credenciales inválidas' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            console.log("Contraseña incorrecta");
            return res.status(400).json({ msg: 'Credenciales inválidas' });
        }

        const token = generateToken(user);
        console.log("Inicio de sesión exitoso, enviando token...");
        res.json({ token, userId: user._id }); // Incluye el userId para usarlo en el frontend

    } catch (err) {
        console.error("Error en el servidor:", err.message);
        res.status(500).send('Error en el servidor');
    }
};

module.exports = { registerUser, loginUser };
