const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Ruta correcta al modelo User

const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

const generateToken = (user) => {
    const payload = { user: { id: user.id } };
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 360000 });
};

const loginUser = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('Invalid credentials');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Invalid credentials');
    }
    const token = generateToken(user);
    return { token };
};

module.exports = {
    hashPassword,
    generateToken,
    loginUser,
};
