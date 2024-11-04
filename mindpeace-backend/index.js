const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const app = express();
const resultadoTestRoutes = require('./routes/resultadoTestRoutes');

// Middleware
app.use(cors());
app.use(express.json());

// Conectar a MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.log('Error al conectar con MongoDB:', err));

// Definir rutas
const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);

// Ruta base
app.get('/', (req, res) => {
    res.send('Bienvenido a MindPeace API');
});

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
