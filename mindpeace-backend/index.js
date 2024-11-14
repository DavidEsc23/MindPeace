const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const app = express();

// Importar rutas
const userRoutes = require('./routes/users');
const resultadoTestRoutes = require('./routes/resultadoTestRoutes');

// Middleware
app.use(cors());
app.use(express.json());

// Conectar a MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.log('Error al conectar con MongoDB:', err));

// Definir rutas
app.use('/api/users', userRoutes);
app.use('/api/results', resultadoTestRoutes); // Agregar la ruta para resultados del test

// Ruta base
app.get('/', (req, res) => {
    res.send('Bienvenido a MindPeace API');
});

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
