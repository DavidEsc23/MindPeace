const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Ruta de ejemplo
app.get('/', (req, res) => {
    res.send('Bienvenido a MindPeace API');
});

// Rutas para el manejo de usuarios (registro, autenticación, etc.)
app.use('/api/users', require('./routes/users'));

// Conectar a MongoDB
mongoose.connect(process.env.MONGODB_URI)
   .then(() => console.log('Conectado a MongoDB'))
   .catch(err => console.log('Error al conectar con MongoDB:', err));

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
