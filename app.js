const mongoose = require('mongoose');
const express = require('express');


const app = express();


app.use(express.json());


app.get('/', (req, res) => {
    res.send('¡Servidor funcionando!');
});


mongoose.connect ("mongodb+srv://nombredeusuario:contraseña@cluster0.8odaw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

    .then(() => {
    console.log('Conexión a MongoDB exitosa');
})
.catch((err) => {
    console.error('Error al conectar a MongoDB:', err);
})

// Inicia el servidor en el puerto 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
