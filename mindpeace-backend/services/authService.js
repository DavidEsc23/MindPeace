const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); 
// Asegúrate de que el modelo de usuario esté correctamente importado

const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

const generateToken = (user) => {
    const payload = { user: { id: user.id } };
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 360000 });
};

const loginUser = async (email, password) => {
    // Busca al usuario en la base de datos por su email
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('Invalid credentials');
    }

    // Compara la contraseña ingresada con la almacenada
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Invalid credentials');
    }

    // Si la autenticación es exitosa, genera un token
    const token = generateToken(user);
    return { token };
};

module.exports = {
    hashPassword,
    generateToken,
    loginUser,
};
